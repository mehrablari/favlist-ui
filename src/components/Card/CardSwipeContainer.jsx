import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";

import path14 from "../../assets/images/path14.png";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const CardSwipeContainer = ({ questionData, handleSwipe }) => {
 
  console.log("questionData",questionData)
  
  const handleSwipeChange = swiper =>  (questionData[swiper.activeIndex], handleSwipe(questionData[swiper.activeIndex].answersJson))


  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper h-[300px] bg-primary flex justify-center align-middle w-[400px] p-[20px]"
      onSlideChange={(swiper) => handleSwipeChange(swiper) }
    >
      {questionData.map((question, id) => (
        <SwiperSlide key={id} className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[20px] p-[10px] m-[3rem] min-w-[271px] drop-shadow-lg mb-[20px]">
          <div className=" p-[10px] flex flex-col w-[311px] h-[211px] bg-neutral  rounded-lg">
            <p className="text-[12px] text-gray-light font-[400]">
              Today's question
            </p>
           
            <div className="flex flex-row justify-center p-[12px] align-middle">
              <div>
                <AccessTimeOutlinedIcon
                  style={{ fontSize: "12px", height: "12px" }}
                  className="text-primary-light"
                />
              </div>
              <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
                6d to expiry
              </h1>
            </div>
            <div className="text-gray-dark">{question.text}</div>
           
            <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
              <h3 className="text-gray-lighter text-[12px] font-[400]">
                sponsor
              </h3>
              <div className="flex justify-center ">
                <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
              </div>
              <h3 className="text-gray-light font-[600] pb-[20px] mx-auto flex justify-center align-middle">
                Favlist
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwipeContainer;
