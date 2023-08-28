// import SubmitHolder from "../../assets/icons/submitted.svg";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import congrats from "../../assets/gif/congrats.gif"
// import Facebook from "../../assets/icons/facebook.svg";
// import Twitter from "../../assets/icons/twitter.svg";
// import Tiktok from "../../assets/icons/tiktok.svg";
// import Instagram from "../../assets/icons/instagram.svg";
// import Share from "../../assets/icons/share.svg";
import highFive from "../../assets/gif/highfivegif.gif";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { RWebShare } from "react-web-share";

const Submit = () => {
  const location = useLocation();
  const graphicUrl = location.state.graphicUrl;


  return (
    <div className="bg-primary pt-[80px] pb-[10px] h-[100%] md:h-[100%] mx-auto">
      {/* <Helmet defer={false}>
        <title>FavList </title>
        <meta property="og:title" content="Favlist" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={graphicUrl} />
        <meta name="description" content="helmet" />
        <meta
          property="og:url"
          content="https://favlist-user-app.netlify.app"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Give answers to your favourite things"
        />
        <meta property="og:site_name" content="Favlist" />
        <meta name="twitter:image:alt" content="favourite answers" />
      </Helmet> */}
      <div className="bg-neutral w-[327px] rounded-lg mx-auto p-[20px]">
        <div className="flex flex-col justify-center align-middle">
          <img
            src={congrats}
            alt="answer submitted"
            className="w-[150px] h-[150px] mx-auto rounded-full"
          />
        </div>
        <h2 className="w-[300px] font-[500] mx-auto text-center text-[14px] leading-5 pb-[15px]">
          Yaayy! Your answers have been submitted!
        </h2>
        <hr className="border-t-2 border-[#B5B8BB] mx-auto" />
        <div className="flex flex-row justify-center pt-[20px] pb-[0] mx-auto">
          <img src={Video} alt="video" className="pr-[10px]" />
          <h1 className="font-[500] text-[13px] text-text-blue">
            Your Answer graphic
          </h1>
        </div>
        <div className=" rounded-lg">
          <img
            src={graphicUrl}
            alt="Your Answer Graphic"
            className="bg-primary p-[10px]"
          />
        </div>
        <hr className="mt-[20px] border-t-2 border-[#B5B8BB] mx-auto" />
        <div className="flex flex-col pb-[10px] mx-auto">
          <div className="flex flex-col justify-center align-middle p-[15px]">
            {/* <h1 className="font-[500] text-[13px] text-text-blue text-center">
              Share to social media
            </h1> */}

            <div className="p-[5px]">
              <RWebShare
                data={{
                  text: "My answers",
                  url: graphicUrl,
                  title: "Favlist",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="h-[40px] w-[250px] hover:bg-opacity-75 text-center mx-auto rounded-lg  font-[600] flex-grow flex-shrink text-[14px] text-neutral bg-primary ">
                  Share to social media
                </button>
              </RWebShare>
            </div>
          </div>
          <Link
            to="/"
            className="flex flex-row items-center justify-between mx-auto rounded-lg h-[40px] hover:bg-primary-lighter px-[10px] max-w-[193px]"
          >
            <img src={Home} alt="home" className="h-[20px] w-[20px] pr-[5px]" />
            <button className="text-[14px]  font-semibold text-primary h-[35px]">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submit;

// /* <button className="flex flex-row mx-auto justify-between gap-[5px] ">
// <img
//   src={Share}
//   alt="share"
//   className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
// />
// <img
//   src={Twitter}
//   alt="twitter"
//   className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
// />
// <img
//   src={Facebook}
//   alt="facebook"
//   className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
// />
// <img
//   src={Instagram}
//   alt="instagram"
//   className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
// />
// <img
//   src={Tiktok}
//   alt="tiktok"
//   className="w-[48] h-[24px] py-[4px] px-[16px] bg-button-inactive rounded-lg"
// />
