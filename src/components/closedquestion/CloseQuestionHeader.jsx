import { Link } from "react-router-dom";
import ArrowBack from "../../assets/images/back.png";
import filterIcon from "../../assets/images/filter.png";

const CloseQuestionHeader = () => {
  return (
    <div className="shadow-sm fixed flex flex-col pt-[130px] px-[20px] pb-[30px] h-[100px] w-full justify-center bg-neutral ">
      <Link to="/" className="flex flex-row items-center bg-neutral ">
        <div className="text-[18px]  flex flex-row justify-around font-semibold text-primary">
          <img src={ArrowBack} alt="" className="h-[22px] pr-[5px]" />
          <h2 className="">Back</h2>
        </div>
      </Link>
      
      <div className="flex justify-between flex-row py-[30px] bg-neutral">
        <p className="font-[700] text-[18px] leading-5">Closed questions</p>
        <Link to="/filtercontainer" className="flex flex-row items-center rounded-sm bg-primary-border mt-[-13px] p-[6px] cursor-pointer">
          <img src={filterIcon} alt="" className="h-[22px] pr-[5px]" />
          <p
           
            className="text-[16px] font-semibold text-primary"
          >
            Filter
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CloseQuestionHeader;
