import SearchIcon from "@mui/icons-material/Search";
import Popper from '@mui/material/Popper';
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";



export default function Highlights({ answerData, activeAnswerJson, handleSubmission}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submit, setSubmit] = useState(null);
  const [inputLength, setInputLength] = useState(0);

  const datalist = activeAnswerJson && activeAnswerJson.map((item, id) => (
    {  id: `${item}-${id}`,label: item, value: item }
  ));


  const isOptionEqualToValue = (option, value) => option.value === value.value;
  
  

  const handleOptionChange = (event, newValue) => {
    if (!selectedOption || newValue?.value !== selectedOption?.value) {
      const isOptionSelected = selectedOption ? selectedOption.value === newValue?.value : false;
      if (isOptionSelected) {
        console.log("Option has already been selected");
        
      } else {
        setSelectedOption(newValue);
      }
    }
  };

    const handleSubmit = (event, newValue) => {
      setSubmit(newValue.value);
      handleSubmission(newValue.value)
      
    };

    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setInputLength(inputValue.length);
      if (inputValue.length > 5) {
        setSelectedOption(null);
      }
    };
  
    
  
  return (
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full p-[60px] ">
      {datalist ? (
        <Autocomplete
          className="w-[327px] mx-auto h-[44px] rounded-[20px] flex justify-center align-middle"
          value={selectedOption}
          onChange={(event, newValue) => {
            handleOptionChange(event, newValue);
            handleSubmit(event, newValue); // Call both functions
          }}
          PopperComponent={Popper}
          
          options={datalist}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={isOptionEqualToValue}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleInputChange}
              InputProps={{
                ...params.InputProps,
                placeholder: "Start typing an answer",
                startAdornment: (
                  <>
                    <SearchIcon color="action" />
                    {params.InputProps.startAdornment}
                  </>
                ),
                endAdornment: null,
              }}
              // disabled={isDisabled}
            />
          )}
          disabled={selectedOption && selectedOption.length >= 5}
        />
      ) : null}
    </div>
  );
}


