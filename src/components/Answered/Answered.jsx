import AnsweredResponse from "../../utils/AnsweredResponse";

// import NavBar from '../NavBar';
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logoblack.png";
import axios from "axios";
import AnsweredCard from "./AnsweredCard";
import AnswerProvided from "./AnswerProvided";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Answered = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dev.pacerlabs.co/api/v1/submissions/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        if (response.status === "FAILED") {
          toast.error(response.message);
        }
        setIsLoading(false);
        console.log("value in answered",response.data);
        setApiData(response.data.data);
        setAnswers(response.data.data.answers);
      } catch (error) {
        console.error(error);
        
        setIsError(true);
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen w-full">
        <img src={Logo} alt="loading logo" className=" h-[40px] w-[100px]" />
      </div>
    );
  }

  return (
    <div>
      {isError ? (
        <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen w-full text-center text-gray-dark">
          {errorMessage}
        </div>
      ) : (
        <>
          <NavBar />
          <div className="bg-neutral font-sans">
            <AnsweredCard cardData={apiData} />
            <AnsweredResponse />

            <AnswerProvided answerData={answers} apiData={apiData} />
          </div>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Answered;
