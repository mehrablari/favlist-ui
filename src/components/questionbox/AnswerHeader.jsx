/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import Backdrop from "@mui/material/Backdrop";
import Switch from "@mui/material/Switch";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContexts";

const AnswerHeader = ({ handleToggle, minAnswer, maxAnswer }) => {
  const { setIsDrag, isDrag, checked, setChecked } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(event.target.checked);
    handleToggle(!isChecked);
    setIsDrag(!isDrag);
  };
  //mui
  return (
    <div className="bg-neutral flex flex-row justify-between sm:w-[340px] mx-auto w-[360px]">
      <div className="text-grey-text">
        <p className="text-[16px] font-[600]">Your Answers</p>
        <p className="text-[15px] font-[400] leading-3">
          Submit {minAnswer} to {maxAnswer}
        </p>
      </div>
      <div className="text-primary-light cursor-pointer">
        <span
          className="text-primary text-[15px] font-[500] leading-3"
          onClick={handleOpen}
        >
          Answer Settings
        </span>
        <SettingsIcon sx={{ color: "#A13E97", height: "18px" }} />
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
        onClick={handleClose}
      >
        <div className="flex flex-col w-full justify-center fixed rounded-t-[24px] h-[204px] bg-neutral bottom-0 left-0 right-0 ">
          <hr className="mx-auto w-[64px] rounded-[3px] h-[4px] bg-primary-bg" />
          <div className="flex flex-row mx-auto justify-between px-[10px] py-[30px] w-[327px]">
            <h1 className="flex leading-3 text-gray-dark justify-start font-[700] text-[16px]">
              Answer settings
            </h1>
            {/* <Link to="/"  className="cursor-pointer">
              <CancelIcon className="text-gray-dark w-[15px] h-[15px]" />
            </Link> */}
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

            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AnswerHeader;
