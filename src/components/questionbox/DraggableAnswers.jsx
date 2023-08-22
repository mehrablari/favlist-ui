//react-beautiful-dnd
import DismissIcon from "../../assets/icons/Dismiss.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Drag from "../../assets/images/Drag.png";

const DraggableAnswers = ({answers, handleDismiss, maxAnswer}) => {
// 	const [answerSet, setAnswerSet] = useState(new Set());
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedAnswers = Array.from(updatedAnswers);
//     const [movedAnswer] = reorderedAnswers.splice(result.source.index, 1);
//     reorderedAnswers.splice(result.destination.index, 0, movedAnswer);

//     setUpdatedAnswers(reorderedAnswers);
//   };
//onDragEnd={handleDragEnd}
  return (
    <DragDropContext >
      <Droppable droppableId="updatedAnswers" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="font-sans bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden"
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
                    className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]"
                  >
                    <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
                      {index + 1}
                    </span>
                    <div className="sm:w-[300px] max-w-[327px] cursor-pointer bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between hover:bg-primary-bg">
                      <div className="flex">
                        <img src={Drag} alt="drag" className="pr-[10px]" />
                        <span className="text-[13px] h-[20px] text-ellipsis overflow-hidden w-[200px]">
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
