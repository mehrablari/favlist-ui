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
    <div className="flex flex-col py-[40px] sm:py-[20px] mx-auto sm:h-screen mdx:h-screen md:h-screen h-screen lg:h-screen xl:h-screen overflow-hidden" style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      borderRadius: "16px",
    }}>
      <Helmet defer={false}>
        <title>FavList </title>
        <meta property="og:title" content="Favlist" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imgUrl} />
        <meta name="description" content="helmet" />
        <meta
          property="og:url"
          content="https://favuserapp.netlify.app"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Give answers to your favourite things"
        />
        <meta property="og:site_name" content="Favlist" />
        <meta name="twitter:image:alt" content="favourite answers" />
      </Helmet>
      <div className="mx-auto pt-[40px] sm:pt-[10px]">
        <h1 className="text-neutral font-[700] text-[16px] leading-5 p-[10px]">
          PREVIEW YOUR ANSWERS
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg px-[10px] py-[20px] gap-[16px] w-[327px] mx-auto">
        <div className="flex flex-col">
          <h1 className="font-[500] text-[14px] text-text-blue">Question</h1>
          <h1 className="font-[700] text-[18px] leading-[24px] text-gray-list py-[10px]">
            {questionName}
          </h1>
          <div className="flex">
            <img src={Video} alt="video" className="pr-[10px]" />
            <h1 className="font-[500] text-[14px] text-text-blue">
              Your preview image
            </h1>
          </div>
          
        </div>
        <div className="rounded-[12px]">
          <div
            ref={containerRef}
            className=""
            style={{
              backgroundImage: `url(${Bg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "100%",
              borderRadius: "16px",
            }}
          >
            <div className="text-neutral flex flex-wrap align-middle justify-center text-center text-[16px] font-[600] pb-[10px]">
              {graphicTitle}
            </div>
            {dataContainer.answers.map((answer, index) => (
              <div
                key={index}
                className="bg-center text-neutral text-center text-[14px] font-sans font-[400] rounded-[24px] border-[1px] border-[#FF9F00] mb-[20px] min-w-[210px] w-[160px] mx-auto"
              >
                {answer}
              </div>
            ))}
          </div>
        </div>

        <form
          onClick={handleSubmit}
          className="hover:bg-opacity-75 flex justify-center align-middle max-w-[287px] w-[287px] sm:w-[220px] mx-auto px-[20px] bg-primary rounded-lg  m-[10px] "
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

        <div className="flex flex-row items-center justify-around mx-auto rounded-lg h-[35px] p-[10px] bg-button-inactive w-[200px]">
          <img src={ArrowBack} alt="" className="h-full pr-[2px]" />
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
