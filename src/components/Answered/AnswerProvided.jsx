
import { Link } from "react-router-dom";
import Video from "../../assets/images/video.png";
import People from "../../assets/images/People.png"

const AnswerProvided = ({ answerData }) => {
  return (
    <div className="p-[40px]">
      <div className="flex flex-row justify-around w-[327px] mx-auto pb-[20px]">
      <h1 className="flex justify-start w-[327px] font-[600] text-[15px] leading-4">All answers</h1>
      <h1 className="flex justify-start w-[327px] font-[600] text-[15px] leading-4 pl-[20px]">Current global rank</h1>

      </div>
      {answerData.map((question, index) => (
        <div
          className="bg-neutral w-[327px] mx-auto sm:w-[300px] sm:overflow-hidden pb-[10px]"
          key={index}
        >
          <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px] sm:w-[300px]">
            <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
              {index + 1}
            </span>
            <div className="sm:w-[300px] w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[48px] mx-auto flex flex-row justify-between">
              <span className="text-[13px] h-[16px] flex flex-wrap ">{question.text}</span>
              <div className="flex flex-row">
                <img src={People} alt="ranked" className="w-[16px] h-[16px] mt-[5px]" />
                <span className="text-gray-dark font-[400] text-[12px] leading-4 pl-[5px] mt-[5px]">{question.rank}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link
        to="/answergraphics"
        className="flex justify-center align-middle py-[16px] h-[52px] px-[24px] text-center rounded-lg font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto gap-[8px]
          bg-primary text-neutral"
      >
        {" "}
        <div className="p-[4px]">
          <img src={Video} alt="video" className="w-[18px] h-[13px]" />
        </div>
        <span className="font-[600] text-[14px] leading-[20px]">
          View Answer Graphics
        </span>
      </Link>
    </div>
  );
};

export default AnswerProvided;
