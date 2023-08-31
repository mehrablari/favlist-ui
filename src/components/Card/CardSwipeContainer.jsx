import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import { useState } from "react";


const CardSwipeContainer = ({ apiData, handleSwipe,questionId }) => {
 

  const storedQuestionIndex =
    localStorage.getItem("selectedQuestionIndex") || 0;
  const [question, setQuestion] = useState(storedQuestionIndex);

  const handleSwipeChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setQuestion(activeIndex);
    console.log("index", activeIndex);

    
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
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <div className="bg-primary w-full pb-[30px]">
      <Swiper
        initialSlide={question}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper h-[280px] sm:px-[10px] sm:py-[20px] md:px-[34px] md:py-[30px] flex justify-center sm:w-[220px] md:w-[300px] w-[327px] align-middle pt-[40px] pb-[30px] mx-auto font-sans"
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
      >
        {apiData.map((question, id) => (
          <SwiperSlide
            key={id}
            className={`sm:w-[320px]   lg:w-[340px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[10px] p-[20px] my-[3rem] sm:px-[40px] max-w-[327px] h-[270px] drop-shadow-lg border-2 border-primary overflow-hidden`}
              // style={{ border: `2px solid ${borderColorForId(id)}` }}
              
          >
           
            <p className="text-gray-dark text-lg items-center font-baloo2 sm:text-[16px] md:text-[16px] px-[20px] py-[5px] max-w-[340px] sm:w-[230px] md:leading-2 sm:leading-4 leading-2 font-[700] sm:font-[600] tracking-tighter">
              {question.text}
            </p>
            <div className="flex flex-col bg-neutral  rounded-lg gap-[8px] w-[320px]">
              <p className="text-[13px] text-gray-light font-baloo2 font-[400] ">
                {formatDate(question.dateToPost)}
              </p>

              <div className="flex flex-row justify-center items-center h-[40px] pb-[10px]">
                <img src={Clock} alt="clock" className="w-[15px] h-[15px]" />
                <h1 className="text-[13px] pl-[5px] text-primary-light font-[400] font-baloo2">
                  {remaining(question.daysToRemainOpen + 1)}
                </h1>
              </div>

              <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
                <h3 className="text-gray-light text-[13px] font-[400]">
                  affiliate
                </h3>
                <div className="flex justify-center ">
                  <a href={`${question.sponsor.url}`} className="rounded-full">
                     <img
                      src={question.sponsor.logoS3Url}
                      alt="netflix"
                      className="rounded-md h-[30px] w-[40px] "
                    />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h3 className="text-gray-dark text-[13px] font-[600] pb-[10px] text-center w-[200px]">
                    {question.sponsor.name}
                  </h3>
                </div>

                <div className="absolute bottom-md right-md font-baloo2 border-2 bg-primary" style={{backgroundColor:"#A13E97"}}>
                  <a
                    href={`${question.sponsor.adsS3Url
                    }`}
                    className="w-[56px]"
                  >
                    <img
                      src={youtubeIcon}
                      alt="youtube icon"
                      className="w-[24px] h-[17px] "
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