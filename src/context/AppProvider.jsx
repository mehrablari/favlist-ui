import { useState, useEffect, createContext } from "react";
import soundEffect from "../assets/audio/softwave.mp3";
import Logo from "../assets/images/logoblack.png";
import axios from "axios";

export const AppProviderContext = createContext(null);

const AppProvider = ({ children }) => {
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

  return (
    <AppProviderContext.Provider
      value={{
        apiData,
        setApiData,
        activeAnswerJson,
        setActiveAnswerJson,
        selectedOption,
        setSelectedOption,
        suggestedOption,
        setSuggestedOption,
        answers,
        setAnswers,
        clickedValue,
        setClickedValue,
        filteredOptions,
        setFilteredOptions,
        questionId,
        setQuestionId,
        graphicTitle,
        setGraphicTitle,
        questionName,
        setQuestionName,
        daysRemaining,
        setDaysRemaining,
        isLoading,
        setIsLoading,
        isAnswered,
        setIsAnswered,
        minAnswer,
        setMinAnswer,
        maxAnswer,
        setMaxAnswer, handleVibration,handleRemoveAnswer, handleDragEnd, handleClick, handleSwipe, handleFilter, handleSubmission, handleDismiss
      }}
    >
      {children}
    </AppProviderContext.Provider>
  );
};

export default AppProvider;
