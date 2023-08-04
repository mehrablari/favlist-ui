import SearchIcon from "@mui/icons-material/Search";
import TabContainers from "./Tabs/TabContainers";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterCategory = ({ filterData }) => {
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [filterPayload, setFilterPayload] = useState({});
   const [fetchedData, setFetchedData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   //daterange
   const [selectedDate, setSelectedDate] = useState(null);

   const handleDateChange = (date) => {
     setSelectedDate(date);
   };

   const navigate = useNavigate()
   

  const handleInputChange = (event) => {
    setFilterPayload({
      ...filterPayload,
      searchText: event.target.value,
    });
    // console.log(event.target.value);
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
      categories: checkedCategories.join(",")
    }

    console.log(124, payload)
    let apiUrl;
    if (payload.searchText) {
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?searchText=${payload.searchText}`
    } 
    if (payload.categories) {
      apiUrl = `https://dev.pacerlabs.co/api/v1/search-archive/filter?categories=${payload.categories}`

    }

    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(false);
      if (data && data.status && data.status.toLowerCase() === "success") {
        const serializedData = JSON.stringify(data.data.content);
        navigate(`/filterpage?filteredData=${encodeURIComponent(serializedData)}`);
      }
      console.log("Filtered data:", data);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error("Error fetching filtered data:", error);
    });
  }



  return (
    <div className="flex flex-col">
      <div>
        <h1 className="pl-[20px] font-[500] text-[12px] leading-4 bg-bg-grey h-[33px] px-[24px]  py-[8px]">
          FILTER BY KEYWORD
        </h1>
        <div className="flex flex-col py-[10px] h-[116px] w-327px ">
          <h1 className="font-[400] text-[13px] pr-[83px] pb-[5px]leading-4 w-[327px] flex justify-center align-middle">
            Enter a search term
          </h1>
          <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle bg-neutral">
            <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
            <div className="flex-grow">
              <input
                onChange={handleInputChange}
                type="search"
                placeholder="search..."
                className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[10px] border border-search p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-[500] text-[12px] pl-[20px] pb-[5px]leading-4 flex bg-bg-grey w-full h-[33px] ">
          FILTER BY DATE
        </h1>
        <TabContainers />
      </div>
      <div className="pt-[180px] ">
        <h1 className="font-[500] h-[32px] text-[12px] pl-[20px] pb-[5px]leading-4 flex bg-bg-grey w-full ">
          FILTER BY CATEGORY
        </h1>
        <div className="pl-[12px]">
          {filterData.map((filter, index) => (
            <div key={index} className="py-[10px] gap-[8px] h-[36px]">
              <label>
                <input
                  type="checkbox"
                  name={filter.category.name}
                  onChange={handleChange}
                />
                <span className="pl-[10px] font-[400] text-[16px] leading-4 text-gray-list">
                  {filter.category.name.charAt(0).toUpperCase() +
                    filter.category.name.slice(1).toLowerCase()}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="#" className="flex justify-center align-middle p-[20px]">
          <button
            onClick={handleSubmission}
            className="h-[52px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto bg-primary cursor-not-allowed text-neutral"
            type="submit"
          >
            {isLoading ? "Applying..." : "Apply Filters"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilterCategory;
