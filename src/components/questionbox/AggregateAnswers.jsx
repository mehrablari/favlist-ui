import { Link } from "react-router-dom";
import AnsweredResponse from "../../utils/AnsweredResponse";
import People from "../../assets/images/People.png";


const AggregateAnswers = () => {


  return (
    <div className="p-[20px] bg-neutral pt-[120px]">
      <AnsweredResponse />
      <div className="flex flex-row justify-between w-[327px] mx-auto pt-[50px]">
        <p className="font-[600] text-[15px] leading-4 text-gray-four">
          Your Answers
        </p>
        <p className="font-[600] text-[15px] leading-4 text-gray-four">
          Current global rank
        </p>
      </div>
        <div className="bg-neutral w-[327px] mx-auto sm:w-[327px]">
          <div className="bg-neutral pt-[10px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
          <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">1</span>
            <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
              <span className="text-[13px] h-[16px]">answers</span>
              <img src={People} alt="dismiss icon" />
            </div>
          </div>
        </div>
      {/* {submittedData.map((aggreggate, index) => (
        <h1 key={index}>This is useContext{aggreggate}</h1>
      ))}; */}

      <Link
        to="/preview"
        //   state={{ answers, questionId, questionName }}
        className="flex justify-center align-middle pt-[10px]"
      >
        <button
          className="h-[40px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto bg-primary text-neutral"
          type="submit"
        >
          view answer graphic
        </button>
      </Link>
    </div>
  );
};

export default AggregateAnswers;
