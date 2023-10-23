import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import useQuestions from "../hooks/useQuestions";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [editQuestion, setEditQuestion] = useState(null);

  const [editAnswer, setEdittAnswer] = useState([]);
  const [isDrag, setIsDrag] = useState(false);

  const { data, error, isLoading } = useQuestions();

  useEffect(() => {
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
        isLoading,
        questions,
        setQuestions,
        editQuestion,
        setEditQuestion,
        goBackToEditAnswers,
        setEdittAnswer,
        editAnswer,
        isDrag,
        setIsDrag,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContext;
