/* eslint-disable react/prop-types */
import AnswerHeader from "./AnswerHeader";
import AnswerSettings from "./AnswerSettings";
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import PropTypes from "prop-types";
import DataContext from "../../context/DataContexts";

import DraggableAnswers from "./DraggableAnswers";

const AnsweredList = ({
  maxAnswer,
  graphicTitle,
  minAnswer,
  questionName,
  questionId,
  handleDismiss,
  handleDragEnd,
  image
  
}) =>

  {
    const {  answers,showIndex, setShowIndex } = useContext(DataContext);


     
    const handlePreviewAnswers = () => {

      
      window.dataLayer.push({
        event: 'events',
        eventCategory: 'ux',
        eventAction: 'click',
        eventLabel: 'preview-button'
      })
    

      if(questionId) {
      localStorage.setItem("selectedQuestionId", questionId);
      }
      
      localStorage.setItem("answers", JSON.stringify(answers));
     

    };

    const handleChange = (isChecked) => {
      setShowIndex(!isChecked);
    };

   

    return (
      <form
        className="bg-neutral pb-[10px] font-sans min-h-[150px] z-20"
        
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
              <div className="bg-neutral p-[4px] flex flex-row justify-between mx-auto w-[360px] sm:w-[340px]">
                <div className="sm:w-[340px] w-[360px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row cursor-pointer justify-between hover:bg-primary-bg">
                  <span className="text-[16px] h-[22px] w-full text-ellipsis truncate pt-[4px] leading-[15px]">
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
          <DraggableAnswers
            answers={answers}
            handleDismiss={handleDismiss}
            maxAnswer={maxAnswer}
            handleDragEnd={handleDragEnd}
            
          />
        )}

        {answers.length > 0 && (
          <Link
            to="/new-preview"
            state={{ answers, questionId, questionName, graphicTitle, image }}
            className="flex justify-center align-middle pt-[10px] font-sans"
          >
            <button
              className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[340px] w-[360px] mx-auto font-sans ${
                answers.length >= minAnswer && answers.length <= maxAnswer
                  ? "bg-primary text-neutral hover:bg-opacity-75"
                  : "bg-gray-purple cursor-not-allowed text-neutral"
              }`}
              type="submit"
              disabled={answers.length < minAnswer}
              onClick={handlePreviewAnswers}
            >
              CONTINUE
            </button>
          </Link>
        )}
      </form>
    );
  };

// Define prop types for validation
// AnsweredList.propTypes = {
//   maxAnswer: PropTypes.number,
//   graphicTitle: PropTypes.string.isRequired,
//   minAnswer: PropTypes.number,
//   questionName: PropTypes.string,
//   questionId: PropTypes.string,
//   answers: PropTypes.arrayOf(PropTypes.string),
//   handleDismiss: PropTypes.func.isRequired,
//   handleDragEnd: PropTypes.func.isRequired,
// };

export default AnsweredList;
