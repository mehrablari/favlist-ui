import AnswerHeader from "./AnswerHeader";
import { useState, useEffect } from "react";
import AnswerSettings from "./AnswerSettings";
import DismisIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";

const AnsweredList = ({ answerSelected }) => {
  const [answers, setAnswers] = useState([]);
  const [isAnswerSettingsVisible, setIsAnswerSettingsVisible] = useState(true);

  useEffect(() => {
    if (answerSelected && !answers.some(answer => answer === answerSelected) && answers.length < 5) {
      setAnswers(prevAnswers => [...prevAnswers, answerSelected]);
      setIsAnswerSettingsVisible(false);
    }
  }, [answerSelected, answers, setAnswers, setIsAnswerSettingsVisible]);

  const handleDismiss = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const handlePreviewAnswers = () => {
    // Handle the preview answers logic
  };

  const isButtonActive = answers.length >= 3 && answers.length <= 5;

  const handleSubmit = (event) => {
    event.preventDefault()
  }


  return (
    <div className="bg-neutral p-[20px]">
      <AnswerHeader />
      {isAnswerSettingsVisible && <AnswerSettings />}
      <form className="flex flex-col p-[10px]" onSubmit={handleSubmit}>
        {answers.map((answer, index) => (
          <div
            key={index}
            className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] m-[10px] h-[44px] mx-auto flex flex-row justify-between"
          >
            <span className="text-[13px] h-[16px]">{answer}</span>
            
            <img
              src={DismisIcon}
              alt="dismiss icon"
              onClick={() => handleDismiss(index)}
            />
          </div>
        ))}
        <Link to="/preview" className="mx-auto">
          <button
            className={`h-[40px] bg-primary text-center mx-auto rounded-lg font-[600] text-[14px] text-neutral w-[327px] ${
              isButtonActive ? "" : "bg-gray-light cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isButtonActive}
            onClick={handlePreviewAnswers}
          >
            Preview Answers
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AnsweredList;
