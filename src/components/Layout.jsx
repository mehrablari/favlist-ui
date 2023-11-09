/* eslint-disable react/prop-types */
import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";
import AnsweredContainer from "./Answered/AnsweredContainer";

//assets
import soundEffect from "../assets/audio/softwave.mp3";
import Logo from "../assets/images/logoblack.png";

//effect and packages
import { useState, useEffect, createContext, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import DataContext from "../context/DataContexts";
import { Link } from "react-router-dom";

export const LayoutContext = createContext();

const Layout = () => {
  const {
    isLoading,
    questions,
    error,
    editQuestion,
    editAnswer,
    answers,
    setAnswers,setIsDrag, isDrag,
    
  } = useContext(DataContext);

  //state management


  // const [activeAnswerJson, setActiveAnswerJson] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [suggestedOption, setSuggestedOption] = useState([]);
  const [clickedValue, setClickedValue] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState();
  const [questionId, setQuestionId] = useState("");
  const [graphicTitle, setGraphicTitle] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [daysRemaining, setDaysRemaining] = useState("");

  const [isAnswered, setIsAnswered] = useState(null);
  const [minAnswer, setMinAnswer] = useState([]);
  const [maxAnswer, setMaxAnswer] = useState(null);
  const [noResultsMessage, setNoResultsMessage] = useState("");

  //sound when a suggestion is clicked
  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };
 
  //vibration handler
  const handleVibration = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(100); 
    }
  };

  function initializeQuestionState(questions) {
    const storedQuestionIndex = localStorage.getItem("selectedQuestionIndex");
    if (questions.length > 0) {
      const initialQuestion = questions[storedQuestionIndex];
      // setActiveAnswerJson(initialQuestion?.answersJson);
      setSelectedOption(initialQuestion?.answersJson[0]);
      setSuggestedOption(initialQuestion?.answersJson);
      setQuestionId(initialQuestion?.id);
      setGraphicTitle(initialQuestion?.graphicTitle);
      setQuestionName(initialQuestion?.text);
      setIsAnswered(initialQuestion?.userSubmission);
      setMinAnswer(initialQuestion?.minAnswerCount);
      setMaxAnswer(initialQuestion?.maxAnswerCount);
      setDaysRemaining(initialQuestion?.daysToRemainOpen);
    }
  }

  useEffect(() => {
    initializeQuestionState(questions);
  }, [questions]);

  //answer removal
  const handleRemoveAnswer = (index) => {
    handleDismiss(index);

    
    const updated = [...answers];
    updated.splice(index, 1);
    setAnswers(updated);
    handleVibration();
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; 
    }

    const reorderedAnswers = Array.from(answers);
    const [movedAnswer] = reorderedAnswers.splice(result.source.index, 1);
    reorderedAnswers.splice(result.destination.index, 0, movedAnswer);

    setAnswers(reorderedAnswers);
    setIsDrag(!isDrag)

    
   
  };

  //manage when a suggestion is clicked
  const handleClick = (option) => {
      
    if (!answers.includes(option) && answers.length < maxAnswer) {
      setAnswers((prevItems) => [...prevItems, option]);
     
      playSoundEffect();
      handleVibration();
    }
  };

  //manage the swiping card of question container
  const handleSwipe = useCallback((activeQuestion) => {
    if (activeQuestion) {
      // setActiveAnswerJson(activeQuestion?.answersJson);
      setSelectedOption(activeQuestion?.answersJson[0]);
      setSuggestedOption(activeQuestion?.answersJson);
      setQuestionId(activeQuestion?.id);
      setGraphicTitle(activeQuestion?.graphicTitle);
      setQuestionName(activeQuestion?.text);
      setIsAnswered(activeQuestion?.userSubmission);
      setMinAnswer(activeQuestion?.minAnswerCount);
      setMaxAnswer(activeQuestion?.maxAnswerCount);
      setDaysRemaining(activeQuestion?.daysToRemainOpen);

     
    }
  }, []);

   
  useEffect(() => {

   
    if (editQuestion) {
     
    
      setAnswers(answers)
    }

    // setAnswers(answers)
    
   
    // if (editAnswer) {
    //   try {
    //     // const parsedEditAnswer = JSON.parse(editAnswer);
    //     console.log(editAnswer)
    //     // setAnswers(parsedEditAnswer);
    
  }, [editAnswer, editQuestion]);

  const handleFilter = (inputValue) => {
    if (inputValue) {
      const suggestedOptions = [...suggestedOption];
      const options =
        suggestedOptions.filter((word) =>
          word.toLowerCase().includes(inputValue.toLowerCase())
        ) || [];

      if (options.length === 0) {
        setFilteredOptions([]);
        setNoResultsMessage("No matching items found.");
      } else {
        setFilteredOptions(options);
        setNoResultsMessage("");
      }
    } else {
      setFilteredOptions(suggestedOption);
      setNoResultsMessage("");
    }
  };

  //handle when answers is submitted to answeredlist
  const handleSubmission = (selectedOption) => {
    if (
      selectedOption &&
      !answers.some((answer) => answer === selectedOption) &&
      answers.length <= maxAnswer
    ) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedOption]);
    }
  };

  const handleDismiss = (index) => {
    setAnswers((prevAnswers) => prevAnswers.filter((_, i) => i !== index));
  };

  if (error) {
    return (
      <div className="flex justify-center items-center flex-col  mx-auto pt-[100px]  bg-neutral h-screen">
        <div className="animate-bounce animate-infinite flex-col text-center">
          <h1 className="text-[30px]">An error exist ... server or network error</h1>

          <Link to="/" className="text-center">
            <button className="bg-primary text-neutral rounded-[24px] py-[10px] w-[100px] px-[10px] pb-[10px]">
              Refresh
            </button>
          </Link>
        </div>
      </div>
    );
  }

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
    <LayoutContext.Provider
      value={{
        handleSubmission,
        handleRemoveAnswer,
        handleFilter,
        suggestedOption,
        setSuggestedOption,
        clickedValue,
        noResultsMessage,
      }}
    >
      <NavBar />
      <div className="bg-primary w-full">
        <CardSwipeContainer handleSwipe={handleSwipe} />
      </div>
      <Helmet>
        <title>Favlist Homepage</title>
        <meta name="description" content="Description for Home Page" />
      </Helmet>
      {isAnswered ? (
        <AnsweredContainer isAnswered={isAnswered} />
      ) : (
        <div className="pt-[250px] z-10">
          <Searchbox />

          {!noResultsMessage ? (
            <Suggestion
              maxAnswer={maxAnswer}
              suggestedOption={suggestedOption}
              handleClick={handleClick}
              filteredOptions={filteredOptions}
            />
          ) : (
            <p className="bg-neutral text-center text-[16px] p-[20px]">
              {noResultsMessage}
            </p>
          )}
          <AnsweredList
            // answers={answers}
            handleDismiss={handleDismiss}
            questionId={questionId}
            questionName={questionName}
            minAnswer={minAnswer}
            handleDragEnd={handleDragEnd}
            graphicTitle={graphicTitle}
            maxAnswer={maxAnswer}
          />
        </div>
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;
