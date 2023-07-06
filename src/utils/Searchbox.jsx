// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import data from "./data";
import SearchIcon from "@mui/icons-material/Search";
// import { useState } from "react";
// import Select from 'react-select';


// export default function Highlights({answerData, activeAnswerJson}) {
//   const [selectedOption, setSelectedOption] = useState(null);




//   const datalist = activeAnswerJson && activeAnswerJson.map((item, id) => (
    
//       <div key={id}>
//         <li>
//           {item}
//         </li>
        
//       </div>
//   ));

import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Highlights({ answerData, activeAnswerJson }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const datalist = activeAnswerJson && activeAnswerJson.map((item, id) => (
    {  id: `${item}-${id}`,label: item, value: item }
  ));

  const isOptionEqualToValue = (option, value) => option.value === value.value;

  return (
    <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full p-[60px] ">
      {
        datalist ? (
        <Autocomplete
        className="w-[327px] mx-auto h-[44px] rounded-[20px]"
          value={selectedOption}
          onChange={(event, newValue) => {
            setSelectedOption(newValue);
          }}
          options={datalist}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={isOptionEqualToValue}
          renderInput={(params) => (
            <TextField
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
        />) : null
      }
    </div>
  );
}





 // if(!answerData) {
//   return <p>Loading</p>
// }
  // console.log("this is answerdata:",answerData)

  // const isButtonActives = selectedOption && selectedOption.length >= 3;
  // const isAutocompleteDisabled = selectedOption && selectedOption.length >= 5;


// {/* <Autocomplete
// className="bg-neutral mx-auto w-[327px]"
// id="highlights-demo"
// options={datalist}
// getOptionLabel={(option) => option}
// // onChange={handleOptionSelect}
// // disabled={isAutocompleteDisabled}
// renderInput={(params) => (
//   <TextField
//     fullWidth
//     color="secondary"
//     id="fullWidth"
//     {...params}
    // InputProps={{
    //   ...params.InputProps,
    //   placeholder: "Start typing an answer",
    //   startAdornment: (
    //     <>
    //       <SearchIcon color="action" />
    //       {params.InputProps.startAdornment}
    //     </>
    //   ),
    //   endAdornment: null,
    // }}
//   />
// )}
// /> */}

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
