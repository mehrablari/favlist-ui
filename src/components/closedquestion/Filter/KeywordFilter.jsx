import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const KeywordFilter = ({ handleInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleInputChange(value);
  };
  return (
    <div>
      <h1 className="pl-[20px] font-[500] text-[12px] leading-4 bg-bg-grey h-[33px] px-[24px]  py-[8px] font-sans">
        FILTER BY KEYWORD
      </h1>
      <div className="flex flex-col py-[10px] h-[116px] w-327px ">
        <h1 className="font-[400] text-[13px] pr-[83px] pb-[5px]leading-4 w-[327px] flex justify-center align-middle">
          Enter a search term
        </h1>
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle bg-neutral">
          {inputValue.length === 0 && (
            <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
          )}
          <div className="flex-grow">
            <input
              onChange={handleInput}
              type="search"
              placeholder="search..."
              className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[10px] border w-[327px] border-primary-lighter active:border-type-active p-[12px] text-sm outline-none sm:w-[280px] rounded-[12px] h-[44px] hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordFilter;
