import PropTypes from "prop-types";
import AnswerProvided from "./AnswerProvided";
import AnsweredResponse from "../../utils/AnsweredResponse";

const AnsweredContainer = ({ isAnswered }) => {

  return (
    <div className="pt-[320px] bg-neutral">
      <AnsweredResponse />
      <AnswerProvided answerData={isAnswered} />
    </div>
  );
};

export default AnsweredContainer;
AnsweredContainer.propTypes = {
  isAnswered: PropTypes.object, 
};