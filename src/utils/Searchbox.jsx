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
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full pt-[10px] font-baloo2">
      <div className="w-[327px] sm:w-[300px] mx-auto relative flex items-center justify-center align-middle">
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
            className="placeholder:w-[200px] sm:placeholder:w-[150px] sm:placeholder:text-[14px] placeholder:text-[14px] placeholder:h-[20px] sm:placeholder:pl-[40px] md:placeholder:pl-[35px] placeholder:pl-[40px] placeholder:pt-[10px] border-2 border-primary-lighter active:border-type-active p-[12px] text-sm outline-none sm:w-[340px] w-[360px] rounded-[12px] h-[44px] hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbox
  