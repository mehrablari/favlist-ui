
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const CardContainer = () => {
  return (
    <main className="bg-[#3973D4] p-[20px] max-h-[323px]">
      <div className="bg-neutral rounded-[16px] mx-auto flex flex-col text-center p-[30px]">
        <div className=" ">
          <p className="text-[12px] text-gray-light">Today's question</p>
          <div className="flex flex-row justify-center">
            <span >
              <AccessTimeOutlinedIcon className="w-[12px] text-[#3973D4] h-[12px]" />
            </span>
            <h1 className="pl-[10px] text-[12px] text-[#3973D4] h-[12px]">6d to expiry</h1>
          </div>
        </div>
        <div className="w-[287px] h-[72px] text-center flex justify-center align-middle mx-auto">

          <h2 className="text-[18px] ">Who are your favourite musical artistes right now?</h2>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-gray-lighter text-[12px]">sponsor</h3>
          <img src="" alt="netflix" />
          <h3 className="text-gray-light">Netflix</h3>
        </div>
      </div>
    </main>
  );
};

export default CardContainer;
