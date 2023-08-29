import AnsweredList from "./questionbox/AnsweredList";
import Searchbox from "../utils/Searchbox";
// import { useParams } from "react-router-dom";
import Suggestion from "../utils/Suggestion";
import CardSwipeContainer from "./Card/CardSwipeContainer";
import NavBar from "./NavBar";
import soundEffect from "../assets/audio/softwave.mp3";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Logo from "../assets/images/logoblack.png";
import Answered from "./Answered/Answered";
import { Helmet } from "react-helmet-async";
// import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const [questionName, setQuestionName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [isAnswered, setIsAnswered] = useState(false);
  const [minAnswer, setMinAnswer] = useState([]);
  const [maxAnswer, setMaxAnswer] = useState([]);

  const [updatedAnswers, setUpdatedAnswers] = useState([answers]);

  // const { id } = useParams();
  //check if user already answered
  // const [userAnswered, setUserAnswered] = useState(false);

  //sound when a suggestion is clicked
  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };

  const handleVibration = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(1000); // Vibrate for 1000 milliseconds (1 second)
    }
  };
 

  const handleRemoveAnswer = (index) => {
    handleDismiss(index);

    // Update the answers state to remove the answer
    const updated = [...answers];
    updated.splice(index, 1);
    setAnswers(updated);
    handleVibration()
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
      handleVibration()
    }
  };



  //manage the swiping card of question container
  const handleSwipe = (activeQuestion) => {
    setActiveAnswerJson(activeQuestion?.answersJson);
    setSelectedOption(activeQuestion?.answersJson[0]);
    setSuggestedOption(activeQuestion?.answersJson);
    setQuestionId(activeQuestion?.id);
    setQuestionName(activeQuestion?.graphicTitle);
    setMinAnswer(activeQuestion?.minAnswerCount);
    setMaxAnswer(activeQuestion?.maxAnswerCount);

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
        setApiData(response.data);

        setActiveAnswerJson(response.data[0]?.answersJson);
        setSelectedOption(response.data[0]?.answersJson[0]);
        setSuggestedOption(response.data[0]?.answersJson);
        setClickedValue(response.data[0]?.answersJson);
        setQuestionId(response.data[0]?.id);
        setQuestionName(response.data[0]?.graphicTitle);
        setMinAnswer(response.data[0]?.minAnswerCount);
        setMaxAnswer(response.data[0]?.maxAnswerCount);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center w-full align-middle mx-auto pt-[300px]  bg-neutral h-screen">
        <img src={Logo} alt="loading logo" className=" h-[70px]  w-[200px]" />
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
        questionName,
        clickedValue,
        setIsAnswered,
        isAnswered,
      }}
    >
      <NavBar />

      <CardSwipeContainer
      apiData={apiData}
      handleSwipe={handleSwipe}
      // onSwipe={handleSwiperClear}
      // selectedCardIndex={selectedCardIndex}
      />
      <Helmet>
        <title>Favlist Homepage</title>
        <meta name="description" content="Description for Home Page" />
      </Helmet>
      {isAnswered ? (
        <Answered />
      ) : (
        <>
          <Searchbox
          // answerData={apiData}
          // activeAnswerJson={activeAnswerJson}
          // handleSubmission={handleSubmission}
          // handleFilter={handleFilter}
          />
          <Suggestion
            className="bg-neutral"
            // suggestedOption={suggestedOption}
            // setSuggestedOption={setSuggestedOption}
            // handleAnswers={handleSubmission}
            // handleClick={handleClick}
            // filteredOptions={filteredOptions}
            // answers={answers}
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
        </>
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;
