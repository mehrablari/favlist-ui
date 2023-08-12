import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";
import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import { useContext, useState, useEffect } from "react";
import { LayoutContext } from "../Layout";

// export const CardSwipeContainerContext = createContext();

const CardSwipeContainer = () => {
  const { apiData, handleSwipe } = useContext(LayoutContext);

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
      return null;
    }
  };

  const formatDate = (inputDate) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <div className="w-screen">
      <Swiper
        initialSlide={question}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-[280px] sm:px-[63px] sm:py-[20px] md:px-[43px] md:py-[30px] flex justify-center sm:w-[310px] w-[327px] align-middle pt-[40px] pb-[30px] mx-auto font-sans"
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
      >
        {apiData.map((question, id) => (
          <SwiperSlide
            key={id}
            className="sm:w-[300px] lg:w-[600px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[16px] p-[20px] m-[3rem] md:my-[3rem] sm:px-[40px] max-w-[380px] h-[260px] drop-shadow-lg"
          >
            <div className="flex flex-col bg-neutral  rounded-lg gap-[8px] w-[320px]">
              <p className="text-[12px] text-gray-light font-baloo2 font-[400] ">
              {formatDate(question.dateToPost)}
                
              </p>

              <div className="flex flex-row justify-center items-center h-[40px] pb-[10px]">
                <img src={Clock} alt="clock" className="w-[15px] h-[15px]" />
                <h1 className="text-[12px] pl-[5px] text-primary-light font-[400] font-baloo2">
                  {remaining(question.daysToRemainOpen + 1)}
                </h1>
              </div>

              <div className="text-gray-dark pb-[15px] flex max-w-[300px] justify-center items-center text-center align-middle text-[16px] h-[68px] font-baloo2 sm:text-[13px] leading-2 mx-auto md:w-[270px] md:px-[16px] md:text-[13px] sm:w-[240px] sm:px-[20px]" style={{ wordWrap: 'break-word' }}>
                {question.text}
              </div>

              <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
                <h3 className="text-gray-lighter text-[12px] font-[400] pt-[10px]">
                  affiliate
                </h3>
                <div className="flex justify-center ">
                  <a href={`https://${question.sponsor.url}`}>
                    <img
                      src={path14}
                      alt="netflix"
                      className="w-[24px] h-[24px]"
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h3 className="text-gray-dark text-[12px] font-[600] pb-[10px] text-center w-[200px]">
                    {question.sponsor.name}
                  </h3>
                </div>

                <div className="absolute bottom-md right-md font-baloo2">
                  <a
                    href={`https://${question.sponsor.adsS3Url}`}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwipeContainer;
