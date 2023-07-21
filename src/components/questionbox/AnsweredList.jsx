import AnswerHeader from "./AnswerHeader";
import AnswerSettings from "./AnswerSettings";
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const AnsweredList = ({ answers, handleDismiss, questionId, questionName}) => {

  const [showIndex, setShowIndex] = useState(false);
  const handlePreviewAnswers = () => {
    
    localStorage.setItem("answers", JSON.stringify(answers));
    // Handle the preview answers logic
  };

  // console.log("answers",answers)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

 
  const handleChange = (isChecked) => {
    setShowIndex(isChecked);
  };

  return (
    <form
      className="bg-neutral pt-[12px] pb-[30px] gap-[12px]"
      onClick={handleSubmit}
    >
      <AnswerHeader handleChange={handleChange} />

      {answers.length === 0 && <AnswerSettings />}

      {answers.length > 0 &&
        answers.map((answer, index) => (
          <div className="bg-neutral w-[327px] mx-auto" key={index}>
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
              <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                <span className="text-[13px] h-[16px]">{answer}</span>
                <img
                  src={DismissIcon}
                  alt="dismiss icon"
                  onClick={() => handleDismiss(index)}
                />
              </div>
            </div>
            {/* {setShowIndex && (
              <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
                <span className="">{index + 1}</span>
                <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                  <span className="text-[13px] h-[16px]">{answer}</span>
                  <img
                    src={DismissIcon}
                    alt="dismiss icon"
                    onClick={() => handleDismiss(index)}
                  />
                </div>
              </div>
            )} */}
          </div>
        ))}

      {answers.length > 0 && (
        <Link
          to="/preview"
          state={{ answers, questionId, questionName }}
          className="flex justify-center align-middle pt-[10px]"
        >
          <button
            className={`h-[40px] text-center rounded-lg font-[600] text-[14px] w-[310px] mx-auto ${
              answers.length >= 3
                ? "bg-primary text-neutral"
                : "bg-gray-purple cursor-not-allowed text-neutral"
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
