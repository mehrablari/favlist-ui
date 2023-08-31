import AnswerProvided from "./AnswerProvided";
import AnsweredResponse from "../../utils/AnsweredResponse";

const AnsweredContainer = ({isAnswered}) => {
  return (
	<div className="pt-[40px] bg-neutral">
		<AnsweredResponse />
		<AnswerProvided answerData={isAnswered} />
	</div>
  )
}

export default AnsweredContainer;