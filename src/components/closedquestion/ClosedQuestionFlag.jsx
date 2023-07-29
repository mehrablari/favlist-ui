// import info from "../assets/images/Info.png";
import { Link } from "react-router-dom";
import Video from "../../assets/images/video.png";

const ClosedQuestionFlag = () => {
  return (
    <div className="pt-[10px]">
      <div className="mx-auto p-[16px] gap-4 pt-[10px] w-327px bg-[#BDD0F1] bg-opacity-20 flex flex-col w-[327px] rounded-[24px] ">
        <div className="flex flex-row">
          <img
            src={Video}
            alt="warning"
            className="w-[20px] pr-[5px] h-[16px]"
          />
          <p className="text-text-blue pr-[10px] w-[275px] font-[500] text-[13px] leading-4">
            You have answered this question
          </p>
        </div>
        <div className="mx-auto w-[275px]">
          <p className="font-[400] text-[13px] leading-[18px] text-gray-inactive">
            Your answers to this question are listed below. When the question
            expires, you’ll be able to see global responses to the question.
          </p>
        </div>
		<Link
        to="/answergraphics"
        className="flex justify-start py-[10px] font-[600] text-[14px] sm:w-[280px] w-[310px] mx-auto gap-[8px] text-neutral"
      >
        <div className="p-[4px]">
          <img src={Video} alt="video" className="w-[18px] text-primary h-[13px]" />
        </div>
        <span className="font-[600] text-primary text-[14px] leading-[20px]">
          See answer graphics
        </span>
      </Link>
      </div>
      
    </div>
  );
};

export default ClosedQuestionFlag;
