import Video from "../../assets/icons/video.svg"
import ArrowBack from "../../assets/icons/arrowback.svg"
import { Link } from "react-router-dom";


const Preview = () => {
  return (
    <div className="flex flex-col p-[40px] bg-primary">
      <div className="mx-auto">
        <h1 className="text-neutral font-[700] text-[13px] p-[10px]">
          Preview your answers
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg p-[20px]">
        <div className="flex flex-col">
          <h1 className="font-[500] text-[13px] text-text-blue">Questions</h1>
          <h1 className="font-[700] text-[18px]">
            What are your favourite television shows of all time?
          </h1>
          <div className="flex flex-row flex-end pt-[20px]">
            <img src={Video} alt="video" className="pr-[10px]" />

            <h1 className="font-[500] text-[13px] text-text-blue">
              Your preview video
            </h1>
          </div>
        </div>
        <div className="h-[144px] bg-gray-lighter p-[20px] rounded-lg"></div>
        <div className="flex justify-center p-[20px]">
          <button
            type="submit"
            className="h-[40px] m-[10px] bg-primary text-center rounded-lg font-[600] flex-grow flex-shrink text-[14px] text-neutral "
          >
            Submit Answers
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] bg-button-inactive max-w-[193px]">
          <img src={ArrowBack} alt="" className="h-full pr-[5px]" />
          <Link to="/" className="text-[12px] font-semibold text-primary">
            Go back to edit answers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Preview;


//api integration
// import AnswerHeader from "./AnswerHeader";
// import { useState, useEffect } from "react";
// import AnswerSettings from "./AnswerSettings";
// import DismisIcon from "../../assets/icons/Dismiss.svg";
// import axios from "axios";

// const AnsweredList = ({ answerSelected }) => {
//   const [answers, setAnswers] = useState([]);
//   const [isAnswerSettingsVisible, setIsAnswerSettingsVisible] = useState(true);

//   useEffect(() => {
//     if (answerSelected && !answers.some(answer => answer === answerSelected) && answers.length < 5) {
//       setAnswers(prevAnswers => [...prevAnswers, answerSelected]);
//       setIsAnswerSettingsVisible(false);
//     }
//   }, [answerSelected, answers, setAnswers, setIsAnswerSettingsVisible]);

//   const handleDismiss = (index) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers.splice(index, 1);
//     setAnswers(updatedAnswers);
//   };

//   const handlePreviewAnswers = () => {
//     // Handle the preview answers logic
//     if (answers.length === 5) {
//       const data = {
//         questionId: 1,
//         ip: "102.88.34.121",
//         answersJson: answers,
//         ranked: "false"
//       };

//       // Make the API POST request
//       axios.post("https://example.com/api/submit", data)
//         .then(response => {
//           // Handle the response
//           console.log("Submission successful");
//         })
//         .catch(error => {
//           // Handle the error
//           console.error("Submission error:", error);
//         });
//     } else {
//       console.log("Please select 5 answers.");
//     }
//   };

//   const isButtonActive = answers.length >= 3 && answers.length <= 5;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="bg-neutral p-[20px]">
//       <AnswerHeader />
//       {isAnswerSettingsVisible && <AnswerSettings />}
//       <form className="flex flex-col p-[10px]" onSubmit={handleSubmit}>
//         {answers.map((answer, index) => (
//           <div
//             key={index}
//             className="w-[327px] bg-primary-bg rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
//           >
//             <span className="text-[13px] h-[16px]">{answer}</span>
//             <img
//               src={DismisIcon}
//               alt="dismiss icon"
//               onClick={() => handleDismiss(index)}
//             />
//           </div>
//         ))}

//         <button
//           className={`h-[40px] bg-primary text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px] ${
//             isButtonActive ? "" : "bg-gray-light cursor-not-allowed"
//           }`}
//           type="submit"
//           disabled={!isButtonActive}
//           onClick={handlePreviewAnswers}
//         >
//           Preview Answers
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AnsweredList;
