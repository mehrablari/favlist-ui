import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../../assets/images/logoAllWhite.png";
import FilterHeader from "./FilterHeader";
import NavBar from "../../NavBar";
import FilterCategory from "./FilterCategory";

const FilterContainer = () => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.pacerlabs.co/api/v1/search-archive/filter",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        response.data;

        setFilterData(response.data.data.content);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setFilterData(null);
      }
    };

    fetchData();
  }, []);

  if (!filterData) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen">
        <img src={Logo} alt="loading logo" className=" h-[70px]" />
      </div>
    );
  }
  return (
    <div className="bg-neutral mx-auto">
      <NavBar />
      <FilterHeader />
      <FilterCategory filterData={filterData} />
    </div>
  );
};

export default FilterContainer;
