import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { LayoutContext } from "../components/Layout";



const Searchbox = () => {
  const {handleFilter} = useContext(LayoutContext);
 

  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLength, setInputLength] = useState(0);
  const [inputValue, setInputValue] = useState("");


    const handleInputChange = (event) => {
      const inputValue = event.target.value;
  
      handleFilter(inputValue)
      setInputLength(inputValue.length);
      setInputValue(inputValue);
      if (inputValue.length > 5) {
        setSelectedOption(null);
      }
    };
     
    

  return (
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full pt-[100px] pb-[20px] font-baloo2">
      <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle">
        {inputValue.length === 0 && (
          <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
            <SearchIcon className="h-[15px] w-[15px] text-gray-lighter" aria-hidden="true" />
          </span>
        )}
        <div className="flex-grow">
          <input
            onChange={(event, newValue) => {
              handleInputChange(event, newValue);
            }}
            
            disabled={selectedOption && selectedOption.length >= 5}
            type="search"
            placeholder="Start typing an answer..."
            className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[10px] border-2 border-primary-lighter active:border-type-active p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px] hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbox
  