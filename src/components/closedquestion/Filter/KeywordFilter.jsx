import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const KeywordFilter = ({ handleInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    const value = event;
    setInputValue(value);
    handleInputChange(event);
  };
  return (
    <div className="h-[120px]">
      <h1 className="pl-[20px] font-[500] text-[14px] leading-4 bg-bg-grey h-[33px] px-[24px]  py-[8px] font-sans">
        FILTER BY KEYWORD
      </h1>
      <div className="flex flex-col py-[10px] h-[116px] w-327px ">
        <h1 className="font-[400] text-[14px] px-[24px] pb-[5px]leading-4 mx-auto w-[327px] flex justify-center align-middle">
          Enter a search term
        </h1>
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle bg-neutral">
          {inputValue.length === 0 && (
            <span className="absolute right-[10px] top-[2.5px] h-full flex items-center">
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
              className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[14px] placeholder:text-[14px] placeholder:h-[16px] sm:placeholder:pl-[40px] placeholder:pl-[30px] placeholder:pt-[10px] border w-[327px] border-primary-lighter active:border-type-active p-[12px] text-sm outline-none sm:w-[327px] rounded-[12px] h-[44px] hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordFilter;
