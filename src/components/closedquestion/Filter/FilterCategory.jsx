import "./TabContainer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import CategoryChecker from "./CategoryChecker";
import KeywordFilter from "./KeywordFilter";
import FilterSubmission from "./FilterSubmission";
import FilterDate from "./FilterDate";

const FilterCategory = ({ filterData }) => {
  const [checkedCategories, setCheckedCategories] = useState([]);


  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [exactDate, setExactDate] = useState("");
  const [activeTab, setActiveTab] = useState("tabone");
  const [filterPayload, setFilterPayload] = useState({ searchText: "" });

  const handleInputChange = (event) => {
    setFilterPayload({
      ...filterPayload,
      searchText: event.target.value,
    });
  };
  const handleTabOne = () => {
    setActiveTab("tabone");
  };
  const handleTabTwo = () => {
    setActiveTab("tabtwo");
  };

  //date range selection
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  //exactdate selection
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleExactDateChange = (date) => {
    setExactDate(date);
  };

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.checked === true) {
      setCheckedCategories((categories) => [...categories, event.target.name]);
    }
  };

  const handleSubmission = () => {
    setIsLoading(true);

    const payload = {
      ...filterPayload,
      categories: checkedCategories.join(","),
      startDate: startDate
        ? new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
            .toISOString()
            .split("T")[0]
        : null,
      endDate: endDate
        ? new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000)
            .toISOString()
            .split("T")[0]
        : null,
      exactDate: exactDate
        ? new Date(exactDate.getTime() - exactDate.getTimezoneOffset() * 60000)
            .toISOString()
            .split("T")[0]
        : null,
    };

    let apiUrl = "https://api.favlist.net/api/v1/search-archive/filter?";

    // Add conditions to the URL based on the payload
    if (payload.searchText) {
      apiUrl += `searchText=${payload.searchText}`;
    }
    if (payload.categories) {
      apiUrl += `&categories=${payload.categories}`;
    }
    if (payload.startDate) {
      apiUrl += `&startDate=${payload.startDate}`;
    }
    if (payload.endDate) {
      apiUrl += `&endDate=${payload.endDate}`;
    }
    if (payload.exactDate) {
      apiUrl += `&exactDate=${payload.exactDate}`;
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data && data.status && data.status.toLowerCase() === "success") {
          const serializedData = JSON.stringify(data.data.content);

          navigate(
            `/filterpage?filteredData=${encodeURIComponent(serializedData)}`
          );
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching filtered data:", error);
      });
  };

  return (
    <div className="flex flex-col font-sans">
      <KeywordFilter handleInputChange={handleInputChange} />
      <CategoryChecker
        filterCategory={filterData}
        handleChange={handleChange}
      />
      <FilterDate
        handleTabOne={handleTabOne}
        handleTabTwo={handleTabTwo}
        activeTab={activeTab}
        exactDate={exactDate}
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleExactDateChange={handleExactDateChange}
        handleEndDateChange={handleEndDateChange}
      />

      <FilterSubmission handleSubmit={handleSubmission} isLoading={isLoading} />
    </div>
  );
};

export default FilterCategory;
