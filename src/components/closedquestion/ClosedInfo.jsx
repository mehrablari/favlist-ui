import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import NavBar from "../NavBar";
import ClosedAnswers from "./ClosedAnswers";

import Logo from "../../assets/images/logoblack.png";
import ArrowBack from "../../assets/images/back.png";
import "./closeinfo.css"

const ClosedInfo = () => {
  const { id } = useParams();
  const [infoData, setInfoData] = useState(null);


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
      <div className="flex justify-center items-center flex-col  mx-auto pt-[100px]  bg-neutral h-screen">
        <div className="animate-bounce animate-infinite">
          <img
            src={Logo}
            alt="loading logo"
            className="h-[70px] w-[280px] pb-[20px]"
          />
          <p className="text-center">Please Wait ...</p>
        </div>
      </div>
    );
  }

  const { text, dateToPost, sponsor, answers, answerGraphicLink } = infoData;

  const formatDate = (inputDate) => {
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-row items-center pb-[10px] pt-[80px] pl-[10px] font-sans fixed h-[50px] w-full bg-neutral">
        <img src={ArrowBack} alt="" className="h-[22px] pr-[5px]" />
        <Link to="/closedquestion" className="text-[18px] font-semibold">
          Back
        </Link>
      <div
          key={id}
          className="sm:w-[340px] lg:w-[600px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] mt-[14rem] max-w-[380px] h-[240px] drop-shadow-lg border-2 border-primary z-50"
        >
          <div className="flex flex-col bg-neutral  rounded-lg gap-[15px] h-[212px]">
            <div className="text-gray-dark w-[287px] sm:text-[16px] md:w-[230px] sm:w-[220px] text-[18px] mx-auto h-[72px] leading-[24px] font-[700]">
              {text}
            </div>
            <p className="text-[12px] text-gray-light font-[400] ">
              Question on {formatDate(dateToPost)}
            </p>

            <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
              <h3 className="text-gray-lighter text-[12px] font-[400]">
                affiliate
              </h3>
              <div className="flex justify-center">
                <a href={`${sponsor.url}`}>
                  <img
                    src={sponsor.logoUrl}
                    alt="netflix"
                    className="w-[30px] h-[30px]"
                  />
                </a>
              </div>
              <div className="flex justify-center">
                <h3 className="text-gray-dark text-[12px] font-[600] pb-[10px] text-center w-[200px]">
                  {sponsor.name}
                </h3>
              </div>
            </div>
            <div className="youtube absolute bottom-md right-[0px] top-[205px]">
              <a
                href={`${sponsor.youTubeLink}`}
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
      </div>
      <div className="bg-neutral pt-[320px] z-30">
        
        <ClosedAnswers answerData={answers} answerId={id} />
      </div>
    </>
  );
};

export default ClosedInfo;
