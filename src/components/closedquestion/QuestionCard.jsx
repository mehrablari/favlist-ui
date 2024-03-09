import { useContext, useState, useEffect } from "react";
import Calendar from "../../assets/images/Calendar.png";
import { ClosedQuestionContext } from "./ClosedQuestion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavBar from "../NavBar";
import CloseQuestionHeader from "./CloseQuestionHeader";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const QuestionCard = () => {
  const { questions } = useContext(ClosedQuestionContext);
  const [page, setPage] = useState(1)

  const [questionPaginations, setQuestionPaginations] = useState(questions)
  const [paginatedQuestions, setPaginated] = useState(questionPaginations.slice(0,10))

  const formatDate = (inputDate) => {
    const options = {
      // weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const handlePagination = (event, value) => {
    setPage(value)
    
    console.log('contextttttttttt', value, questionPaginations)
    let start = (value - 1)*10
    let end = start + 10
    
    setPaginated(questionPaginations.slice(start , end))
  }


  return (
    <>
      <NavBar />
      <CloseQuestionHeader />
      <div className="bg-neutral pt-[190px] pb-[20px] font-sans">
        <Helmet>
          <title>Closed Question page</title>
          <meta name="description" content="Description for Closed Question" />
        </Helmet>
        {paginatedQuestions.map((question, index) => (
          <div key={index} className="shadow-sm px-[24px] min-h-[50px] pb-[10px]">
            <Link
              to={`/closedinfo/${question.id}`}
              className="flex flex-row justify-start  py-[10px]"
            >
              <img src={Calendar} alt="" className="h-[18px] pr-[5px]" />
              <p className="text-[13px] leading-4 font-[400] text-gray-dark">
                {formatDate(question.dateToPost)}
              </p>
            </Link>

            <Link
              to={`/closedinfo/${question.id}`}
              className="font-[600] text-[16px] flex flex-wrap leading-[20px] cursor-pointer text-gray-dark"
            >
              {question.text}
            </Link>
          </div>
        ))}
      </div>
      <div className="pl-[35px] h-[75px]">
        <Stack spacing={2}> 
        <Pagination count={10} page={page} onChange={handlePagination} />
        </Stack>
      </div>
      
    </>
  );
};

export default QuestionCard;
