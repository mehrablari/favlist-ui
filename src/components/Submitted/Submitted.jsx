import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import congrats from "../../assets/gif/congrats.gif";
import { Link, useLocation } from "react-router-dom";

import { RWebShare } from "react-web-share";

const Submit = () => {
  const location = useLocation();
  const graphicUrl = location.state.graphicUrl;

  return (
    <div
      className="pt-[100px] pb-[10px] h-screen md:h-screen mdx:h-screen mx-auto"
      style={{
        backgroundImage: `url(${congrats})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-neutral w-[327px] rounded-lg mx-auto py-[10px]">
        <div className="flex flex-col">
          <h2 className="w-[300px] font-[500] mx-auto text-center text-[14px] leading-5 pt-[10px]">
            Yaayy! Your answers have been submitted!
          </h2>
          {/* < hr className="border-t-2 border-[#B5B8BB] mx-auto" /> */}
          <div className="flex flex-row justify-center">
            <img src={Video} alt="video" className="pr-[10px]" />
            <h1 className="font-[500] text-[13px] text-text-blue">
              Your Answer graphic
            </h1>
          </div>
        </div>
        <img
          src={graphicUrl}
          alt="Your Answer Graphic"
          className=" mx-auto p-[10px]"
        />
        <div className=""></div>
        {/* <hr className="mt-[20px] border-t-2 border-[#B5B8BB] mx-auto" /> */}
        <div className="flex flex-col pb-[10px] mx-auto">
          <div className="p-[5px] mx-auto">
            <RWebShare
              data={{
                text: "My answers",
                url: graphicUrl,
                title: "Favlist",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="h-[40px] hover:bg-opacity-75 text-center rounded-lg  font-[600] w-[250px] flex-grow flex-shrink text-[14px] text-neutral bg-primary ">
                Share to social media
              </button>
            </RWebShare>
          </div>
          <Link
            to="/"
            className="flex flex-row items-center justify-between mx-auto rounded-lg h-[28px] hover:bg-primary-lighter px-[10px] max-w-[193px]"
          >
            <img src={Home} alt="home" className="h-[20px] w-[20px] pr-[5px]" />
            <button className="text-[14px]  font-semibold text-primary h-[26px]">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submit;
