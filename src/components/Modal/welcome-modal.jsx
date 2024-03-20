// Modal.jsx
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal bg-neutral absolute top-[122px] z-50 h-4/6 p-[20px] m-[8px] border border-solid border-[#afafaf] rounded-sm"> 
        <button onClick={onClose} className="absolute right-[11px]"><CloseIcon /></button>
        <p className="font-semibold text-[17px] mb-[5px]">Welcome to FavList - where your favorites can be shared and counted!</p>
        
        <p className="mb-[5px]">Everyday we ask a fun question </p>
        <p className="mb-[5px]">Everyone can vote once for each question</p>
        <p className="mb-[5px]">Vote by submitting your list of 3,4 or 5 answers</p>
        <p className="mb-[5px]">The app will create your personal list graphic to share with your friends and followers</p>
        <p className="mb-[5px]">After 7 days each question will be closed and global results published </p>
        <p className="mb-[5px]">Explore closed questions to see the aggregated results!</p>
    </div>
  );
};

export default Modal;
