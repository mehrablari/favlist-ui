// import { useState, useEffect } from "react";
// import DismisIcon from "../assets/icons/Dismiss.svg";



// const AnswerSubmit = ({ selectedOption }) => {
  

//   return (
//     <div className="flex flex-col p-[10px]">
//       {nameList.map((nameItem, index) => (
//         <div
//           key={index}
//           className="w-[327px] bg-primary-bg rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
//         >
//           <span className="text-[13px] h-[16px]">{nameItem}</span>
//           <img
//             src={DismisIcon}
//             alt="dismiss icon"
//             onClick={() => handleDismiss(index)}
//           />
//         </div>
//       ))}
//       <button
//         className={`h-[40px] bg-primary text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px] ${
//           isButtonActive ? "" : "opacity-10 cursor-not-allowed"
//         }`}
//         type="submit"
//         disabled={!isButtonActive}
//       >
//         Preview Answers
//       </button>
//     </div>
//   );
// };

// export default AnswerSubmit;


// import { useState, useEffect } from "react";
// import DismisIcon from "../assets/icons/Dismiss.svg";



// const AnswerSubmit = ({ selectedOption }) => {
//   console.log("this is selcted",selectedOption)
  

//   return (
//     <div className="flex flex-col p-[10px]">
//         <div
//           className="w-[327px] bg-primary-bg rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
//         >
//           <span className="text-[13px] h-[16px"></span>
//           <img
//             src={DismisIcon}
//             alt="dismiss icon"
           
//           />
//         </div>
//       <button
//         className="h-[40px] bg-primary text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px]"
//         type="submit"
//       >
//         Preview Answers
//       </button>
//     </div>
//   );
// };

// export default AnswerSubmit;


// import { useContext, useEffect } from "react";
// import DismisIcon from "../assets/icons/Dismiss.svg";
// import { AnswerContext } from "./context/AnswerContext";

// const AnswerSubmit = () => {
//   const { selectedOption, isButtonActive, nameList, setNameList } = useContext(AnswerContext);

//   useEffect(() => {
//     if (selectedOption) {
//       setNameList((prevNameList) => [...prevNameList, selectedOption.title]);
//     }
//   }, [selectedOption, setNameList]);

//   const handleDismiss = (index) => {
//     const updatedNameList = [...nameList];
//     updatedNameList.splice(index, 1);
//     setNameList(updatedNameList);
//   };

//   return (
//     <div className="flex flex-col p-[10px]">
//       {nameList.map((nameItem, index) => (
//         <div
//           key={index}
//           className="w-[327px] bg-primary-bg rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
//         >
//           <span className="text-[13px] h-[16px]">{nameItem}</span>
//           <img
//             src={DismisIcon}
//             alt="dismiss icon"
//             onClick={() => handleDismiss(index)}
//           />
//         </div>
//       ))}
//       <button
//         className={`h-[40px] bg-primary text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px] ${
//           isButtonActive ? "" : "opacity-10 cursor-not-allowed"
//         }`}
//         type="submit"
//         disabled={!isButtonActive}
//       >
//         Preview Answers
//       </button>
//     </div>
//   );
// };

// export default AnswerSubmit;




// //button: className=" h-[40px] bg-gray-purple text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px]"