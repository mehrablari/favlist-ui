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
  const [filterPayload, setFilterPayload] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [exactDate, setExactDate] = useState(null);
  const [activeTab, setActiveTab] = useState("tabone");

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

  const handleInputChange = (event) => {
    setFilterPayload({
      ...filterPayload,
      searchText: event.target.value,
    });
  };

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

    console.log(124, payload)
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
        // console.log("Filtered data:", data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching filtered data:", error);
      });
  };

  return (
    <div className="flex flex-col">
      <KeywordFilter handleInputChange={handleInputChange} />
      <FilterDate
        handleTabOne={handleTabOne}
        handleTabTwo={handleTabTwo}
        activeTab={activeTab}
        exactDate={exactDate}
        handleStartDateChange={handleStartDateChange}
        handleExactDateChange={handleExactDateChange}
        handleEndDateChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
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

{
  /* <div>
        <h1 className="font-[500] text-[12px] pl-[20px] pb-[10px]leading-4 flex bg-bg-grey w-full h-[33px] ">
          FILTER BY DATE
        </h1>
        <div className="tab-ul h-[30px] flex flex-col gap-[20px]">
          <ul className="flex flex-row list-none text-center cursor-pointer justify-around border rounded-[12px] font-[400] text-[13px] leading-4 w-[327px] mx-auto">
            <li
              onClick={handleTabOne}
              className={`cursor-pointer ${
                activeTab === "tabone"
                  ? "active text-white bg-primary-light"
                  : "text-gray-dark"
              } `}
            >
              Exact Date
            </li>
            <li
              onClick={handleTabTwo}
              className={`cursor-pointer ${
                activeTab === "tabtwo"
                  ? "active text-white bg-primary-light"
                  : "text-gray-dark"
              } `}
            >
              Date Range
            </li>
          </ul>
          <div>
            {activeTab === "tabone" ? (
              <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px] ">
                <img
                  src={Calendar}
                  alt="calendar"
                  className="mt-[10px] w-[20px] h-[20px]"
                />
                <DatePicker
                  className="pt-[13px] pl-[15px] font-[400] text-[13px] leading-4 pr-[10px] "
                  selected={exactDate}
                  onChange={handleExactDateChange}
                  placeholderText="Select exact date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            ) : (
              <div>
                <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px]">
                  <img
                    src={Calendar}
                    alt="calendar"
                    className="mt-[10px] w-[20px] h-[20px] "
                  />
                  <DatePicker
                    className="pt-[13px] pl-[15px] font-[400] text-[13px] leading-4"
                    selected={startDate}
                    onChange={handleStartDateChange}
                    placeholderText="Select start date"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px] ">
                  <img
                    src={Calendar}
                    alt="calendar"
                    className="mt-[10px] w-[20px] h-[20px]"
                  />
                  <DatePicker
                    className="pt-[13px] pl-[15px] font-[400] text-[13px] leading-4 pr-[10px] "
                    selected={endDate}
                    onChange={handleEndDateChange}
                    placeholderText="Select end date"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
  </div> */
}
