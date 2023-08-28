import { Link, useLocation } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Video from "../../assets/icons/video.svg";
// import Facebook from "../../assets/icons/facebook.svg";
// import Twitter from "../../assets/icons/twitter.svg";
// import Tiktok from "../../assets/icons/tiktok.svg";
// import Instagram from "../../assets/icons/instagram.svg";
// import Share from "../../assets/icons/share.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";

const AnswerGraphics = () => {
  const location = useLocation();
  const imgUrl = location.state;

  return (
    <div className="bg-primary pt-[100px] pb-[20px] h-screen mx-auto">
      <div className="bg-neutral h-[420px] w-[327px] rounded-lg mx-auto p-[20px]">
        <div className="flex flex-row justify-center pt-[20px] mx-auto">
          <img src={Video} alt="video" className="pr-[10px]" />
          <h1 className="font-[500] text-[13px] text-text-blue">
            Your Answer graphics
          </h1>
        </div>
        <div className="h-[200px] max-w-[300px] p-[20px] rounded-lg m-[10px]">
          <img src={imgUrl} alt="Your Answer Graphic" className="bg-primary" />
        </div>
        <hr className="pt-[10px] border-t-1 border-[#B5B8BB] mx-auto" />
        <div className="flex flex-col">
          <div className="flex flex-col justify-center align-middle p-[10px]">
            <h1 className="font-[500] text-[13px] text-text-blue text-center">
              Share to social media
            </h1>
            {/* <RWebShare
              data={{
                text:"https://www.favlist.com",
                url: imgUrl,
                title: "Favlist",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="flex flex-row mx-auto justify-between gap-[5px] ">
                <img
                  src={Twitter}
                  alt="twitter"
                  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
                />
                <img
                  src={Facebook}
                  alt="facebook"
                  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
                />
                <img
                  src={Instagram}
                  alt="instagram"
                  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
                />
                <img
                  src={Tiktok}
                  alt="tiktok"
                  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
                />
                <img
                  src={Share}
                  alt="share"
                  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
                />
              </button>
            </RWebShare> */}
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

          <Link
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnswerGraphics;
