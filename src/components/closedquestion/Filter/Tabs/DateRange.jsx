import React, { useState } from "react";
import Calendar from "../.../../../../../assets/images/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="flex flex-row h-[44px] border rounded-[12px] mt-[20px] pl-[12px] mx-auto w-[327px]">
        <img
          src={Calendar}
          alt="calendar"
          className="mt-[10px] w-[20px] h-[20px]"
        />
          <DatePicker
          placeholderText="Exact date"
          isClearable={false}
            className="pt-[12px] pl-[15px] font-[400] text-[13px] leading-4"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
      </div>
    </div>
  );
};

export default DateRange;

const Submit = () => {
  // ... other code ...

  const handleShareImage = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 400;

    // Draw on the canvas
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Example: Draw question and answers onto the canvas
    context.fillStyle = "black";
    context.font = "18px Arial";

    const questionText = dataContainer.questionName;
    const answerText = dataContainer.answers.join(", ");

    const questionX = 10;
    const questionY = 30;
    const answerX = 10;
    const answerY = 60;

    context.fillText("Question:", questionX, questionY);
    context.fillText(questionText, questionX, questionY + 20);

    context.fillText("Answers:", answerX, answerY);
    context.fillText(answerText, answerX, answerY + 20);

    // Convert canvas to data URL (base64 image) and share
    const imageDataURL = canvas.toDataURL("image/png");

    try {
      await RWebShare.share({
        text: "Check out my answers!",
        url: imageDataURL,
      });
      console.log("Shared successfully!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // ... rest of the code ...
};



// import SubmitHolder from "../../assets/icons/submitted.svg";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Tiktok from "../../assets/icons/tiktok.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Share from "../../assets/icons/share.svg";
import highFive from "../../assets/gif/highfivegif.gif"
import { Link, useLocation } from "react-router-dom";

// import { FacebookShareButton, TwitterShareButton } from "react-share";
import { RWebShare } from "react-web-share";
import { useContext } from "react";





const Submit = () => {
  const location = useLocation();
  const dataContainer = location.state;

  
  const question = dataContainer.questionName;
  
  console.log("datacontainer", question);


 
  return (
    <div className="bg-primary pt-[80px] pb-[20px]">
      <div className="bg-neutral h-screen w-[327px] rounded-lg mx-auto p-[20px]">
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
            Your Answer graphic
          </h1>
        </div>
        <div className="h-[200px] bg-gray-lighter p-[20px] rounded-lg m-[10px]">
          <div className="text-neutral">{question}</div>
          {dataContainer.answers.map((answer, index) => (
              <div key={index} className="bg-center text-center text-neutral text-sm transition-all duration-300 hover:bg-primary">
                {answer}
              </div>
            ))}
        </div>
        <hr className="pt-[10px]" />
        <div className="flex flex-col pb-[10px]">
          <div className="flex flex-col justify-center align-middle p-[15px]">
            <h1 className="font-[500] text-[13px] text-text-blue text-center">
              Share to social media
            </h1>
            <div className="h-[20px] p-[10px]">
              <RWebShare
                data={{
                  
                  text: `My answers: ${dataContainer.answers.join(', ')}`,
                  title: "Favlist",
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
            <button className="text-[14px] font-semibold text-primary h-[50px]">
              Go Home
            </button>
          <Link />

        </Link>
      </div>
    </div>
  </div>
    
  );
};

export default Submit;





// import SubmitHolder from "../../assets/icons/submitted.svg";
import Video from "../../assets/icons/video.svg";
import Home from "../../assets/icons/Home.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Tiktok from "../../assets/icons/tiktok.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Share from "../../assets/icons/share.svg";
import highFive from "../../assets/gif/highfivegif.gif"
import { Link, useLocation } from "react-router-dom";


// import { FacebookShareButton, TwitterShareButton } from "react-share";
import { RWebShare } from "react-web-share";
import { toPng } from 'html-to-image';
import { useRef } from "react";

const dataUrl = await toPng(containerRef.current);
      setImageDataUrl(dataUrl);




const Submit = () => {
  const location = useLocation();
  const dataContainer = location.state;
  const elementRef = useRef(null);

  const toImage = toPng(elementRef.current, { cacheBust: false })
      .then((dataContainer) => {
        const link = document.createElement("div");
        link.href = dataContainer;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });

  
  const question = dataContainer.questionName;
  
  console.log("datacontainer", question);
 
  return (
    <div className="bg-primary pt-[80px] pb-[20px]">
      <div className="bg-neutral h-screen w-[327px] rounded-lg mx-auto p-[20px]">
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
            Your Answer graphic
          </h1>
        </div>
        <div className="h-[200px] bg-gray-lighter p-[20px] rounded-lg m-[10px]">
          <div className="text-neutral">{question}</div>
          {dataContainer.answers.map((answer, index) => (
              <div key={index} className="bg-center text-center text-neutral text-sm transition-all duration-300 hover:bg-primary">
                {answer}
              </div>
            ))}
        </div>
        <hr className="pt-[10px]" />
        <div className="flex flex-col pb-[10px]">
          <div className="flex flex-col justify-center align-middle p-[15px]">
            <h1 className="font-[500] text-[13px] text-text-blue text-center">
              Share to social media
            </h1>
            <div className="h-[20px] p-[10px]">
              <RWebShare
                data={{
                  
                  text: `My answers: ${dataContainer.answers.join(', ')}`,
                  title: "Favlist",
                }}
                onClick={toImage}
              >
                <button ref={elementRef} className="flex flex-row mx-auto justify-between gap-[5px] ">
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
            <button className="text-[14px] font-semibold text-primary h-[50px]">
              Go Home
            </button>
          <Link />

        </Link>
      </div>
    </div>
  </div>
    
  );
};

export default Submit;
  




