import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";


import path14 from "../../assets/images/path14.png";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const CardSwipeContainer = ({ questionData, handleSwipe }) => {
 
  
  const handleSwipeChange = swiper =>  (questionData[swiper.activeIndex], handleSwipe(questionData[swiper.activeIndex].answersJson))


  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper h-[280px] flex justify-center w-[327px] align-middle p-[10px]"
      onSlideChange={(swiper) => handleSwipeChange(swiper) }
    >
      {questionData.map((question, id) => (
        <SwiperSlide key={id} className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] p-[20px] m-[3rem] max-w-[350px] h-[240px] drop-shadow-lg">
          <div className="flex flex-col bg-neutral  rounded-lg gap-[5px]">
            <p className="text-[12px] text-gray-light font-[400]">
              Today's question
            </p>
           
            <div className="flex flex-row justify-center p-[8px]  align-middle">
              <div>
                <AccessTimeOutlinedIcon
                  style={{ fontSize: "12px", height: "12px" }}
                  className="text-primary-light"
                />
              </div>
              <h1 className="pl-[5px] text-[12px] text-primary-light font-[400]">
                6d to expiry
              </h1>
            </div>
            <div className="text-gray-dark w-[287px] text-[18px] h-[72px]">{question.text}</div>
           
            <div className="flex flex-col justify-center m-[3px] w-[42px] h-[56px] mx-auto">
              <h3 className="text-gray-lighter text-[12px] font-[400]">
                affiliate
              </h3>
              <div className="flex justify-center p-[5px] ">
                <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
              </div>
              <h3 className="text-gray-dark text-[12px] font-[600] pb-[20px]">
                favlist
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwipeContainer;
