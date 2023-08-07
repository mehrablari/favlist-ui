// import AnswerHeader from "./AnswerHeader";
// import AnswerSettings from "./AnswerSettings";
// import DismissIcon from "../../assets/icons/Dismiss.svg";
// import { Link } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import { LayoutContext } from "../Layout";


// const AnsweredList = ({questionData}) => {

//   const {answers,
//     handleDismiss,
//     questionId,
//     questionName,
//   } = useContext(LayoutContext);
//   const [updatedAnswers, setUpdatedAnswers] = useState(answers);

//   const [showIndex, setShowIndex] = useState(false);
//   const handlePreviewAnswers = () => {
//     var index = questionData.id.findIndex((x) => x.id === questionId);

//     localStorage.setItem("answers", JSON.stringify(answers));
//     localStorage.setItem("selectedQuestionIndex", index);
//     console.log("this is",index)

//   };
  
  // const [
  //   id,
  //   text,
  //   dateToPost,
  //   answerGraphicLink,
  //   minAnswerCount,
  //   maxAnswerCount,
  //  ] = questionData;




 
  // const minAnswer = minAnswerCount.minAnswerCount;

  // const maxAnswer = maxAnswerCount.maxAnswerCount;


  // console.log("questionName",questionName)
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const handleChange = (isChecked) => {
//     setShowIndex(isChecked);
//     setUpdatedAnswers(answers);
//   };

//   return (
//     <form
//       className="bg-neutral pt-[12px] pb-[30px] gap-[12px] font-baloo2"
//       onClick={handleSubmit}
//     >
//       <AnswerHeader handleToggle={handleChange} />

//       {answers.length === 0 && <AnswerSettings />}

      
//       {answers.length > 0 &&
//         !showIndex &&
//         answers.map((answer, index) => (
//           <div
//             className="font-baloo2 bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
//             key={index}
//           >
//             <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
//               <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
//                 <span className="text-[13px] h-[16px]">{answer}</span>
//                 <img
//                   src={DismissIcon}
//                   alt="dismiss icon"
//                   onClick={() => handleDismiss(index)}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//       {showIndex &&
//         updatedAnswers.map((answer, index) => (
//           <div
//           className="bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
//           key={index}
//         >
          
//           <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
//           <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">{index +1}</span>
//             <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
//               <span className="text-[13px] h-[16px] ">{answer}</span>
//               <img
//                 src={DismissIcon}
//                 alt="dismiss icon"
//                 onClick={() => handleDismiss(index)}
//               />
//             </div>
//           </div>
//         </div>

//         ))}

//       {answers.length > 0 && (
//         <Link
//         //  to={answers.length >= minAnswer ? "/preview" : "#"}
//         // state={answers.length >= minAnswer ? { answers, questionId, questionName } : null}
//           to="/preview"
//           state={{ answers, questionId, questionName }}
//           className="flex justify-center align-middle pt-[10px]"
//         >
//           <button
//             className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto ${
//               answers.length >= minAnswer
//                 ? "bg-primary text-neutral"
//                 : "bg-gray-purple cursor-not-allowed text-neutral"
//             }`}
//             type="submit"
//             disabled={answers.length < maxAnswer}
//             onClick={handlePreviewAnswers}
//             // onClick={answers.length >= minAnswer ? handlePreviewAnswers : null}
//           >
//             Preview Answers
//           </button>
//         </Link>
//       )}
//     </form>
//   );
// };

// export default AnsweredList;


import AnswerHeader from "./AnswerHeader";
import AnswerSettings from "./AnswerSettings";
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LayoutContext } from "../Layout";


const AnsweredList = () => {

  const {answers,
    handleDismiss,
    questionId,
    questionName,
    minAnswer,
    maxAnswer,
    apiData} = useContext(LayoutContext);
  const [updatedAnswers, setUpdatedAnswers] = useState(answers);

  const [showIndex, setShowIndex] = useState(false);
  const handlePreviewAnswers = () => {
    var index = apiData.findIndex((x) => x.id === questionId);

    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("selectedQuestionIndex", index);
  };

  console.log("answers",apiData)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (isChecked) => {
    setShowIndex(isChecked);
    setUpdatedAnswers(answers);
  };


  

  return (
    <form
      className="bg-neutral pt-[12px] pb-[30px] gap-[12px] font-baloo2"
      onClick={handleSubmit}
    >
      <AnswerHeader handleToggle={handleChange} />

      {answers.length === 0 && <AnswerSettings />}

      
      {answers.length > 0 &&
        !showIndex &&
        answers.map((answer, index) => (
          <div
            className="font-baloo2 bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
            key={index}
          >
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
              <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                <span className="text-[13px] h-[16px]">{answer}</span>
                <img
                  src={DismissIcon}
                  alt="dismiss icon"
                  onClick={() => handleDismiss(index)}
                />
              </div>
            </div>
          </div>
        ))}

      {showIndex &&
        updatedAnswers.map((answer, index) => (
          <div
          className="bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
          key={index}
        >
          
          <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
          <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">{index +1}</span>
            <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
              <span className="text-[13px] h-[16px] ">{answer}</span>
              <img
                src={DismissIcon}
                alt="dismiss icon"
                onClick={() => handleDismiss(index)}
              />
            </div>
          </div>
        </div>

        ))}

      {answers.length > 0 && (
        <Link
          to="/preview"
          state={{ answers, questionId, questionName }}
          className="flex justify-center align-middle pt-[10px]"
        >
          <button
            className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto ${
              answers.length >= minAnswer
                ? "bg-primary text-neutral"
                : "bg-gray-purple cursor-not-allowed text-neutral"
            }`}
            type="submit"
            disabled={answers.length < minAnswer}
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

// // import { useState } from "react";
// // import { useDrag, useDrop } from "react-dnd";
// // import DismissIcon from "../../assets/icons/Dismiss.svg";
// // import { Link } from "react-router-dom";
// // import AnswerHeader from "./AnswerHeader";
// // import AnswerSettings from "./AnswerSettings";

// // const AnsweredListItem = ({ answer, index, moveAnswer, handleDismiss }) => {
// //   const [, drag] = useDrag({
// //     type: "ANSWERED_ITEM",
// //     item: { index },
// //   });

// //   const [, drop] = useDrop({
// //     accept: "ANSWERED_ITEM",
// //     hover: (item) => {
// //       if (item.index !== index) {
// //         moveAnswer(item.index, index);
// //         item.index = index;
// //       }
// //     },
// //   });

// //   return (
// //     <div ref={(node) => drag(drop(node))}>
// //       <div
// //         className="bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between"
// //       >
// //         <span className="text-[13px] h-[16px]">{answer}</span>
// //         <img src={DismissIcon} alt="dismiss icon" onClick={() => handleDismiss(index)} />
// //       </div>
// //     </div>
// //   );
// // };

// // const AnsweredList = ({ answers, handleDismiss, questionId, questionName, questionData }) => {
// //   const [showIndex, setShowIndex] = useState(false);
// //   const [updatedAnswers, setUpdatedAnswers] = useState(answers);

// //   const handlePreviewAnswers = () => {
// //     var index = questionData.findIndex((x) => x.id === questionId);

// //     localStorage.setItem("answers", JSON.stringify(answers));
// //     localStorage.setItem("questionIndex", JSON.stringify(index));
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //   };

// //   const moveAnswer = (dragIndex, hoverIndex) => {
// //     const newAnswers = [...updatedAnswers];
// //     const draggedAnswer = newAnswers[dragIndex];
// //     newAnswers.splice(dragIndex, 1);
// //     newAnswers.splice(hoverIndex, 0, draggedAnswer);
// //     setUpdatedAnswers(newAnswers);
// //   };

// //   return (
// //     <form className="bg-neutral pt-[12px] pb-[30px] gap-[12px]" onClick={handleSubmit}>
// //       <AnswerHeader handleChange={() => setShowIndex(!showIndex)} />

// //       {answers.length === 0 && <AnswerSettings />}

// //       {answers.length > 0 &&
// //         answers.map((answer, index) => (
// //           <AnsweredListItem
// //             key={index}
// //             answer={answer}
// //             index={index}
// //             moveAnswer={moveAnswer}
// //             handleDismiss={handleDismiss}
// //           />
// //         ))}

// //       {answers.length > 0 && <div>{/* DropTargetArea, just a placeholder in this case */}</div>}

// //       {answers.length > 0 && (
// //         <Link
// //           to="/preview"
// //           state={{ answers, questionId, questionName }}
// //           className="flex justify-center align-middle pt-[10px]"
// //         >
// //           <button
// //             className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto ${
// //               answers.length >= 3 ? "bg-primary text-neutral" : "bg-gray-purple cursor-not-allowed text-neutral"
// //             }`}
// //             type="submit"
// //             disabled={answers.length < 3}
// //             onClick={handlePreviewAnswers}
// //           >
// //             Preview Answers
// //           </button>
// //         </Link>
// //       )}
// //     </form>
// //   );
// // };

// // export default AnsweredList;


