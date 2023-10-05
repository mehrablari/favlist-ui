//dependent component
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
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Helmet } from "react-helmet-async";

export const LayoutContext = createContext();

const Layout = () => {
  //state management

  const [apiData, setApiData] = useState([]);
  const [activeAnswerJson, setActiveAnswerJson] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [suggestedOption, setSuggestedOption] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [clickedValue, setClickedValue] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState();
  const [questionId, setQuestionId] = useState("");
  const [graphicTitle, setGraphicTitle] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [daysRemaining, setDaysRemaining] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAnswered, setIsAnswered] = useState(null);
  const [minAnswer, setMinAnswer] = useState([]);
  const [maxAnswer, setMaxAnswer] = useState([]);
  // const [updatedAnswers, setUpdatedAnswers] = useState([answers]);

  //sound when a suggestion is clicked
  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };

//vibration handler
  const handleVibration = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(100); // Vibrate for 1000 milliseconds (1 second)
    }
  };

  //answer removal
  const handleRemoveAnswer = (index) => {
    handleDismiss(index);

    // Update the answers state to remove the answer
    const updated = [...answers];
    updated.splice(index, 1);
    setAnswers(updated);
    handleVibration();
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Item was dropped outside a valid droppable area
    }

    const reorderedAnswers = Array.from(answers);
    const [movedAnswer] = reorderedAnswers.splice(result.source.index, 1);
    reorderedAnswers.splice(result.destination.index, 0, movedAnswer);

    setAnswers(reorderedAnswers);
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
  const handleSwipe = (activeQuestion) => {
    setActiveAnswerJson(activeQuestion?.answersJson);
    setSelectedOption(activeQuestion?.answersJson[0]);
    setSuggestedOption(activeQuestion?.answersJson);
    setQuestionId(activeQuestion?.id);
    setGraphicTitle(activeQuestion?.graphicTitle);
    setQuestionName(activeQuestion?.text);
    setIsAnswered(activeQuestion?.userSubmission);
    setMinAnswer(activeQuestion?.minAnswerCount);
    setMaxAnswer(activeQuestion?.maxAnswerCount);
    setDaysRemaining(activeQuestion?.daysToRemainOpen);

    
  

    // console.log("question", activeQuestion);

    const storedAnswers = localStorage.getItem("answers");
    let count = 1;
    if (storedAnswers) {
      if (count === 1) {
        setAnswers(JSON.parse(storedAnswers));
        count++;
      }
      if (count === 2) {
        setTimeout(() => {
          localStorage.removeItem("answers");
          localStorage.removeItem("selectedQuestionIndex");
        }, 4000);
      }
    } else {
      setAnswers([]);
    }
  };

  //handle filtering when user search via searchbar
  const handleFilter = (inputValue) => {
    if (inputValue) {
      const suggestedOptions = [...suggestedOption];
      const options =
        suggestedOptions.filter((word) =>
          word.toLowerCase().includes(inputValue.toLowerCase())
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
      answers.length <= maxAnswer
    ) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedOption]);
    }
  };

  const handleDismiss = (index) => {
    setAnswers((prevAnswers) => prevAnswers.filter((_, i) => i !== index));
  };

  //api for get all questions

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.pacerlabs.co/api/v1/questions",

          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        setIsLoading(false);
        const data = response.data.sort((a, b) => b.id - a.id);
        setApiData(data);
        console.log("question id",response.data[0].id);

        setActiveAnswerJson(data[0]?.answersJson);
        setSelectedOption(data[0]?.answersJson[0]);
        setSuggestedOption(data[0]?.answersJson);
        setClickedValue(data[0]?.answersJson);
        setQuestionId(response.data[0]?.id);
        setDaysRemaining(data[0]?.daysToRemainOpen);
        setIsAnswered(data[0]?.userSubmission);
        setGraphicTitle(data[0]?.graphicTitle);
        setQuestionName(data[0]?.text);
        setMinAnswer(data[0]?.minAnswerCount);
        setMaxAnswer(data[0]?.maxAnswerCount);
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
    <LayoutContext.Provider
      value={{
        apiData,
        handleSwipe,
        minAnswer,
        maxAnswer,
        activeAnswerJson,
        handleSubmission,
        handleRemoveAnswer,
        handleFilter,
        handleDragEnd,
        suggestedOption,
        setSuggestedOption,
        handleClick,
        filteredOptions,
        answers,
        handleDismiss,
        questionId,
        graphicTitle,
        questionName,
        clickedValue,
        setIsAnswered,
        isAnswered,
      }}
    >
      <NavBar />
      <div className="bg-primary w-full">
        <CardSwipeContainer
          apiData={apiData}
          handleSwipe={handleSwipe}
          questionId={questionId}
          daysRemaining={daysRemaining}
        />
      </div>
      <Helmet>
        <title>Favlist Homepage</title>
        <meta name="description" content="Description for Home Page" />
      </Helmet>
      {isAnswered ? (
        <AnsweredContainer isAnswered={isAnswered} />
      ) : (
        <div className="pt-[250px] z-10">
          <Searchbox
          // answerData={apiData}
          // activeAnswerJson={activeAnswerJson}
          // handleSubmission={handleSubmission}
          // handleFilter={handleFilter}
          />
          <Suggestion
           
            maxAnswer={maxAnswer}
            suggestedOption={suggestedOption}
            handleClick={handleClick}
            filteredOptions={filteredOptions}
          />

          <DndProvider backend={HTML5Backend}>
            <AnsweredList
              apiData={apiData}
              // answers={answers}
              // questionData={apiData}
              // handleDismiss={handleDismiss}
              // questionId={questionId}
              // questionName={questionName}
              // clickedValue={clickedValue}
            />
          </DndProvider>
        </div>
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;



//// Save selected question's data in local storage
// localStorage.setItem("selectedQuestionData", JSON.stringify(activeQuestion));


//preview
//const [questionData, setQuestionData] = useState(null);
// useEffect(() => {
//   // Retrieve saved question data from local storage
//   const savedQuestionData = localStorage.getItem("selectedQuestionData");
//   if (savedQuestionData) {
//     setQuestionData(JSON.parse(savedQuestionData));
//   }
// }, []);
