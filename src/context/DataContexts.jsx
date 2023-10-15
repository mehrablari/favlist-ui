import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]); // Change 'posts' to 'questions'
  const [search, setSearch] = useState("");
  const [editQuestion, setEditQuestion] = useState(null);
  const [editAnswer, setEdittAnswer] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://dev.pacerlabs.co/api/v1/questions"
  );

  useEffect(() => {
    setQuestions(data.reverse());
  }, [data]);


  const goBackToEditAnswers = (questionId) => {
    const newquestion = questions.find((q) => q.id === questionId);


    if (newquestion) {
      setEditQuestion(newquestion);
    }
  };

  // console.log(questions)
  // useEffect(() => {
  //     const filteredResults = questions.filter((question) =>
  //         // ((question.body).toLowerCase()).includes(search.toLowerCase()) ||
  //         // ((question.title).toLowerCase()).includes(search.toLowerCase()));

  //     setSearchResults(filteredResults.reverse());
  // }, [questions, search])

  // searchResults,

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        fetchError,
        isLoading,
        questions,
        setQuestions,
        editQuestion,
        goBackToEditAnswers,
        setEdittAnswer,
        editAnswer

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node, // Validate the 'children' prop
};

export default DataContext;
