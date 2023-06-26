import Switch from "@mui/material/Switch";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";

const Settings = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="flex flex-col bg-neutral rounded-t-[16px] w-full">
      <div className="flex flex-row justify-between p-[10px]">
        <h1 className="flex justify-start font-[700] text-[16px]">
          Answer settings
        </h1>
        <Link to="/" className="cursor-pointer"> 
          <CancelIcon />
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-col p-[10px]">
          <h3 className="font-[600] text-[13px] text-primary-light">
            Ranked answers
          </h3>
          <h2 className="font-[400] text-[13px] ">
            Your answers will be ranked in order of importance
          </h2>
        </div>

        <div className="">
          <Switch {...label} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
