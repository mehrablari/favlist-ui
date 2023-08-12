import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { LayoutContext } from "../components/Layout";
import { useContext, useState } from "react";
import Answers from "../components/questionbox/Answers";
import AnswerModal from "../components/questionbox/AnswerModal";
import Backdrop from "@mui/material/Backdrop";
import CancelIcon from "@mui/icons-material/Cancel";


const Suggestion = () => {
  
  const [openBackdrop, setOpenBackdrop] = useState(false);

  // Step 3: Define functions to open and close the backdrop
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const { suggestedOption, handleClick, filteredOptions } =
    useContext(LayoutContext);


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
        <SwiperSlide key={i} className="flex flex-wrap p-[10px] font-baloo2 ">
          {items.map((suggestion, index) => {
            const itemIndex = startIndex + index; // Calculate the correct index value

            return (
              <div key={index} className="w-1/3">
                <div
                  className="bg-gray-lighter bg-opacity-10 p-[10px] w-[95px] sm:w-[90px]  rounded-[16px] h-[32px] flex justify-evenly overflow-hidden "
                  onClick={() => handleClick(suggestion)}
                >
                  <h3 className="text-[12px] text-center font-[400] text-gray-dark text-opacity-90 overflow-hidden whitespace-nowrap leading-3 cursor-pointer">
                    {suggestion.length > 12
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
    <main className="bg-neutral p-[10px] font-baloo2 flex flex-col justify-center h-[260px] mx-auto font-sans">
      <div className="flex flex-row justify-between bg-neutral sm:w-[300px] w-[327px] mx-auto">
        <div className="text-grey-text text-[15px] font-[600]">Suggestions</div>
        <div onClick={handleOpenBackdrop}>
          <span className="text-primary hover:bg-sky-500 cursor-pointer text-[12px] font-[500]">
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
            padding:"20px",
            
            flexDirection: "column",
            
           
          }}
          open={openBackdrop}
          
        >
          {openBackdrop && (
            <AnswerModal
              suggestedOption={suggestedOption}
              closeBackdrop={handleCloseBackdrop}
              handleClick={handleClick}

            />
          )}
        </Backdrop>
      </div>
      <div className="bg-neutral mx-auto w-[327px] sm:[300px]">
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
          className="mySwiper w-[327px] h-[240px] bg-neutral py-[10px]"
        >
          {renderSwiperSlides()}
        </Swiper>
      </div>
    </main>
  );
};

export default Suggestion;
