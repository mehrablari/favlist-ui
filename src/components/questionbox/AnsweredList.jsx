import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const AnsweredList = () => {
  return (
    <div className="flex flex-col p-[20px] bg-neutral">
      <ul className="bg-neutral p-[12px] flex flex-row justify-between ">
        <li className="text-grey-text">Your Answers</li>
        <li>
          <span className="text-primary">Answer settings</span>
          <ArrowCircleRightOutlinedIcon className="text-primary" />
        </li>
      </ul>
      <div className="w-[126px] mx-auto p-[12px] flex flex-col gap-[20px] justify-center">
        <img src="" alt="this a placeholder" className="w-[50px] h-[50px] rounded-[16px]" />
        <h3 className="text-gray-light text-center h-[42px] text-[12px] leading-3">
          Select answers from the bubbles above to fill up your answers
        </h3>
      </div>
    </div>
  );
};

export default AnsweredList;
