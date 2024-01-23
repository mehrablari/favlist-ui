import { useState } from "react";
import People from "../../assets/images/People.png";

const ClosedAnswers = ({ answerData }) => {
  const [answers, setAnswers] = useState(answerData);
 

  return (
    <div className="pt-[25px] font-sans mx-auto overflow-auto">
       <h1 className="font-sans text-[16px] font-[700] leading-6 mx-auto w-[327px] flex flex-start pb-[10px] z-10">All Answers</h1>
      {answers.map((answer, index) => (
        <div
          key={index}
          className="bg-neutral m-[1rem] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px] max-h-[44px]"
        >
          <p className="pr-[30px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
            {index + 1}
          </p>
          <div className={`py-[10px] px-[14px] hover:bg-primary-bg sm:w-[300px] w-[327px]  rounded-lg font-[400] text-gray-light mx-auto flex flex-row justify-between ${
                answer.userAnswered ? "bg-primary-bg text-white" : "bg-button-inactive"
              }`}>
            <span
              className="text-[13px] flex flex-wrap"
              style={{ wordWrap: "break-word", overflow: "hidden" }}
            >
              {answer.text}
            </span>
            <div className="flex flex-row">
              <img
                src={People}
                alt="dismiss icon"
                className="w-[20px] h-[20px] pt-[5px]"
              />
              <span className="text-[13px] pb-[15px] pl-[5px]">
                {answer.voteCount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClosedAnswers;
