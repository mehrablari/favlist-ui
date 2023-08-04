import React, { useState } from "react";
import Calendar from "../.../../../../../assets/images/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px]">
        <img
          src={Calendar}
          alt="calendar"
          className="mt-[10px] w-[20px] h-[20px]"
        />
          <DatePicker
          placeholderText="Exact date"
          isClearable={false}
            className="pt-[12px] pl-[15px] font-[400] text-[13px] leading-4"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
      </div>
    </div>
  );
};

export default DateRange;
