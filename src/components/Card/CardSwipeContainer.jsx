import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";
import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import { useContext, createContext, useState, useEffect } from "react";
import { LayoutContext } from "../Layout";

// export const CardSwipeContainerContext = createContext();

const CardSwipeContainer = () => {
  const {apiData, handleSwipe} = useContext(LayoutContext)

  // console.log(112,apiData)
    
  const storedQuestionIndex =
    localStorage.getItem("selectedQuestionIndex") || 0;
  const [question, setQuestion] = useState(storedQuestionIndex);

  const handleSwipeChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setQuestion(activeIndex);
    // localStorage.setItem("questionIndex", activeIndex);
    // handleSwipe(questionData[activeIndex]);
    handleSwipe(apiData[activeIndex], activeIndex);
  };

  const remaining = (days) => {
    if (days === 0) {
      return "day to expiry";
    } else if (days === 1) {
      return "1 day to expiry";
    } else if (days >= 2 && days <= 7) {
      return `${days} days to expiry`;
    } else {
      return null
    }
  };
  
  return (
    <div
    >
      <Swiper
        initialSlide={question}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-[280px] sm:px-[35px] md:px-[40px] md:py-[40px] flex justify-center sm:w-[280px] w-[325px] align-middle pt-[40px] pb-[30px] mx-auto"
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
      >
        {apiData.map((question, id) => (
          <SwiperSlide
            key={id}
            className="sm:w-[300px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] p-[20px] m-[3rem] max-w-[380px] h-[240px] drop-shadow-lg"
          >
            <div className="flex flex-col bg-neutral  rounded-lg gap-[5px]">
              <p className="text-[12px] text-gray-light font-[400] ">
                Today's question
              </p>

              <div className="flex flex-row justify-center items-center h-[40px]">
                <img src={Clock} alt="clock" className="w-[16px] h-[16px]" />
                <h1 className="text-[12px] pl-[5px] text-primary-light font-[400]">
                {remaining(question.daysToRemainOpen+1)}
                </h1>
              </div>

              <div className="text-gray-dark w-[287px] sm:text-[12px] md:text-[14px] md:w-[230px] sm:w-[220px] text-[18px] h-[72px]">
                {question.text}
              </div>

              <div className="flex flex-col justify-center m-[3px] w-[42px] h-[56px] mx-auto">
                <h3 className="text-gray-lighter text-[12px] font-[400]">
                  affiliate
                </h3>
                <div className="flex justify-center p-[5px] ">
                  <a href={question.sponsor.url}>
                    <img
                      src={path14}
                      alt="netflix"
                      className="w-[24px] h-[24px]"
                    />
                  </a>
                </div>
                <h3 className="text-gray-dark text-[12px] font-[600] pb-[20px]">
                  {question.sponsor.name}
                </h3>
              </div>
              <div className="absolute bottom-md right-md">
                <a
                  href="https://youtube.com"
                  className="hover:bg-primary-bg bg-grey-text w-[56px]"
                >
                  <img
                    src={youtubeIcon}
                    alt="youtube icon"
                    className="w-[24px] h-[17px]"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwipeContainer;
