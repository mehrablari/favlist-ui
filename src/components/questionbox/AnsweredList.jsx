import SettingsIcon from '@mui/icons-material/Settings';
import NoAnswer from '../../assets/images/Noanswers.svg';
import { Link } from 'react-router-dom';

const AnsweredList = () => {
  return (
    <div className="flex flex-col p-[20px] bg-neutral justify-between">
      <div className="bg-neutral p-[12px] flex flex-row justify-between ">
        <div className="text-grey-text">
          <p className='text-[15px] font-[600]'>Your Answers</p>
          <p className='text-[12px] font-[400]'>Minimum 3, maximum 5 answers</p>
        </div>
        <Link to="background" className='text-primary-light cursor-pointer'>
          <span className="text-primary text-[12px] font-[500]">Answer settings</span>
          <SettingsIcon sx={{color:"#A13E97",height:"12px"}}/>
          
        </Link>
      </div>
      <div className="w-[126px] mx-auto p-[12px] flex flex-col gap-[20px] justify-center">
        <div className=" flex justify-center">

          <img src={NoAnswer} alt="this a placeholder " className='w-[80px] h-[80px]'  />
        </div>
        <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3">
          Select answers from the bubbles above to fill up your answers
        </h3>
      </div>
    </div>
  );
};

export default AnsweredList;



// import React, { useState } from "react";
// import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

// const AnsweredList = ({ newValue }) => {
//   const [showValue, setShowValue] = useState(false);

//   // Function to toggle the visibility of the value
//   const toggleValueVisibility = () => {
//     setShowValue(!showValue);
//   };

//   return (
//     <div className="flex flex-col p-[20px] bg-neutral">
//       <ul className="bg-neutral p-[12px] flex flex-row justify-between ">
//         <li className="text-grey-text">Your Answers</li>
//         <li>
//           <span className="text-primary">Answer settings</span>
//           <ArrowCircleRightOutlinedIcon
//             className="text-primary"
//             onClick={toggleValueVisibility}
//           />
//         </li>
//       </ul>
//       <div className="w-[126px] mx-auto p-[12px] flex flex-col gap-[20px] justify-center">
//         <img
//           src=""
//           alt="this a placeholder"
//           className="w-[50px] h-[50px] rounded-[16px]"
//         />
//         {showValue ? (
//           <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3">
//             {newValue}
//           </h3>
//         ) : (
//           <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3 hidden">
//             Select answers from the bubbles above to fill up your answers
//           </h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnsweredList;




// import React, { useState } from "react";
// import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

// const AnsweredList = ({ newValue, showValue }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to toggle the visibility of the value
//   const toggleValueVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div className="flex flex-col p-[20px] bg-neutral">
//       <ul className="bg-neutral p-[12px] flex flex-row justify-between ">
//         <li className="text-grey-text">Your Answers</li>
//         <li>
//           <span className="text-primary">Answer settings</span>
//           <ArrowCircleRightOutlinedIcon
//             className="text-primary"
//             onClick={toggleValueVisibility}
//           />
//         </li>
//       </ul>
//       <div className="w-[126px] mx-auto p-[12px] flex flex-col gap-[20px] justify-center">
//         <img
//           src=""
//           alt="this a placeholder"
//           className="w-[50px] h-[50px] rounded-[16px]"
//         />
//         {isVisible && showValue ? (
//           <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3">
//             {newValue}
//           </h3>
//         ) : (
//           <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3 hidden">
//             Select answers from the bubbles above to fill up your answers
//           </h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnsweredList;


// Say i want to create a backdrop such that when i click this element it create an overlay over the whole component, <Link to="settings" className='text-primary-light cursor-pointer'>
//           <span className="text-primary text-[12px] font-[500]">Answer settings</span>
//           <SettingsIcon sx={{color:"#A13E97",height:"12px"}}/>
          
//         </Link>
