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
import { useState, useEffect, createContext, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import DataContext from "../context/DataContexts";
import NoDataComponent from "./Error/NoDataComponent";
import Modal from "./Modal/welcome-modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Layout.css'
export const LayoutContext = createContext();

const Layout = () => {
  const {
    questions,
    error,
    editQuestion,
    editAnswer,
    answers,
    setAnswers,
    // setIsDrag,
    // isDrag,
  } = useContext(DataContext);


  const {state} = useLocation()
  const navigate = useNavigate()
  // console.log(questions)

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
  const [sponsor, setSponsor] = useState(null)

  const [isAnswered, setIsAnswered] = useState(null);
  const [minAnswer, setMinAnswer] = useState([]);
  const [maxAnswer, setMaxAnswer] = useState(null);
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const [isOpen, setIsOpen] = useState(true); // Initially open the modal
  const handleClose = () => setIsOpen(false);


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
    const storedQuestionIndex = localStorage.getItem("selectedQuestionIndex") ?? 0;
    if (questions.length > 0) {
      const initialQuestion = questions[storedQuestionIndex];

      // setActiveAnswerJson(initialQuestion?.answersJson);
      setSelectedOption(initialQuestion?.answersJson[0]);
      setSuggestedOption(initialQuestion?.answersJson.slice(0,200));
      setQuestionId(initialQuestion?.id);
      setGraphicTitle(initialQuestion?.graphicTitle);
      setQuestionName(initialQuestion?.text);
      setIsAnswered(initialQuestion?.userSubmission);
      setMinAnswer(initialQuestion?.minAnswerCount);
      setMaxAnswer(initialQuestion?.maxAnswerCount);
      setDaysRemaining(initialQuestion?.daysToRemainOpen);
      setSponsor(initialQuestion?.sponsor);
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
    // setIsDrag(!isDrag);
  };

  //manage when a suggestion is clicked
  const handleClick = (option) => {
    // console.log(option)
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
      //setFilteredOptions([]);
      handleFilter("")
      //clearSearch();
      // setClearInput(true)
    }
  }, []);

  useEffect(() => {
    if (editQuestion) {
      setAnswers(answers);
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
      <NoDataComponent
        message="An error exist ... server or network error"
        buttonText="Refresh"
      />
    );
  }

  if (questions.length === 0) {
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

  // if (questions.length === 0) {
  //   return (
  //     <NoDataComponent message="No questions available" buttonText="Refresh" />
  //   );
  // }

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
      <div className="bg-primary w-full h-[270px] pt-[100px] px-[20px]">
        {/* <CardSwipeContainer handleSwipe={handleSwipe} /> */}
        <div className="active-question-text max-[20px]">
          <p>{(questionName ? `${questionName}` : '')}</p>
        </div>
        
        <div className="active-question-sponser w-[56px]">
        {
          sponsor &&
          <a target="_blank" href={sponsor.adsS3Url}>
            <img src={sponsor.logoS3Url}/>
          </a>
        }
        </div>
      </div>
      <Helmet>
        <title>Favlist Homepage</title>
        <meta name="description" content="Description for Home Page" />
      </Helmet>
      <Modal isOpen={isOpen} onClose={handleClose} />
      {isAnswered ? (
        <AnsweredContainer isAnswered={isAnswered} />
      ) : (
        <div className=" z-10">
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
