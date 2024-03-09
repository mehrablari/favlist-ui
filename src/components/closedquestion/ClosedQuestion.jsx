import axios from "axios";
import { useState, useEffect, createContext } from "react";
import QuestionCard from "./QuestionCard";
import Logo from "../../assets/images/logoblack.png";

export const ClosedQuestionContext = createContext();

const ClosedQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (page = 0) => {
      try {
        const response = await axios.get(
          `https://dev.pacerlabs.co/api/v1/search-archive?size=250`,
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

  return (
    <ClosedQuestionContext.Provider value={{ questions }}>
      <QuestionCard />
    </ClosedQuestionContext.Provider>
  );
};

export default ClosedQuestion;
