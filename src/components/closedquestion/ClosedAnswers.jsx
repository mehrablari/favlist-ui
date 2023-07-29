import { useState } from "react";
import People from "../../assets/images/People.png";

const ClosedAnswers = ({ answerData }) => {
  const [answers, setAnswers] = useState(answerData);

  return (
    <div className="p-[20px]">
      {answers.map((answer, index) => (
        <div
          key={index}
          className="bg-neutral m-[1rem] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px] max-h-[44px]"
        >
          <p className="pr-[30px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
            {index + 1}
          </p>
          <div className="py-[10px] px-[14px] sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light mx-auto flex flex-row justify-between">
            <span className="text-[13px] ">{answer.text}</span>
            <div className="flex flex-row">
              <img src={People} alt="dismiss icon" />
              <span className="">{answer.voteCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClosedAnswers;
