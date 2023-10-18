import Video from "../../assets/icons/video.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";
import {  useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toPng } from "html-to-image";
import imgPreview from "../../assets/images/bgimage.png";
import BgImage from "../../assets/images/favbg.jpg";
import DataContext from "../../context/DataContexts";
import { useContext } from "react";

// let imageState;
// let imgUrl;

const Preview = () => {
  const [imageState, setimageState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
 

  const { goBackToEditAnswers, setEdittAnswer } = useContext(DataContext);

  const location = useLocation();
  const dataContainer = location.state;
  const graphicTitle = dataContainer.graphicTitle;
  const questionName = dataContainer.questionName;

  const containerRef = useRef(null);

  const handleGenerateImage = useCallback(async () => {
    if (containerRef.current === null) {
      return;
    } else {
      toPng(containerRef.current)
        .then((data) => {
          setimageState(data.split(",")[1]) 
        })
        .catch((error) => console.error("Error generating image:", error));
    }
  }, []);

  const navigate = useNavigate();

  const handleEditQuestion = useCallback(() => {
    const questionId = localStorage.getItem('selectedQuestionId');
    const answers = localStorage.getItem('answers');
    questionId ?  goBackToEditAnswers(questionId) : null;
    answers ? setEdittAnswer(answers) : null;
    navigate('/');

  }, [goBackToEditAnswers, setEdittAnswer, navigate]);

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
    <div
      className="flex flex-col sm:py-[20px] mx-auto sm:h-screen mdx:h-screen md:h-screen h-screen lg:h-screen xl:h-screen overflow-hidden pt-[30px] sm:pt-[50px] md:pt-[50px] sm:pr-[16px] md:sm:pr-[12px]"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      <div className="mx-auto pt-[2px] sm:pt-[5px]">
        <h1 className="text-neutral font-[700] text-[16px] leading-3 pb-[5px]">
          PREVIEW YOUR ANSWERS
        </h1>
      </div>
      <div className="flex flex-col bg-neutral rounded-lg py-[30px] w-[380px] mx-auto">
        <div className="flex flex-col px-[10px]">
          <h1 className="font-[500] text-[14px] text-text-blue">Question</h1>
          <h1 className="font-[700] text-[18px] leading-[20px] text-gray-list py-[2px]">
            {questionName}
          </h1>
          <div className="flex">
            <img src={Video} alt="video" className="pr-[10px]" />
            <h1 className="font-[500] text-[14px] text-text-blue">
              Your preview image
            </h1>
          </div>
        </div>
        <div
          ref={containerRef}
          className="w-full my-[10px] "
          style={{
            backgroundImage: `url(${imgPreview})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "370px",
          }}
        >
          <div className="pl-[20px] pt-[10px] pb-[5px] ">
            <div className="text-gray-list flex flex-wrap align-middle text-[20px] w-[270px] tracking-tighter font-[700] pl-[10px] pb-[10px]">
              {graphicTitle}
            </div>
            {dataContainer.answers.map((answer, index) => (
              <div
                key={index}
                className="bg-center text-[#572df2] text-[16px] flex flex-wrap  font-sans w-[230px]"
              >
                <h2 className="font-[700] rounded-[8px] mb-[5px] px-[10px] ">
                  {answer.length > 30
                    ? `${answer.substring(0, 30)}...`
                    : answer}
                </h2>
                <span className="text-[14px] text-gray-400 pr-[5px]">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onClick={handleSubmit}
          className="hover:bg-opacity-75 flex justify-center align-middle max-w-[287px] w-[260px] sm:w-[240px] mx-auto px-[20px] bg-primary rounded-lg  my-[5px] "
        >
          <div className="">
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[30px] text-center  font-[600] flex-grow flex-shrink text-[15px] text-neutral "
            >
              {isSubmitting ? "Submitting..." : "Submit Answers"}
            </button>
          </div>
        </form>
        <div  onClick={() => handleEditQuestion()} className=" hover:cursor-pointer flex flex-row items-center justify-center mx-auto rounded-lg h-[30px] py-[10px] mb-[10px] bg-button-inactive w-[260px] sm:w-[240px]">
          <img src={ArrowBack} alt="" className="h-full pr-[10px]" />
          <span
           
            className="text-[14px] sm:text-[13px] md:text-[13px] font-semibold text-primary-light"
          >
            Go back to edit answers
          </span>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Preview;