import { useContext } from "react";
import Calendar from "../../assets/images/Calendar.png";
import { ClosedQuestionContext } from "./ClosedQuestion";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/images/back.png";
import { Helmet } from 'react-helmet-async';

const QuestionCard = () => {
  const { questions } = useContext(ClosedQuestionContext);
  
  const formatDate = (inputDate) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
    return formattedDate;
  };


  return (
    <div className="bg-neutral pt-[190px] pb-[30px] font-sans">
      <Helmet>
        <title>Closed Question page</title>
        <meta name="description" content="Description for Closed Question"/>
      </Helmet>
      {questions.map((question, index) => (
        <div key={index} className="shadow-sm px-[24px] h-[80px]">
          <Link
            to={`/closedinfo/${question.id}`}
            className="flex flex-row justify-start  py-[10px]"
          >
            <img src={Calendar} alt="" className="h-[20px] pr-[5px]" />
            <p className="text-[14px] leading-4 font-[400] text-gray-dark">
              
              Question on {formatDate(question.dateToPost)}
            </p>
          </Link>

          <Link
            to={`/closedinfo/${question.id}`}
            className="font-[500] text-[16px] flex flex-wrap leading-[20px] cursor-pointer text-gray-dark"
          >
            {question.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
