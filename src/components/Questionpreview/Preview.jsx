import Video from "../../assets/icons/video.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toPng } from "html-to-image";
import { Helmet } from "react-helmet-async";
import Bg from "../../assets/images/fav.jpg";
import BgImage from "../../assets/images/favbg.jpg";
import Logo from "../../assets/images/logoAllwhite.png"

let imageState;
let imgUrl;

const Preview = () => {
  // const [imageUrl, setImageUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const location = useLocation();
  const dataContainer = location.state;
  const graphicTitle = dataContainer.graphicTitle;
  const questionName = dataContainer.questionName;
  // console.log("text", questionText);

  const containerRef = useRef(null);

  const handleGenerateImage = useCallback(async () => {
    if (containerRef.current === null) {
      return;
    } else {
      toPng(containerRef.current)
        .then((data) => {
          imageState = data.split(",")[1];
        })
        .catch((error) => console.error("Error generating image:", error));
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await handleGenerateImage();
    setIsSubmitting(true);

    setTimeout(() => {
      const answerSubmit = {
        questionId: dataContainer.questionId,
        answersJson: dataContainer.answers,
        ranked: false,
        graphicUrl: imageState,
      };

      fetch("https://dev.pacerlabs.co/api/v1/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(answerSubmit),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSubmitting(false);
          if (data && data.status) {
            if (
              data &&
              typeof data.status === "string" &&
              data.status.toLowerCase() === "success"
            ) {
              localStorage.removeItem("answers");
              localStorage.removeItem("selectedQuestionIndex");
              imgUrl = data.data.answerGraphicLink;
              setIsSuccessful(true);

              navigate("/submitted", {
                state: { graphicUrl: data.data.answerGraphicLink },
              });
            }
          }
        })
        .catch((error) => toast.error(error.message));
    }, 1500);
  };

  return (
    <div className="flex flex-col sm:py-[20px] mx-auto sm:h-screen mdx:h-screen md:h-screen h-screen lg:h-screen xl:h-screen overflow-hidden pt-[50px] sm:pt-[130px] md:pt-[130px]" style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      borderRadius: "16px",
    }}>
     
      <div className="mx-auto pt-[2px] sm:pt-[10px]">
        <h1 className="text-neutral font-[700] text-[16px] leading-3 pb-[5px]">
          PREVIEW YOUR ANSWERS
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg py-[5px] w-[360px] mx-auto">
        <div className="flex flex-col px-[10px]">
          <h1 className="font-[500] text-[14px] text-text-blue">Question</h1>
          <h1 className="font-[700] text-[18px] leading-[20px] text-gray-list py-[4px]">
            {questionName}
          </h1>
          <div className="flex">
            <img src={Video} alt="video" className="pr-[10px]" />
            <h1 className="font-[500] text-[14px] text-text-blue">
              Your preview image
            </h1>
          </div>
          
        </div>
        <div className="rounded-[12px] w-full">
          <div
            ref={containerRef}
            className="w-full bg-neutral"
          >
            <div className="text-gray-list flex flex-wrap align-middle justify-center text-center text-[18px] font-[600] pb-[10px]">
              {graphicTitle}
            </div>
            {dataContainer.answers.map((answer, index) => (
              <div
              key={index}
              className="bg-center text-neutral text-[14px] font-sans flex pl-[4px]"
            >
              <h2 className="font-[400] rounded-[8px] bg-primary mb-[10px] px-[10px] ">

              {answer}
              </h2>
            </div>
            ))}
            <div className="flex flex-row justify-between bg-primary w-full px-[10px]">
              <p className="text-neutral"><a href="www.favlist.net">www.favlist.net</a></p>
              <div className="">

              <img src={Logo} alt="favlist logo" className="w-[130px] h-[20px] mt-[4px]"/>
              </div>
            </div>
          </div>
        </div>

        <form
          onClick={handleSubmit}
          className="hover:bg-opacity-75 flex justify-center align-middle max-w-[287px] w-[260px] sm:w-[240px] mx-auto px-[20px] bg-primary rounded-lg  m-[10px] "
        >
          <div className="">
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[40px] text-center  font-[600] flex-grow flex-shrink text-[15px] text-neutral "
            >
              {isSubmitting ? "Submitting..." : "Submit Answers"}
            </button>
          </div>
        </form>
        <div className="flex flex-row items-center justify-center mx-auto rounded-lg h-[35px] py-[10px] mb-[10px] bg-button-inactive w-[260px] sm:w-[240px]">
          <img src={ArrowBack} alt="" className="h-full pr-[10px]" />
          <Link
            to="/"
            className="text-[14px] sm:text-[13px] md:text-[13px] font-semibold text-primary-light"
          >
            Go back to edit answers
          </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Preview;



 {/* <Helmet>
        <title>{questionName} </title>
        {/* <meta property="og:title" content="preview favlist" /> */}

      //   <meta property="og:type" content="article" />
      //   <meta property="og:title" content={questionName} />
      //   <meta property="og:image" content={imgUrl} />
        
      //   <meta name="description" content="helmet" />
      //   <meta
      //     property="og:url"
      //     content="http://favlist.surge.sh/"
      //   />
      //   <meta name="twitter:card" content="summary_large_image" />

      //   <meta
      //     property="og:description"
      //     content="Give answers to your favourite things"
      //   />
      //   <meta property="og:site_name" content="Favlist" />
      //   <meta name="twitter:image:alt" content="favourite answers" />
        
      // </Helmet> */}