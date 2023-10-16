import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// import useAxiosFetch from "../hooks/useAxiosFetch";
import useQuestions from "../hooks/useQuestions";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]); // Change 'posts' to 'questions'
  const [search, setSearch] = useState("");
  const [editQuestion, setEditQuestion] = useState(null);
//   const [fetchError, setfetchError] = useState(null);
  const [editAnswer, setEdittAnswer] = useState([]);
//   const [mounted, setMounted] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);

//   const { data, fetchError, isLoading, } = useAxiosFetch(
//     "https://dev.pacerlabs.co/api/v1/questions"
//   );

  const { data, error, isLoading } = useQuestions()

//   console.log(data)

  useEffect(() => {
    // Check if the data has loaded and there is no error before updating state
    if (!isLoading && !error) {
      setQuestions(data.reverse());
    }

   
    // Set 'mounted' to true to indicate that the component has mounted
    // setMounted(true);
  }, [data, error, isLoading]);

//   // Use 'mounted' to ensure that data is only accessed after the component mounts
//   useEffect(() => {
//     if (mounted) {
//       // Access data or trigger any other actions after mounting
//     }
//   }, [mounted]);


  const goBackToEditAnswers = (questionId) => {
    const newquestion = questions.find((q) => q.id === questionId);


    // if (newquestion) {
      setEditQuestion(newquestion);
    // }
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
