import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import NavBar from "../NavBar";
import ClosedAnswers from "./ClosedAnswers";
import Logo from "../../assets/images/logoblack.png";
import ArrowBack from "../../assets/images/arrow-right.png";
import "./closeinfo.css";
import InfoIcon from '@mui/icons-material/Info';


const ClosedInfo = () => {
  const { id } = useParams();
  const [infoData, setInfoData] = useState(null);
  const [answers , setAnswers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.favlist.net/api/v1/search-archive/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        response.data;

        setInfoData(response.data.data);
        
        if(response.data.data.answers.length > 50){
          setAnswers(response.data.data.answers.slice(0,50))
        }else {
          setAnswers(response.data.data.answers)
        }
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

  const { text, dateToPost, sponsor, answerGraphicLink } = infoData;
  
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
    <div>
      <NavBar />
      <div className="flex flex-col pb-[10px] pt-[50px] pl-[10px] font-sans h-[310px] fixed w-full bg-primary">
        <Link to="/closedquestion" className="pt-[10px] flex justify-between w-[60px]">
          <img src={ArrowBack} alt="" className="h-[22px] pr-[5px] mt-[2px]" />
          <h2 className="text-[18px] font-semibold text-white text-[#fff]">Back</h2>
        </Link>
        <div
          key={id}
          className="sm:w-[340px] md:w-[360px] mdx:w-[380px] pt-[12px] lg:w-[600px] bg-neutral rounded-[24px] mx-auto flex flex-col items-center justify-center text-center align-middle gap-[8px] mt-[5px] max-w-[380px] h-[200px] drop-shadow-lg border-2 border-primary"
        >
          <div className="flex flex-col bg-neutral  rounded-lg gap-[8px] h-[212px]">
            <div className="text-gray-dark mdx:w-[340px] w-[360px] md:w-[320px] sm:w-[100%] text-[20px] mx-auto h-[80px] leading-[24px] px-[10px] font-[700]">
              {text}
            </div>
            <p className="text-[14px] text-gray-light font-[400] ">
              Question on {formatDate(dateToPost)}
            </p>

            <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
              <h3 className="text-gray-lighter text-[14px] font-[400]">
                affiliate
              </h3>
              <div className="flex justify-center">
                <a href={`${sponsor.url}`} target="_blank" rel="noreferrer">
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
            <div className="youtube absolute bottom-md right-[20px] top-[240px]">
                <a
                  href="https://favlist.net"
                  target="_blank"
                  className="w-[56px]"
                >
                  <InfoIcon />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral pt-[300px]">
        <ClosedAnswers answerData={answers} answerId={id} />
      </div>
    </div>
  );
};

export default ClosedInfo;
