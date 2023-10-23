import { Link, useLocation } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Video from "../../assets/icons/video.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";
import congrats from "../../assets/gif/congrats.gif";
import { Helmet } from "react-helmet-async";

const AnswerGraphics = () => {
  const location = useLocation();
  const imgUrl = location.state;

  return (
    <>
      <Helmet defer={false} prioritizeSeoTags>
        <title>Give answers to your favourite things</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="question image" />

        <meta name="description" content="helmet" />
        <meta property="og:url" content="https://favlist.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={imgUrl} />
        <meta
          property="og:description"
          content="Give answers to your favourite things"
        />
        <meta name="twitter:image:alt" content="favourite answers" />
      </Helmet>
      <div
        className="pt-[100px] sm:pt-[130px] md:pt-[130px]  pb-[10px] sm:h-screen h-screen md:full mdx:h-screen mx-auto"
        style={{
          backgroundImage: `url(${congrats})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-neutral min-h-[300px] w-[400px]  sm:w-[340px] md:w-[360px] mx-auto rounded-[24px]">
          <div className="flex flex-row justify-center align-middle mx-auto">
            <img
              src={Video}
              alt="video"
              className="h-full pt-[8px] pr-[10px]"
            />
            <h1 className="font-[600] text-md text-text-blue">
              Your Answer graphics
            </h1>
          </div>
          <div className="min-h-[100px] max-w-[400px] p-[10px]">
            <img
              src={imgUrl}
              alt="Your Answer Graphic"
              className=" w-[400px] sm:w-[340px] md:w-[360px] h-[340px] sm:h-[300px]"
            />
          </div>
          <div className="flex flex-col pb-[10px]">
            <div className="flex flex-col justify-center align-middle pb-[5px]">
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
            <div className="flex flex-row items-center justify-center mx-auto rounded-lg h-[35px] p-[10px] bg-button-inactive min-w-[240px]">
              <img src={ArrowBack} alt="" className="h-full pr-[2px]" />
              <Link
                to="/"
                className="text-[14px] font-semibold text-primary-light"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerGraphics;
