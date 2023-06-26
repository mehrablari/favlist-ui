
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import path14 from "../../assets/images/path14.png";



const CardContainer = () => {
  return (
    <main className="bg-primary p-[20px] h-[232px]">
      <div className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[20px] p-[20px] min-w-[271px] drop-shadow-lg mb-[20px]">
        <div className=" flex flex-col">
          <p className="text-[12px] text-gray-light font-[400]">Today's question</p>
          <div className="flex flex-row justify-center p-[12px] align-middle">
            <div >
              <AccessTimeOutlinedIcon style={{ fontSize: '12px', height:'12px' }} className="text-primary-light" />
            </div>
            <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">6d to expiry</h1>
          </div>
        </div>
        <h2 className="text-[18px] font-[700]">Who are your favourite musical artistes right now?</h2>
        
        <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
          
          <h3 className="text-gray-lighter text-[12px] font-[400]">sponsor</h3>
          <div className="flex justify-center ">

            <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
          </div>
          <h3 className="text-gray-light font-[600]">netflix</h3>
        </div>
      </div>
    </main>
  );
};

export default CardContainer;
