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
  // const [filterPayload, setFilterPayload] = useState({});

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
    console.log("Start Date Selected:", date);
    setStartDate(date);
  };

  //exactdate selection
  const handleEndDateChange = (date) => {
    console.log("end Date Selected:", date);
    setEndDate(date);
  };

  const handleExactDateChange = (date) => {
    console.log("exact Date Selected:", date);
    setExactDate(date);
  };

  const navigate = useNavigate();

  // const handleInputChange = (event) => {
  //   setFilterPayload({
  //     ...filterPayload,
  //     searchText: event.target.value,
  //   });
  // };
  

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
      startDate: startDate ? startDate.toISOString().split("T")[0] : null,
      endDate: endDate ? endDate.toISOString().split("T")[0] : null,
      exactDate: exactDate ? exactDate.toISOString().split("T")[0] : null,
    };

    // console.log(124, payload)
    let apiUrl;
    if (payload.searchText) {
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?searchText=${payload.searchText}`;
    }
    if (payload.categories) {
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?categories=${payload.categories}`;
    }

    if (payload.startDate) {
      // apiUrl += `&startDate=${payload.startDate}`;
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?startDate=${payload.startDate}`;
    }

    if (payload.endDate) {
      // apiUrl += `&endDate=${payload.endDate}`;
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?endDate=${payload.endDate}`;
    }
    if (payload.exactDate) {
      // apiUrl += `&exactDate=${payload.exactDate}`;
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?exactDate=${payload.exactDate}`;
    }

    // let apiUrl = "https://dev.pacerlabs.co/api/v1/search-archive/filter";

    // if (payload.searchText) {
    //   apiUrl += `?searchText=${payload.searchText}`;
    // }

    // if (payload.categories) {
    //   apiUrl += `&categories=${payload.categories}`;
    // }

    // if (payload.startDate) {
    //   apiUrl += `&startDate=${payload.startDate}`;
    // }

    // if (payload.endDate) {
    //   apiUrl += `&endDate=${payload.endDate}`;
    // }

    // if (payload.exactDate) {
    //   apiUrl += `&exactDate=${payload.exactDate}`;
    // }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data && data.status && data.status.toLowerCase() === "success") {
          const serializedData = JSON.stringify(data.data.content);
          // Navigate to FilterPage and pass filtered data as state
          // navigate("/filterpage", { state: { filteredData: serializedData } });

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

      <CategoryChecker
        filterCategory={filterData}
        handleChange={handleChange}
      />
      <FilterSubmission handleSubmit={handleSubmission} isLoading={isLoading} />
    </div>
  );
};

export default FilterCategory;
