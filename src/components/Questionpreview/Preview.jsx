/* eslint-disable react/prop-types */
import Video from "../../assets/icons/video.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toPng } from "html-to-image";
import imgPreview from "../../assets/images/favimg.png";
import BgImage from "../../assets/images/favlistbg.jpg";
import DataContext from "../../context/DataContexts";
import { useContext } from "react";
import useQuestions from "../../hooks/useQuestions";

const Preview = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [image, setImage] = useState(false);

  const { goBackToEditAnswers, isDrag, setAnswers } = useContext(DataContext);

  const { mutate: mutateQuestion } = useQuestions();

  const location = useLocation();
  const dataContainer = location.state;
  const graphicTitle = dataContainer?.graphicTitle;
  const questionName = dataContainer?.questionName;

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleGenerateImage = useCallback(async () => {
    try {
      if (containerRef.current === null) {
        return null;
      } else {
        const dataUrl = await toPng(containerRef.current, { cacheBust: true });
        console.log("dataurl", dataUrl);
        return dataUrl.split(",")[1];
      }
    } catch (error) {
      toast.error("Error generating image:", error);

      return null;
    }
  }, [containerRef]);

  const handleEditQuestion = useCallback(() => {
    const questionId = localStorage.getItem("selectedQuestionId");
    // const newanswers = localStorage.getItem("answers");
    if (questionId) {
      goBackToEditAnswers(questionId);
    }

    setAnswers(dataContainer.answers);

    navigate("/");
  }, [goBackToEditAnswers, navigate, setAnswers, dataContainer.answers]);


  const convertBase64ToBlob = (base64String, fileType) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: fileType });
    return blob;
  };



  const handleSubmit = async () => {
    setIsSubmitting(true);
    const imageState = await handleGenerateImage();
  

    try {
      if (imageState) {

      
          const blobImage = convertBase64ToBlob(imageState, 'image/png');
          console.log(blobImage);
          // setImage(URL.createObjectURL(blobImage));
          // Perform further actions with the Blob as needed
      
        const answerSubmit = {
          questionId: dataContainer.questionId,
          answersJson: dataContainer.answers,
          ranked: false,
          graphicUrl: imageState,
          graphicFile: blobImage,
        };

        const response = await fetch(
          "https://dev.pacerlabs.co/api/v1/submissions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(answerSubmit),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("working fine");
          if (
            data &&
            data.status &&
            typeof data.status === "string" &&
            data.status.toLowerCase() === "success"
          ) {
            localStorage.removeItem("answers");

            navigate(
              "/submitted",
              {
                state: { graphicFile: blobImage ,
                  graphicUrl: data.data.answerGraphicLink  
                },
              },
              { replace: true }
            );

            mutateQuestion();
          } else {
            // Handle error scenarios
            toast.error("Submission was not successful");
            console.log("Submission was not successful");
          }
        } else {
          // Handle HTTP error scenarios
          toast.error("HTTP request to submission endpoint failed");
          console.log("HTTP request to submission endpoint failed");
        }
      } else {
        // Handle the case where image generation failed
        toast.error("Image generation failed");
        console.log("Image generation failed");
      }
    } catch (error) {
      // Handle any other errors
      toast.error("An error occurred:", error);
      console.log("An error occurred", error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
      }}
    >
      {/* <div>  
        <img
                src={image}
                //  src={URL.createObjectURL(filesArrayContent)}
                  alt="Favlistqq"
                  style={{ maxWidth: "100%" }}
                /></div> */}
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
            <div className="text-gray-list flex flex-wrap align-middle text-[22px] w-[300px] tracking-tighter font-[700] pl-[10px] pb-[10px]">
              {graphicTitle}
            </div>
            {dataContainer?.answers.map((answer, index) => (
              <div
                key={index}
                className="bg-center text-[#572df2] text-[20px] flex flex-wrap  font-sans w-[300px] pb-[6px]"
              >
                {isDrag ? (
                  <span className="text-[18px] text-neutral rounded-[100%] px-[5px] bg-[#572df2]">
                    #{index + 1}
                  </span>
                ) : null}
                <h2 className="font-[700] rounded-[8px] text-ellipsis w-[260px] overflow-hidden px-[10px] text-[18px]">
                  {answer.length > 40 ? `${answer.substring(0, 32)}.` : answer}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <form
          onClick={handleSubmit}
          className="hover:bg-opacity-75 flex justify-center align-middle max-w-[320px] w-[320px] sm:w-[300px] mx-auto px-[20px] bg-primary rounded-lg  my-[5px] "
        >
          <div className="">
            <button
              disabled={isSubmitting}
              type="submit"
              className="h-[30px] text-center  font-[600] flex-grow flex-shrink text-[15px] text-neutral "
            >
              {isSubmitting ? "Submitting....." : "Submit Answers"}
            </button>
          </div>
        </form>
        <div
          onClick={() => handleEditQuestion()}
          className=" hover:cursor-pointer flex flex-row items-center justify-center mx-auto rounded-lg h-[30px] py-[10px] mb-[10px] bg-button-inactive w-[320px] sm:w-[300px]"
        >
          <img src={ArrowBack} alt="" className="h-full pr-[5px]" />
          <span className="text-[14px] sm:text-[13px] md:text-[13px] font-semibold text-primary-light">
            Go back to edit answers
          </span>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Preview;
