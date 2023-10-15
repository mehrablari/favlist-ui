import AnswerProvided from "./AnswerProvided";
import AnsweredResponse from "../../utils/AnsweredResponse";

const AnsweredContainer = ({isAnswered}) => {
	console.log(isAnswered)
  return (
	<div className="pt-[320px] bg-neutral">
		<AnsweredResponse />
		<AnswerProvided answerData={isAnswered} />
	</div>
  )
}

export default AnsweredContainer;