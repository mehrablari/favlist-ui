import AnswerProvided from "../Answered/AnswerProvided";
import AnsweredResponse from "../../utils/AnsweredResponse";

const AnsweredQuestion = ({ answeredData, getAnswers }) => {
	console.log("getanswers", getAnswers);
  return (
    <div>
      <AnsweredResponse />

      <AnswerProvided answerData={answeredData} getAnswers={getAnswers} />
    </div>
  );
};

export default AnsweredQuestion;
