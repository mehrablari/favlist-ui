import AnswerProvided from "./AnswerProvided";
import AnsweredResponse from "../../utils/AnsweredResponse";

const AnsweredContainer = ({isAnswered}) => {
  return (
	<div className="pt-[10px] bg-neutral">
		<AnsweredResponse />
		<AnswerProvided answerData={isAnswered} />
	</div>
  )
}

export default AnsweredContainer;