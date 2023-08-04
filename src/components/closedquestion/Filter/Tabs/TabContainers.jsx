import { useState } from "react";
import "./TabContainer.css";
import DateRange from "./DateRange";
import ExactDate from "./ExactDate";

const TabContainers = () => {
  const [activeTab, setActiveTab] = useState("tabone");

  const handleTabOne = () => {
    setActiveTab("tabone");
  };
  const handleTabTwo = () => {
    setActiveTab("tabtwo");
  };
  return (
    <div className="h-[40px] p-[10px] ">
      <ul className="tab-ul flex flex-row list-none text-center cursor-pointer justify-around border rounded-[12px] font-[400] text-[13px] leading-4 w-[327px] mx-auto">
        <li
          onClick={handleTabOne}
          className={`cursor-pointer ${
            activeTab === "tabone"
              ? "active text-white bg-primary-light"
              : "text-gray-dark"
          } `}
        >
          Exact date
        </li>
        <li
          onClick={handleTabTwo}
          className={`cursor-pointer ${
            activeTab === "tabtwo"
              ? "active text-white bg-primary-light"
              : "text-neutral"
          } text-gray-dark`}
        >
          Date range
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tabone" ? <DateRange /> : <ExactDate />}
      </div>
    </div>
  );
};

export default TabContainers;
