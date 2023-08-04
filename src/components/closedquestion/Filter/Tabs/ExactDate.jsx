
import { useState } from "react";
import Calendar from "../.../../../../../assets/images/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExactDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px]">
        <img src={Calendar} alt="calendar" className="mt-[10px] w-[20px] h-[20px] " />
        <DatePicker className="pt-[13px] pl-[15px] font-[400] text-[13px] leading-4"
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Select start date"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px] ">
        <img src={Calendar} alt="calendar" className="mt-[10px] w-[20px] h-[20px]" />
        <DatePicker className="pt-[13px] pl-[15px] font-[400] text-[13px] leading-4 pr-[10px] "
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="Select end date"
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
};

export default ExactDate;
