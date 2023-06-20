import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import AnswerContainer from "../components/questionbox/AnswerContainer"

const Suggestion = () => {
  return (
    <main className="bg-neutral p-[12px] flex flex-col justify-center ">
      <div className="flex flex-row justify-between"> 

        <div className="text-grey-text text-[15px] font-[600]">Suggestions</div>
        <Link to="/answers">
          <span className="text-primary hover:bg-sky-500 cursor-pointer text-[12px] font-[500]">
            See all Suggestions
          </span>
          <ArrowCircleRightOutlinedIcon
            sx={{ color: "#FF5252", height: "12px" }}
          />
        </Link>
      </div>
      <AnswerContainer />
    </main>
  );
};

export default Suggestion;
