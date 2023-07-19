import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";



export default function Highlights({ answerData, activeAnswerJson, handleFilter}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submit, setSubmit] = useState(null);
  const [inputLength, setInputLength] = useState(0);

  // const datalist = activeAnswerJson && activeAnswerJson.map((item, id) => (
  //   {  id: `${item}-${id}`,label: item, value: item }
  // ));


  // const isOptionEqualToValue = (option, value) => option.value === value.value;
  
  
 

    const handleInputChange = (event) => {
      const inputValue = event.target.value;
  
      handleFilter(inputValue)
      setInputLength(inputValue.length);
      if (inputValue.length > 5) {
        setSelectedOption(null);
      }
    };
     
    
  
  return (
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full p-[60px] ">
      <div className="mx-auto my-10 relative flex items-center justify-center">
        <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
          <SearchIcon className="h-[15px] w-[15px] text-gray-lighter" aria-hidden="true" />
        </span>
        <div className="flex-grow">
          <input
            onChange={(event, newValue) => {
              handleInputChange(event, newValue);
            }}
            
            disabled={selectedOption && selectedOption.length >= 5}
            type="search"
            placeholder="Start typing an answer..."
            className="placeholder:w-[180px] placeholder:text-[13px] placeholder:h-[16px] placeholder:pl-[30px] placeholder:pt-[10px] border-2 border-primary p-[12px] text-lg outline-none w-full rounded-[12px] h-[44px]"
          />
        </div>
      </div>
    </div>
  );
}