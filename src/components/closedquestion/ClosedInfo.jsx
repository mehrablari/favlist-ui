import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import NavBar from "../NavBar"

import ClosedQuestionFlag from "./ClosedQuestionFlag";
import ClosedAnswers from "./ClosedAnswers";
import TruncateAnswers from "./TruncateAnswers";
import Logo from "../../assets/images/logoAllWhite.png"

  

const ClosedInfo = () => {
  const { id } = useParams();
  const [infoData, setInfoData] = useState(null);

  console.log(123, id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dev.pacerlabs.co/api/v1/search-archive/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        response.data;
        console.log(123, response.data.id);
        setInfoData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setInfoData(null); // Optional: Handle error state
      }
    };

    fetchData();
  }, [id]);

  if (!infoData) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen">
        <img src={Logo} alt="loading logo" className=" h-[70px]" />
      </div>
    );
  }

  const { text, dateToPost, sponsor, answers, answerGraphicLink} = infoData;
 

  return (
    <>
    <NavBar />
    <div className="bg-neutral pt-[30px]">
      <div
        key={id}
        className="sm:w-[300px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] p-[20px] m-[3rem] max-w-[380px] h-[240px] drop-shadow-lg"
      >
        <div className="flex flex-col bg-neutral  rounded-lg gap-[15px] h-[212px]">
          <p className="text-[12px] text-gray-light font-[400] ">
            Question on {dateToPost}
          </p>
          <div className="text-gray-dark w-[287px] sm:text-[16px] md:w-[230px] sm:w-[220px] text-[18px] mx-auto h-[72px] leading-[24px] font-[700]">
            {text}
          </div>

          <div className="flex flex-col justify-center m-[3px] w-[42px] h-[56px] mx-auto">
            <h3 className="text-gray-lighter text-[12px] font-[400]">
              affiliate
            </h3>
            <div className="flex justify-center p-[5px] ">
              <a href={sponsor.url}>
                <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
              </a>
            </div>
            <h3 className="text-gray-dark text-[12px] font-[600] pb-[20px]">
              {sponsor.name}
            </h3>
          </div>
          <div className="absolute bottom-md right-md">
            <a
              href="https://youtube.com"
              className="hover:bg-primary-bg bg-grey-text w-[56px]"
            >
              <img
                src={youtubeIcon}
                alt="youtube icon"
                className="w-[24px] h-[17px]"
              />
            </a>
          </div>
        </div>
      </div>
      <ClosedQuestionFlag answerGraphic={answerGraphicLink} />
      <TruncateAnswers />
      <ClosedAnswers answerData={answers} answerId={id} />
    </div>
    </>
  );
};

export default ClosedInfo;
