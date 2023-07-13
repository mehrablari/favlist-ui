import AnswerHeader from "./AnswerHeader";

import AnswerSettings from "./AnswerSettings";
import DismisIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";

const AnsweredList = ({ answers, handleDismiss}) => {
  const handlePreviewAnswers = () => {
    // Handle the preview answers logic
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="bg-neutral pt-[12px] pb-[10px] gap-[12px]" onClick={handleSubmit}>
      <AnswerHeader />

      {answers.length === 0 && <AnswerSettings />}

      {answers.length > 0 &&
        answers.map((answer, index) => (
          <div className="bg-neutral w-[327px] mx-auto" key={index}>
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
              <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                <span className="text-[13px] h-[16px]">{answer}</span>

                <img
                  src={DismisIcon}
                  alt="dismiss icon"
                  onClick={() => handleDismiss(index)}
                />
              </div>
            </div>
          </div>
        ))}

    

      {answers.length > 0 && (
        <Link to="/preview" state={answers} className="flex justify-center align-middle pt-[10px]">
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

