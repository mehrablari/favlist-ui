import AnswerHeader from "./AnswerHeader";

import AnswerSettings from "./AnswerSettings";
import DismisIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";


const AnsweredList = ({ answers, handleDismiss }) => {
  const handlePreviewAnswers = () => {
    // Handle the preview answers logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="bg-neutral p-[10px]" onClick={handleSubmit}>
      <AnswerHeader />

      {answers.length === 0 && <AnswerSettings />}

      {answers.length > 0 &&
        answers.map((answer, index) => (
          <div
            className="bg-neutral w-[327px] mx-auto"
            key={index}
          >
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
                <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                  <span className="text-[13px] h-[16px]">{answer}</span>

                  <img src={DismisIcon} alt="dismiss icon" onClick={() => handleDismiss(index)} />
                </div>
              </div>

          </div>
        ))}

      {answers.length > 0 && (
          <Link to="/preview" className="flex justify-center align-middle">
            <button
                className={`h-[40px] bg-primary text-center rounded-lg font-[600] text-[14px] text-neutral w-[310px] mx-auto${
                  answers.length >= 3 ? "" : "bg-gray-light cursor-not-allowed"
                }`}
                type="submit"
                disabled={answers.length < 3}
                onClick={handlePreviewAnswers}
              >
                Preview Answers
              </button>
          </Link>
      )}
    </form>
  );
};

export default AnsweredList;





// import AnswerHeader from "./AnswerHeader";
// import { useState, useEffect } from "react";
// import AnswerSettings from "./AnswerSettings";
// import DismisIcon from "../../assets/icons/Dismiss.svg";
// import { Link } from "react-router-dom";
// import AnswerCard from "./AnswerCard";

// const AnsweredList = ({ answers }) => {
 
//   const handlePreviewAnswers = () => {
//     // Handle the preview answers logic
//   };

//   // const isButtonActive = answers.length >= 3 && answers.length <= 5;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="bg-neutral p-[20px] mx-auto">
//       <AnswerHeader />
//       {answers.length === 0 && <AnswerSettings />}

//       {answers.length > 0 &&
//         answers?.map((answer, index) => {
//           return (
//             <form
//               className="flex flex-col p-[10px] w-[327px] mx-auto"
//               key={index}
//               onSubmit={handleSubmit}
//             >
              // <div className="bg-neutral p-[12px] flex flex-row justify-between mx-auto w-[327px]">
              //   <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between">
              //     <span className="text-[13px] h-[16px]">{answer}</span>

              //     <img src={DismisIcon} alt="dismiss icon" />
              //   </div>
              // </div>
//             </form>
//           );
//         })}
//       {answers.length > 0 && (
//         <div className="mx-auto">

//           <Link to="/preview" className="mx-auto">
            // <button
            //   className={`h-[40px] bg-primary text-center rounded-lg font-[600] text-[14px] text-neutral w-[327px] ${
            //     answers.length >= 3 ? "" : "bg-gray-light cursor-not-allowed"
            //   }`}
            //   type="submit"
            //   disabled={answers.length < 3}
            //   onClick={handlePreviewAnswers}
            // >
            //   Preview Answers
            // </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnsweredList;


 // const handleDismiss = (index) => {
  //   const updatedAnswers = [...answers];
  //   updatedAnswers.splice(index, 1);
  //   setAnswers(updatedAnswers);
  // };
  //setAnswers(prevAnswers => [...prevAnswers, answerSelected]);
  //setIsAnswerSettingsVisible(false)