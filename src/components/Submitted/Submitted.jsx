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
      className="pt-[50px] sm:pt-[120px] md:pt-[120px] pb-[10px] h-screen md:h-screen mdx:h-screen mx-auto sm:h-screen"
      style={{
        backgroundImage: `url(${congrats})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"100vh",
        width:"100%"
      }}
    >
      <div className="bg-neutral w-[360px] sm:w-[340px] md:w-[360px] rounded-lg mx-auto py-[10px]">
        <div className="flex flex-col">
          <h2 className="w-[327px] font-[500] mx-auto text-center text-[14px] leading-5 pt-[10px]">
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
              <button className="h-[40px] bg-primary hover:bg-opacity-75 text-center rounded-lg  font-[600] w-[250px] flex-grow flex-shrink text-[14px] text-neutral ">
                Share to social media
              </button>
            </RWebShare>
          </div>
          <Link
            to="/"
            className="flex flex-row bg-primary items-center justify-center mx-auto rounded-lg h-[40px] hover:bg-primary-lighter px-[10px] w-[250px]"
          >
            <img src={Home} alt="home" className="h-[20px] w-[20px] pr-[5px]" />
            <button className="text-[14px] text-neutral  font-semibold h-[26px]">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submit;
