import Video from "../../assets/images/video.png";
import People from "../../assets/images/People.png";
import { Link } from "react-router-dom";

const AnswerProvided = ({ answerData }) => {
  const { answerGraphicLink, answers, questionId } = answerData;

  return (
    <div className="p-[10px]">
      <div className="flex flex-row justify-between w-[360px] mx-auto pb-[10px]">
        <h1 className="flex justify-start w-[327px] font-[600] text-[15px] leading-4">
          All answers
        </h1>
        <h1 className="flex justify-start w-[327px] font-[600] text-[15px] leading-4 pl-[60px]">
          Current global rank
        </h1>
      </div>

      {answers.map((question, index) => (
        <div
          className="bg-neutral w-[380px] md:w-[360px]  mx-auto sm:w-[340px] sm:overflow-hidden"
          key={index}
        >
          <div className="bg-neutral p-[4px] flex flex-row justify-between mx-auto w-[360px] sm:w-[340px]">
            <span className="pr-[20px] pt-[8px] w-[20px] h-[20px] text-[15px] text-gray-four">
              {index + 1}
            </span>
            <div className="sm:w-[320px] w-[340px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[48px] mx-auto flex flex-row justify-between hover:bg-primary-bg ">
              <span className="text-[13px] h-[22px] cursor-pointer text-ellipsis w-[200px] truncate">
                {question.text}
              </span>
              <div className="flex flex-row">
                <img
                  src={People}
                  alt="ranked"
                  className="w-[16px] h-[16px] mt-[5px]"
                />
                <span className="text-gray-dark font-[400] text-[12px] leading-4 pl-[5px] mt-[5px]">
                  {question.rank}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link
        to="/answergraphics"
        state={answerGraphicLink}
        className="flex justify-center align-middle py-[5px] h-[42px] px-[14px] text-center rounded-lg font-[600] text-[14px] sm:w-[320px] pl-[20px] w-[350px]  mx-auto gap-[8px]
          bg-primary text-neutral mt-[10px] hover:bg-button-hover"
      >
        <div className="p-[7px]">
          <img src={Video} alt="video" className="w-[20px] h-[18px]" />
        </div>
        <span className="font-[600] text-[14px] leading-[30px] ">
          View Answer Graphics
        </span>
      </Link>
    </div>
  );
};

export default AnswerProvided;
