import AnswerHeader from "./AnswerHeader";
import AnswerSettings from "./AnswerSettings";
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LayoutContext } from "../Layout";
import Drag from "../../assets/images/Drag.png";

//react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AnsweredList = () => {
  const {
    answers,
    handleDismiss,
    questionId,
    questionName,
    minAnswer,
    maxAnswer,
    apiData,
  } = useContext(LayoutContext);
  const [updatedAnswers, setUpdatedAnswers] = useState(answers);

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
    setUpdatedAnswers(answers);
  };

  return (
    <form
      className="bg-neutral pt-[12px] pb-[30px] gap-[12px] font-sans"
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
            className="font-sans bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
            key={index}
          >
            <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
              <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                <span className="text-[13px] h-[22px] text-ellipsis truncate w-[200px]" >{answer}</span>
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
        <DragDropContext onDragEnd={(result) => {
          if (!result.destination) return;

          const reorderedAnswers = Array.from(updatedAnswers);
          const [movedAnswer] = reorderedAnswers.splice(
            result.source.index,
            1
          );
          reorderedAnswers.splice(result.destination.index, 0, movedAnswer);

          setUpdatedAnswers(reorderedAnswers);
        }}>
          <Droppable droppableId="updatedAnswers" direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="font-sans bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
              >
                {updatedAnswers.map((answer, index) => (
                  <Draggable
                    key={index}
                    draggableId={`updatedDraggable-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <li ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps} className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
                      <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
                        {index + 1}
                      </span>
                      <div className="sm:w-[300px] max-w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
                        <div className="flex">
        
                          <img src={Drag} alt="drag" className="pr-[10px]" />
                          <span className="text-[13px] h-[20px] text-ellipsis overflow-hidden w-[200px]">{answer}</span>
                        </div>
                        <img
                          src={DismissIcon}
                          alt="dismiss icon"
                          onClick={() => handleDismiss(index)}
                        />
                      </div>
                    </li>
                      
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {answers.length > 0 && (
        <Link
          to="/preview"
          state={{ answers, questionId, questionName }}
          className="flex justify-center align-middle pt-[10px] font-sans"
        >
          <button
            className={`h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto font-sans ${
              answers.length >= minAnswer && answers.length <= maxAnswer
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