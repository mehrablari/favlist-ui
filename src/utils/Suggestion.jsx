import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./style/suggestion.css";
import { Pagination } from "swiper";

import { useState } from "react";

import AnswerModal from "../components/questionbox/AnswerModal";
import Backdrop from "@mui/material/Backdrop";



const Suggestion = ({ suggestedOption, handleClick, filteredOptions, maxAnswer }) => {
  
  const [openBackdrop, setOpenBackdrop] = useState(false);

  // Step 3: Define functions to open and close the backdrop
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const renderSwiperSlides = () => {
    const totalItems =
      filteredOptions && filteredOptions.length > 0
        ? filteredOptions.length
        : suggestedOption && suggestedOption.length
        ? suggestedOption.length
        : 0;

    const numSlides = Math.min(Math.ceil(totalItems / 12), 5);
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * 12;
      const endIndex = startIndex + 12;

      const items =
        filteredOptions && filteredOptions.length > 0
          ? filteredOptions.slice(startIndex, endIndex)
          : suggestedOption && suggestedOption.length
          ? suggestedOption.slice(startIndex, endIndex)
          : [];

      slides.push(
        <SwiperSlide key={i} className="suggestion flex flex-wrap font-baloo2 w-[360px]">
          {items.map((suggestion, index) => {
            const itemIndex = startIndex + index; // Calculate the correct index value

            return (
              <div key={index} className="w-1/3 min-h-[50px] mx-auto flex justify-around">
                <div
                  className="bg-gray-bg hover:bg-button-inactive focus:outline-none focus:ring-primary-bg bg-opacity-10 py-[10px] px-[10px] mx-[4px] w-full rounded-[16px] h-[32px] flex justify-evenly overflow-hidden "
                  onClick={() => handleClick(suggestion)}
                >
                  <h3 className="text-[14px] text-center font-[400] text-gray-dark text-opacity-90 overflow-hidden whitespace-nowrap leading-4 sm:leading-4 cursor-pointer">
                    {suggestion.length > 14
                      ? `${suggestion.slice(0, 18)}...`
                      : suggestion}
                  </h3>
                </div>
              </div>
            );
          })}
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <main className="bg-neutral py-[10px] font-baloo2 flex flex-col justify-center mx-auto font-sans">
      <div className="flex flex-row justify-between bg-neutral sm:w-[340px] w-[360px] mx-auto">
        <div className="text-grey-text text-[16px] font-[600]">Suggestions</div>
        <div onClick={handleOpenBackdrop}>
          <span className="text-primary cursor-pointer text-[14px] font-[500]">
            See all Suggestions
          </span>
          <ArrowCircleRightOutlinedIcon
            sx={{ color: "#A13E97", height: "12px" }}
          />
        </div>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: "flex",
            padding:"10px",
            
            flexDirection: "column",
            
           
          }}
          open={openBackdrop}
          
        >
          {openBackdrop && (
            <AnswerModal
              suggestedOption={suggestedOption}
              maxAnswer={maxAnswer}
              closeBackdrop={handleCloseBackdrop}
              handleClick={handleClick}

            />
          )}
        </Backdrop>
      </div>
      <div className="bg-neutral mx-auto w-[360px] sm:w-[340px]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{
            "--swiper-pagination-color": "#632A7E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bullet": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
          className="mySwiper w-[360px] sm:w-full md:w-full min-h-[100px] bg-neutral py-[10px] mx-auto"
        >
          {renderSwiperSlides()}
        </Swiper>
      </div>
    </main>
  );
};

export default Suggestion;
