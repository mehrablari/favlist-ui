import { Link, useLocation } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Video from "../../assets/icons/video.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";

const AnswerGraphics = () => {
  const location = useLocation();
  const imgUrl = location.state;

  return (
    <div className="bg-primary pt-[100px] pb-[20px] h-screen md:h-[100%] mdx:h-[100%] mx-auto">
      <div className="bg-neutral min-h-[300px] w-[327px] rounded-lg mx-auto p-[20px]">
        <div className="flex flex-row justify-center pt-[20px] mx-auto">
          <img src={Video} alt="video" className="pr-[10px]" />
          <h1 className="font-[600] text-md text-text-blue">
            Your Answer graphics
          </h1>
        </div>
        <div className="min-h-[100px] max-w-[300px] p-[20px] rounded-lg m-[10px]">
          <img src={imgUrl} alt="Your Answer Graphic" className="bg-primary" />
        </div>
        <div className="flex flex-col pt-[10px]">
          <div className="flex flex-col justify-center align-middle p-[10px]">
            <RWebShare
              data={{
                text: "My answers",
                url: imgUrl,
                title: "Favlist",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="h-[40px] w-[250px] hover:bg-opacity-75 text-center mx-auto rounded-lg  font-[600] flex-grow flex-shrink text-[14px] text-neutral bg-primary ">
                Share to social media
              </button>
            </RWebShare>
          </div>
          <div className="flex flex-row items-center justify-around mx-auto rounded-lg h-[35px] p-[10px] bg-button-inactive w-[180px]">
          <img src={ArrowBack} alt="" className="h-full pr-[2px]" />
          <Link to="/" className="text-[14px] font-semibold text-primary-light">
            Go back to question
          </Link>
        </div>

          {/* <Link
            to="/"
            className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] p-[10px] max-w-[193px]"
          >
            <img
              src={ArrowBack}
              alt=""
              className="h-[18px] w-[18px] pr-[5px]"
            />
            <div className="text-[12px] font-semibold text-primary h-[50px] pt-[10px]">
              Back to question
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AnswerGraphics;
