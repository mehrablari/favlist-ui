/* eslint-disable react/prop-types */
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./style/suggestion.css";
import { Pagination } from "swiper";
import { useState } from "react";
import AnswerModal from "../components/questionbox/AnswerModal";
import Backdrop from "@mui/material/Backdrop";

const Suggestion = ({
  suggestedOption,
  handleClick,
  filteredOptions,
  maxAnswer,
}) => {
  const [openBackdrop, setOpenBackdrop] = useState(false);

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
        <SwiperSlide key={i} className="flex flex-wrap font-baloo2 w-[360px]">
          {items.map((suggestion, index) => {
            return (
              <div
                key={index}
                className="w-1/3 min-h-[40px] mx-auto flex justify-around"
              >
                <div
                  className="bg-gray-four hover:bg-button-inactive focus:outline-none focus:ring-primary-bg bg-opacity-10 py-[10px] px-[2px] mx-[2px] w-full rounded-[16px] h-[34px] flex justify-evenly overflow-hidden "
                  onClick={() => handleClick(suggestion)}
                >
                  <h3 className="text-[15px] text-center font-[500] text-gray-darker text-opacity-90 overflow-hidden whitespace-nowrap w-full leading-4 sm:leading-4 cursor-pointer">
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
    <main className="bg-neutral pt-[10px] font-baloo2 flex flex-col justify-center mx-auto font-sans z-20">
      <div className="flex flex-row justify-between bg-neutral sm:w-[350px] w-[380px] mx-auto">
        <div className="text-grey-text text-[16px] font-[600]">Suggestions</div>
        <div onClick={handleOpenBackdrop}>
          <span className="text-primary cursor-pointer text-[14px] font-[500]">
            See All
          </span>
          <ArrowCircleRightOutlinedIcon
            sx={{ color: "#A13E97", height: "18px" }}
          />
        </div>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: "flex",
            padding: "10px",

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
      <div className="bg-neutral pt-[10px] mx-auto w-[380px] sm:w-[350px]">
        <Swiper
          //  initialSlide={questionId}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{
            "--swiper-pagination-color": "#632A7E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
          }}
          className="mySwiper w-[380px] sm:w-full md:w-full min-h-[100px] bg-neutral pb-[25px] mx-auto"
        >
          {renderSwiperSlides()}
        </Swiper>
      </div>
    </main>
  );
};

export default Suggestion;
