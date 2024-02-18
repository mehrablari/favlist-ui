import { useContext } from "react";
import Calendar from "../../assets/images/Calendar.png";
import { ClosedQuestionContext } from "./ClosedQuestion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavBar from "../NavBar";
import CloseQuestionHeader from "./CloseQuestionHeader";

const QuestionCard = () => {
  const { questions } = useContext(ClosedQuestionContext);

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

  return (
    <>
      <NavBar />
      <CloseQuestionHeader />
      <div className="bg-neutral pt-[190px] pb-[20px] font-sans">
        <Helmet>
          <title>Closed Question page</title>
          <meta name="description" content="Description for Closed Question" />
        </Helmet>
        {questions.map((question, index) => (
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
    </>
  );
};

export default QuestionCard;
