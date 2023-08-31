import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";

const AnsweredCard = ({ cardData }) => {
  const { dateToPost, text, sponsor } = cardData;

  const formatDate = (inputDate) => {
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <div className="pt-[120px] font-sans ">
      <div className="sm:w-[280px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center border-2 border-primary text-center gap-[16px] max-w-[320px] h-[240px] drop-shadow-lg">
        <div className="flex flex-col bg-neutral  gap-[20px]">
          <p className="text-gray-dark text-[18px] max-w-[310px] items-center font-baloo2 sm:text-[14px] md:text-[16px] leading-2 font-[700]">
            {text}
          </p>
          <h1 className="text-[12px] leading-3 font-[400]">
            <span>Question on </span>
            {formatDate(dateToPost)}
          </h1>
          {/* <div className="text-gray-dark w-[287px] mx-auto leading-6 font-[700] md:text-[14px] md:w-[230px] sm:w-[220px] text-[18px] h-[72px]">
            {text}
          </div> */}

          <div className="flex flex-col justify-center m-[3px] w-[42px] h-[56px] mx-auto">
            <h3 className="text-gray-lighter text-[12px] font-[400]">
              affiliate
            </h3>
            <div className="flex justify-center ">
              <a href={`${sponsor.url}`}>
                <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
              </a>
            </div>
            <div className="flex justify-center">
              <h3 className="text-gray-dark text-[13px] font-[600] leading-3 text-center mx-auto p-[10px]">
                {sponsor.name}
              </h3>
            </div>
          </div>
          <div className="absolute bottom-md right-md">
            <a
              href={`${sponsor.logoS3Url
              }`}
              className="hover:bg-primary-bg bg-grey-text w-[56px]"
              target="_blank"
              rel="noopener noreferrer"
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
    </div>
  );
};

export default AnsweredCard;
