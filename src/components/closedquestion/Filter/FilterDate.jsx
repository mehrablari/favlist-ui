import "./TabContainer.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../../assets/images/Calendar.png";

const FilterDate = ({
  handleTabOne,
  handleTabTwo,
  activeTab,
  exactDate,
  handleStartDateChange,
  handleEndDateChange,
  handleExactDateChange,
  startDate,
  endDate,
}) => {
  return (
    <div>
      <h1 className="font-[500] text-[12px] pl-[20px] pb-[10px]leading-4 flex bg-bg-grey w-full h-[33px] font-sans ">
        FILTER BY DATE
      </h1>
      <div className="tab-ul h-[30px] flex flex-col gap-[20px]">
        <ul className="flex flex-row list-none text-center cursor-pointer justify-around border rounded-[12px] font-[400] text-[13px]  leading-4 w-[327px] mx-auto">
          <li
            onClick={handleTabOne}
            className={`cursor-pointer ${
              activeTab === "tabone"
                ? "active text-neutral bg-primary-light rounded-l-[11px]"
                : "text-gray-dark"
            } `}
          >
            Exact Date
          </li>
          <li
            onClick={handleTabTwo}
            className={`cursor-pointer ${
              activeTab === "tabtwo"
                ? "active text-neutral bg-primary-light rounded-r-[11px]"
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
    </div>
  );
};

export default FilterDate;
