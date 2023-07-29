import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import ClosedQuestionFlag from "./ClosedQuestionFlag";

const ClosedQuestionCard = () => {
  //   const { dateToPost, text, sponsor } = cardData;

  return (
    <div className="pt-[120px]">
      <div className="sm:w-[280px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] max-w-[320px] h-[240px] drop-shadow-lg">
        <div className="flex flex-col bg-neutral  rounded-lg gap-[20px]">
          <h1 className="text-[12px] leading-3 font-[400]">
            <span>Question on </span>
          </h1>
          <div className="text-gray-dark w-[287px] mx-auto leading-6 font-[700] md:text-[14px] md:w-[230px] sm:w-[220px] text-[18px] h-[72px]">
            What are your favorite TV shows of all-time copy?
          </div>

          <div className="flex flex-col justify-center m-[3px] w-[42px] h-[56px] mx-auto">
            <h3 className="text-gray-lighter text-[12px] font-[400]">
              affiliate
            </h3>
            <div className="flex justify-center p-[5px] ">
              <a href="#">
                <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
              </a>
            </div>
            <h3 className="text-gray-dark text-[12px] font-[600] pb-[20px]">
              Netlify
            </h3>
          </div>
          <div className="absolute bottom-md right-md">
            <a
              href="https://youtube.com"
              className="hover:bg-primary-bg bg-grey-text w-[56px]"
            >
              <img
                src={youtubeIcon}
                alt="youtube icon"
                className="w-[24px] h-[17px]"
              />
            </a>
          </div>
        </div>
      </div>
      <ClosedQuestionFlag />
    </div>
  );
};

export default ClosedQuestionCard;
