import AnswerHeader from "./AnswerHeader";
import AnswerSettings from "./AnswerSettings";
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LayoutContext } from "../Layout";
import DraggableAnswers from "./DraggableAnswers";

const AnsweredList = () => {
  const {
    answers,
    handleDismiss,
    questionId,
    questionName,
    minAnswer,
    handleDragEnd,
    graphicTitle,
    maxAnswer,
    apiData,
  } = useContext(LayoutContext);



  const [showIndex, setShowIndex] = useState(false);
  const handlePreviewAnswers = () => {
    var index = apiData.findIndex((x) => x.id === questionId);

    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("selectedQuestionIndex", index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (isChecked) => {
    setShowIndex(isChecked);
  };


  return (
    <form
      className="bg-neutral gap-[12px] pb-[10px] font-sans min-h-[150px]"
      onClick={handleSubmit}
    >
      <AnswerHeader
        maxAnswer={maxAnswer}
        minAnswer={minAnswer}
        handleToggle={handleChange}
      />

      {answers.length === 0 && <AnswerSettings />}

      {answers.length > 0 &&
        !showIndex &&
        answers.map((answer, index) => (
          <div
            className="font-sans bg-neutral w-[360px] mx-auto sm:w-[340px] sm:overflow-hidden"
            key={index}
          >
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[360px] sm:w-[340px]">
              <div className="sm:w-[340px] w-[360px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row cursor-pointer justify-between hover:bg-primary-bg">
                <span className="text-[14px] h-[22px] text-ellipsis truncate w-[200px]">
                  {answer}
                </span>
                <img
                  src={DismissIcon}
                  alt="dismiss icon"
                  onClick={() => handleDismiss(index)}
                />
              </div>
            </div>
          </div>
        ))}

      {showIndex && (
        <DraggableAnswers answers={answers} handleDismiss={handleDismiss} maxAnswer={maxAnswer} handleDragEnd={handleDragEnd}/>
      )}

      {answers.length > 0 && (
        <Link
          to="/preview"
          state={{ answers, questionId, questionName, graphicTitle }}
          className="flex justify-center align-middle pt-[10px] font-sans"
        >
          <button
            className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[300px] w-[340px] mx-auto font-sans ${
              answers.length >= minAnswer && answers.length <= maxAnswer
                ? "bg-primary text-neutral hover:bg-opacity-75"
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
