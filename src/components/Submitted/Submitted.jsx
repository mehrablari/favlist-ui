import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import congrats from "../../assets/gif/congrats.gif";
import {  useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";

import { RWebShare } from "react-web-share";
import useQuestions from "../../hooks/useQuestions";
import DataContext from "../../context/DataContexts";

const Submit = () => {

  const {  setEditQuestion } =
    useContext(DataContext);

   
  const location = useLocation();
  const graphicUrl = location.state.graphicUrl;

  const navigate = useNavigate();

  const { mutate: mutateQuestion} = useQuestions()


  const handleSubmit =  () => {

    mutateQuestion()
    
    localStorage.removeItem("answers");
    // localStorage.removeItem("selectedQuestionIndex");
    // localStorage.removeItem("selectedQuestionId");
    setEditQuestion(null);
    navigate('/');
     // Refresh the page
  //  window.location.reload();
 
  };

  return (
    <>
      <Helmet defer={false} prioritizeSeoTags>
        {/* Regular meta */}
        <title>Give answers to your favourite things</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="favlist answers" />
        <meta property="og:url" content="https://favlist.surge.sh" />
        <meta property="robots" content="index, follow" />
        <meta
          name="description"
          content="Give Answers to your favorite things"
        />
        <meta
          property="og:description"
          content="Give answers to your favorite things"
        />
        {/* Image meta */}
        <meta property="og:image" itemProp="image" content={graphicUrl} />
        <meta property="og:image:secure_url" content={graphicUrl} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="favlist" />
        {/* twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="favorite answers" />
        <meta name="twitter:image" itemProp="image" content={graphicUrl + "/"} />
        <meta property="twitter:image:width" content="600" />
        <meta property="twitter:image:height" content="314" />
        <meta property="twitter:card" content="app" />
        <meta property="twitter:url" content="https://favlist.surge.sh" />
        <meta property="twitter:title" content="favlist" />
        <meta
          property="twitter:description"
          content="Give answers to your favorite things"
        />
      </Helmet>
      <div
        className="pt-[50px] sm:pt-[120px] md:pt-[120px] pb-[10px] h-screen md:h-screen mdx:h-screen mx-auto sm:h-screen"
        style={{
          backgroundImage: `url(${congrats})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="bg-neutral w-[360px] sm:w-[340px] md:w-[360px] rounded-lg mx-auto py-[10px]">
          <div className="flex flex-col">
            <h2 className="w-[327px] font-[500] mx-auto text-center text-[14px] leading-5 pt-[10px]">
              Yaayy! Your answers have been submitted! 1{" "}
            </h2>

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

          <div className="flex flex-col pb-[10px] mx-auto">
            <div className="p-[5px] mx-auto">
              <RWebShare
                data={{
                  text: "Favorite Answers",
                  url: graphicUrl,
                  title: "Give answers to your favorite things",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="h-[40px] bg-primary hover:bg-opacity-75 text-center rounded-lg  font-[600] w-[250px] flex-grow flex-shrink text-[14px] text-neutral ">
                  Share to social media
                </button>
              </RWebShare>
            </div>
            <span
             onClick={handleSubmit}
              className="flex flex-row bg-primary items-center justify-center mx-auto rounded-lg h-[40px] hover:bg-primary-lighter px-[10px] w-[250px]"
            >
              <img
                src={Home}
                alt="home"
                className="h-[20px] w-[20px] pr-[5px]"
              />
              <button className="text-[14px] text-neutral  font-semibold h-[26px]">
                Go Home
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
