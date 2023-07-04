

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "./data";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import AnswerSubmit from "./AnswerSubmit";

export default function Highlights(answerData) {
  const [selectedOption, setSelectedOption] = useState([]);

  
  
console.log(answerData)
  const handleOptionSelect = (event, value) => {
    setSelectedOption(value);
  };

  const isButtonActive = selectedOption && selectedOption.length >= 3;
  const isAutocompleteDisabled = selectedOption && selectedOption.length >= 5;

  return (
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full pt-[80px]">
      <Autocomplete
        className="bg-neutral mx-auto w-[327px]"
        id="highlights-demo"
        options={data}
        getOptionLabel={(option) => option.title}
        onChange={handleOptionSelect}
        disabled={isAutocompleteDisabled}
        renderInput={(params) => (
          <TextField
            fullWidth
            color="secondary"
            id="fullWidth"
            {...params}
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
          />
        )}
      />
      <AnswerSubmit selectedOption={selectedOption} isButtonActive={isButtonActive} />
    </div>
  );
}


// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import data from "./data";
// import SearchIcon from "@mui/icons-material/Search";
// import { useContext } from "react";
// import { AnswerContext } from "./context/AnswerContext";

// export default function Searchbox() {
//   const { selectedOption } = useContext(AnswerContext);

//   const handleOptionSelect = (event, value) => {
//     // Update the selectedOption value using the context API or any other mechanism
//   };

//   const isAutocompleteDisabled = selectedOption && selectedOption.length >= 5;

//   return (
//     <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full pt-[80px]">
//       <Autocomplete
//         className="bg-neutral mx-auto w-[327px]"
//         id="highlights-demo"
//         options={data}
//         getOptionLabel={(option) => option.title}
//         onChange={handleOptionSelect}
//         disabled={isAutocompleteDisabled}
//         renderInput={(params) => (
//           <TextField
//             fullWidth
//             color="secondary"
//             id="fullWidth"
//             {...params}
//             InputProps={{
//               ...params.InputProps,
//               placeholder: "Start typing an answer",
//               startAdornment: (
//                 <>
//                   <SearchIcon color="action" />
//                   {params.InputProps.startAdornment}
//                 </>
//               ),
//               endAdornment: null,
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// }
