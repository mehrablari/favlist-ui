import NavBar from "../NavBar";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import QuestionCard from "./QuestionCard";
import CloseQuestionHeader from "./CloseQuestionHeader";
import Logo from "../../assets/images/logoAllWhite.png"


export const ClosedQuestionContext = createContext()

const ClosedQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.pacerlabs.co/api/v1/search-archive",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        response.data;
        setIsLoading(false);
        

        setQuestions(response.data.data.content);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle mx-auto pt-[300px] bg-neutral h-screen">
        <img src={Logo} alt="loading logo" className=" h-[70px] w-[100px]" />
      </div>
    );
  }


  return (
    <ClosedQuestionContext.Provider value={{questions}}>
      <NavBar />
      <CloseQuestionHeader />

      <QuestionCard />
    </ClosedQuestionContext.Provider>
  );
};

export default ClosedQuestion;
