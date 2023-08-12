import { Link } from "react-router-dom";
import ArrowBack from "../../assets/images/back.png";
import filterIcon from "../../assets/images/filter.png";

const CloseQuestionHeader = () => {
  return (
    <div className="flex flex-col pt-[120px] px-[20px] pb-[50px] shadow-lg  h-[116px] bg-neutral w-full justify-center ">
      <Link to="/" className="flex flex-row items-center pt-[20px]">
        <div className="text-[18px] flex flex-row justify-around font-semibold text-primary">
          <img src={ArrowBack} alt="" className="h-[20px] pr-[5px]" />
          <span>Back</span>
        </div>
      </Link>
      
      <div className="flex justify-between flex-row py-[30px]">
        <p className="font-[700] text-[18px] leading-5">Closed questions</p>
        <div className="flex flex-row items-center rounded-sm bg-primary-border mt-[-10px] p-[8px]">
          <img src={filterIcon} alt="" className="h-[22px] pr-[5px]" />
          <Link
            to="/filtercontainer"
            className="text-[16px] font-semibold text-primary"
          >
            Filter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloseQuestionHeader;
