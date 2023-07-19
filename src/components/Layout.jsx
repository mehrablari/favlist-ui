import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";
import soundEffect from "../assets/audio/software.wav";
import { useState, useEffect } from "react";
import axios from "axios";





const Layout = () => {
//state management
  const [apiData, setApiData] = useState([]);
  const [activeAnswerJson, setActiveAnswerJson] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [suggestedOption, setSuggestedOption] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [clickedValue, setClickedValue] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState();
  const [questionId, setQuestionId] = useState("")

//sound when a suggestion is clicked
  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };


  //manage when a suggestion is clicked
  const handleClick = (option) => {
    if(!answers.includes(option) && answers.length < 5 ){
      setAnswers((prevItems) => [...prevItems, option]);
      playSoundEffect();
    } 

  };
//manage the swiping card of question container
  const handleSwipe = (activeQuestion) => {
    setActiveAnswerJson(activeQuestion.answersJson);
    setSelectedOption(activeQuestion.answersJson[0]);
    setSuggestedOption(activeQuestion.answersJson);
    setQuestionId(activeQuestion.id);    

  };

  //handle filtering when user search via searchbar
  const handleFilter = (inputValue) => {
   
    if (inputValue) {
      const suggestedOptions = [...suggestedOption];
      const options =
        suggestedOptions.filter((word) =>
          word.toLowerCase().startsWith(inputValue.toLowerCase())
        ) || [];
      setFilteredOptions(options);
    } else {
      setFilteredOptions(suggestedOption);
    }
  };

  //handle when answers is submitted to answeredlist
  const handleSubmission = (selectedOption) => {
    if (
      selectedOption &&
      !answers.some((answer) => answer === selectedOption) &&
      answers.length < 5
    ) {
      setAnswers(prevAnswers => [...prevAnswers, selectedOption])
    }
  };

  //manage removal of answers from answeredlist
  const handleDismiss = (index) => {
    setAnswers(prevAnswers => prevAnswers.filter((_, i) => i !== index))
  };





// manage api request
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
          }
        );
        setApiData(response.data);
        console.log("response", response.data)

        setActiveAnswerJson(response.data[0].answersJson);
        setSelectedOption(response.data[0].answersJson[0]);
        setSuggestedOption(response.data[0].answersJson);
        setClickedValue(response.data[0].answersJson);
        setQuestionId(response.data[0].id);
        
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);


  // //save current answer to localstorage
  // useEffect(() => {
  //   // Save answers to localStorage
  //   localStorage.setItem("answers", JSON.stringify(answers));
  // }, [answers]);

// Retrieve answers from localStorage
  useEffect(() => {
    const storedAnswers = localStorage.getItem("answers");
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  return (
    <div className="m-w-[375px]">
      <NavBar />
      <CardSwipeContainer questionData={apiData} handleSwipe={handleSwipe} />
      <Searchbox
        answerData={apiData}
        activeAnswerJson={activeAnswerJson}
        handleSubmission={handleSubmission}
        handleFilter={handleFilter}
      />
    <Suggestion
        className="bg-neutral"
        suggestedOption={suggestedOption}
        setSuggestedOption={setSuggestedOption}
        handleAnswers={handleSubmission}
        handleClick={handleClick}
        filteredOptions={filteredOptions}
      />
      <AnsweredList
        answers={answers}
        handleDismiss={handleDismiss}
        questionId={questionId}
        clickedValue={clickedValue}
      />
      
    </div>
  );
};

export default Layout;