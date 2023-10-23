/* eslint-disable react/prop-types */
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const Settings = ({ minAnswer, maxAnswer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" mx-auto sm:w-[340px]  w-[360px] flex flex-row justify-between">
      <div className="text-grey-text">
        <p className="text-[16px] font-[600]">Your Answers</p>
        <p className="text-[15px] font-[400] leading-3">
          Submit {minAnswer} to {maxAnswer}
        </p>
      </div>
      <div className="text-primary-light cursor-pointer">
        <span
          className="text-primary text-[15px] font-[500] leading-3"
          onClick={handleOpenModal}
        >
          Answer Settings
        </span>
        <SettingsIcon sx={{ color: "#A13E97", height: "18px" }} />
      </div>
    </div>
  );
};

export default Settings;
