import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import soundEffect from "../assets/audio/software.wav";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";






const Suggestion = ({ suggestedOption, handleClick }) => {
  const [items, addItems] = useState([])

  const location = useLocation();


  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };

  console.log("handleClick",handleClick)
  
 
  const handleItemClick = (item) => {
    addItems([...items]);
    handleClick(item);
    playSoundEffect();
  };


  const renderSwiperSlides = () => {
    const totalItems = suggestedOption.length;
   
    const numSlides = Math.min(Math.ceil(totalItems / 12), 5)
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * 12;
      const endIndex = startIndex + 12;
      const items = suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide key={i} className="flex flex-wrap p-[10px] ">
          {items.map((suggestion, index) => (
            <div key={index} className="w-1/3">
              <div className="bg-gray-lighter bg-opacity-10 p-[10px] w-[96px] rounded-[16px] h-[32px] flex justify-evenly " onClick={() => handleClick(index)} value={items}>
                <h3
                  className="text-[12px] text-center font-[400] text-gray-dark text-opacity-90 overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
                 
                  onClick={() => handleItemClick(suggestion)}
                >
                  {suggestion.length > 12
                    ? `${suggestion.slice(0, 18)}...`
                    : suggestion}
                </h3>
              </div>
            </div>
          ))}
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <main className="bg-neutral p-[12px] flex flex-col justify-center h-[250px] mx-auto ">
      <div className="flex flex-row justify-between bg-neutral w-[327px] mx-auto">
        <div className="text-grey-text text-[15px] font-[600]">Suggestions</div>
        <Link to="/answers" state={suggestedOption}>
          <span className="text-primary hover:bg-sky-500 cursor-pointer text-[12px] font-[500]">
            See all Suggestions
          </span>
          <ArrowCircleRightOutlinedIcon
            sx={{ color: "#A13E97", height: "12px" }}
          />
        </Link>
      </div>
      <div className="bg-neutral mx-auto w-[327px]">
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
            "--swiper-pagination-bullet-horizontal-gap": "5px"
          }}
          className="mySwiper w-[327px] h-[250px] bg-neutral"
        >
          {renderSwiperSlides()}
        </Swiper>
      </div>
    </main>
  );
};

export default Suggestion;

