/* eslint-disable react/prop-types */
//react-beautiful-dnd
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Drag from "../../assets/images/Drag.png";
import {  useContext } from "react";
import DataContext from "../../context/DataContexts";

const DraggableAnswers = ({ handleDismiss, handleDragEnd}) => {

  const {  answers } = useContext(DataContext);

  // console.log(answers)
  
  return (
    <DragDropContext onDragEnd={handleDragEnd} >
      <Droppable droppableId="updatedAnswers" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="font-sans bg-neutral w-[360px] mx-auto sm:w-[340px] sm:overflow-hidden"
          >
            {answers.map((answer, index) => (
              <Draggable
                key={index}
                draggableId={`updatedDraggable-${index}`}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-neutral p-[4px] flex flex-row justify-between mx-auto w-[360px] sm:w-[340px]"
                  >
                    <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
                    {index + 1}
                    </span>
                    <div className="sm:w-[340px] max-w-[360px] cursor-pointer bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between hover:bg-primary-bg">
                      <div className="flex">
                        <img src={Drag} alt="drag" className="pr-[10px]" />
                        <span className="text-[14px] h-[20px] text-ellipsis overflow-hidden w-[270px] sm:w-[250px]">
                          {answer}
                        </span>
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
  );
};

export default DraggableAnswers;