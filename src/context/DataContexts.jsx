import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import useQuestions from "../hooks/useQuestions";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]); // Change 'posts' to 'questions'
  const [search, setSearch] = useState("");
  const [editQuestion, setEditQuestion] = useState('');
//   const [fetchError, setfetchError] = useState(null);
  const [editAnswer, setEdittAnswer] = useState([]);

  const { data, error, isLoading } = useQuestions()

//   console.log(data)

  useEffect(() => {
    // Check if the data has loaded and there is no error before updating state
    if (!isLoading && !error) {
      setQuestions(data.reverse());
    }

   

  }, [data, error, isLoading]);


  const goBackToEditAnswers = (questionId) => {
    const newquestion = questions.find((q) => q.id === questionId);


    if (newquestion) {
      setEditQuestion(newquestion);
    }
  };



  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        error,
        // fetchError,
        isLoading,
        questions,
        setQuestions,
        editQuestion,
        setEditQuestion,
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
