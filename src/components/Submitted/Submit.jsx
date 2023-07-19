// import SubmitHolder from "../../assets/icons/submitted.svg";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Tiktok from "../../assets/icons/tiktok.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Share from "../../assets/icons/share.svg";
import highFive from "../../assets/gif/highfivegif.gif"
import { Link } from "react-router-dom";

// import { FacebookShareButton, TwitterShareButton } from "react-share";
import { RWebShare } from "react-web-share";



const Submit = () => {
  return (
    <div className="bg-primary pt-[80px] pb-[20px]">
      <div className="bg-neutral h-[600px] w-[327px] rounded-lg mx-auto p-[20px]">
        <div className="flex flex-col justify-center align-middle">
          <img
            src={highFive}
            alt="gif"
            className="w-[150px] h-[150px] mx-auto"
          />
          <h2 className="w-[287px] font-[500] text-[14px] leading-5">
            Yaayy! Your answers have been submitted!
          </h2>
        </div>
        <hr className="m-[10px] border-t-1 border-[#B5B8BB] mx-auto" />
        <div className="flex flex-row justify-center pt-[20px] mx-auto">
          <img src={Video} alt="video" className="pr-[10px]" />
          <h1 className="font-[500] text-[13px] text-text-blue">
            Your Answer graphics
          </h1>
        </div>
        <div className="h-[144px] bg-gray-lighter p-[20px] rounded-lg m-[10px]"></div>
        <hr className="pt-[10px]" />
        <div className="flex flex-col pb-[10px]">
          <div className="flex flex-col justify-center align-middle p-[15px]">
            <h1 className="font-[500] text-[13px] text-text-blue text-center">
              Share to social media
            </h1>
            <div className="h-[20px] p-[10px]">
              <RWebShare
                data={{
                  text: "Like humans, flamingos make friends for life",
                  url: "https://on.natgeo.com/2zHaNup",
                  title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="flex flex-row mx-auto justify-between gap-[5px] ">
                  <img src={Share} alt="share" className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg" />
                  <img src={Twitter} alt="twitter" className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg" />
                  <img src={Facebook} alt="facebook"  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"/>
                  <img src={Instagram} alt="instagram" className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"/>
                  <img src={Tiktok} alt="tiktok"  className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"/>
                </button>
              </RWebShare>
            </div>
          </div>
          <Link to="/" className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] pt-[20px] max-w-[193px]">
            <img
              src={Home}
              alt="home"
              className="h-[20px] w-[20px] pr-[5px]"
            />
            <div className="text-[14px] font-semibold text-primary h-[50px] pt-[10px]">
              Go Home
            </div>
          <Link />

          {/* <Link to="/" className="flex flex-row align-middle justify-center mx-auto rounded-lg h-[40px] p-[10px]">
            <img src={Home} alt="home" className="w-[20px] h-[20px] pr-[5px]" />
            <span className="text-[14px] font-[500] text-primary h-[20px]">
              Go Home
            </span>
          </Link> */}
        </Link>
      </div>
    </div>
  </div>
    
  );
};

export default Submit;