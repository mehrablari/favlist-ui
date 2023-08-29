import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import Backdrop from "@mui/material/Backdrop";
import Switch from "@mui/material/Switch";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

const AnswerHeader = ({ handleToggle, minAnswer, maxAnswer }) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);

  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    handleToggle(isChecked);
  };
  //mui
  return (
    <div className="bg-neutral pt-[10px] flex flex-row justify-between sm:w-[300px] mx-auto w-[327px]">
      <div className="text-grey-text">
        <p className="text-[16px] font-[600]">Your Answers</p>
        <p className="text-[12px] font-[400]">
          Minimum {minAnswer}, maximum {maxAnswer} answers
        </p>
      </div>
      <div className="text-primary-light cursor-pointer">
        <span
          className="text-primary text-[13px] font-[500]"
          onClick={handleOpen}
        >
          Answer settings
        </span>
        <SettingsIcon sx={{ color: "#A13E97", height: "12px" }} />
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        open={open}
      >
        <div className="flex flex-col w-full justify-center fixed rounded-t-[24px] h-[204px] bg-neutral bottom-0 left-0 right-0 ">
          <hr className="mx-auto w-[64px] rounded-[3px] h-[4px] bg-primary-bg" />
          <div className="flex flex-row mx-auto justify-between px-[10px] py-[30px] w-[327px]">
            <h1 className="flex leading-3 text-gray-dark justify-start font-[700] text-[16px]">
              Answer settings
            </h1>
            <Link to="/" onClick={handleClose} className="cursor-pointer">
              <CancelIcon className="text-gray-dark w-[15px] h-[15px]" />
            </Link>
          </div>
          <div className="flex flex-row w-[327px] sm:w-[300px] mx-auto justify-center">
            <div className="flex flex-col p-[10px]">
              <h3 className="font-[600] text-[13px] text-gray-dark leading-4">
                Ranked answers
              </h3>
              <h2 className="font-[400] text-[13px] text-gray-light ">
                Your answers will be ranked in order of importance
              </h2>
            </div>

            <div className="">
              <Switch checked={checked} onClick={handleChange} {...label}/>
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AnswerHeader;
