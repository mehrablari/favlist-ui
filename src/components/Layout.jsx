import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";

import { useState, useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const [apiData, setApiData] = useState([]);

  const [activeAnswerJson, setActiveAnswerJson] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [suggestedOption, setSuggestedOption] = useState([]);
  const [answers, setAnswers] = useState([]);
  

  const handleSwipe = (activeAnswerJson) => {
    setActiveAnswerJson(activeAnswerJson);
    setSelectedOption(activeAnswerJson[0]);
    setSuggestedOption(activeAnswerJson); 
  };

  const handleSubmission = (selectedOption) => {
    if (
      selectedOption &&
      !answers.some((answer) => answer === selectedOption) &&
      answers.length < 5
    ) {
      answers.push(selectedOption);
      setAnswers([...answers]);
    }
  };

  const handleDismiss = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const handleSuggestion = (suggestedOption) => {
    setSuggestedOption(suggestedOption);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://35.209.30.214:443/api/v1/questions",

          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
            body: JSON.stringify({
              apiData: apiData,
            }),
          }
        );
        setApiData(response.data);

        setActiveAnswerJson(response.data[0].answersJson);
        setSelectedOption(response.data[0].answersJson[0])
        setSuggestedOption(response.data[0].answersJson);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-w-[375px]">
      <NavBar />
      <CardSwipeContainer questionData={apiData} handleSwipe={handleSwipe} />
      <Searchbox
        answerData={apiData}
        activeAnswerJson={activeAnswerJson}
        handleSubmission={handleSubmission}
      />
      <Suggestion
        className="bg-neutral"
        suggestedOption={suggestedOption}
        handleSuggestion={handleSuggestion}
        
      />
      <AnsweredList answers={answers} handleDismiss={handleDismiss} />
    </div>
  );
};

export default Layout;
