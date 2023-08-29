import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";
import path14 from "../../assets/images/path14.png";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import { useContext, useState, useEffect } from "react";
// import { LayoutContext } from "../Layout";

// export const CardSwipeContainerContext = createContext();

const CardSwipeContainer = ({ apiData, handleSwipe }) => {
  // const { apiData, handleSwipe } = useContext(LayoutContext);

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
    console.log(112,activeIndex)
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

  // function borderColorForId(id) {
  //   // Example logic to generate unique colors based on id
  //   const colors = ["#632A7E", "#F6F6F6", "#F2F2F2", "#BDD0F133"];
  //   const colorIndex = id % colors.length; // Cycle through the colors
  //   return colors[colorIndex];
  // }

  return (
    <div className="">
      <Swiper
        initialSlide={question}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper h-[280px] sm:px-[33px] sm:py-[20px] md:px-[30px] md:py-[30px] flex justify-center sm:w-[310px] md:w-[320px] w-[327px] align-middle pt-[40px] pb-[30px] mx-auto font-sans"
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
      >
        {apiData.map((question, id) => (
          <SwiperSlide
            key={id}
            className={`sm:w-[310px] lg:w-[600px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[10px] p-[20px] m-[3rem] md:my-[3rem] sm:px-[40px] max-w-[380px] h-[270px] drop-shadow-lg border-2 border-primary`}
              // style={{ border: `2px solid ${borderColorForId(id)}` }}
              
          >
           
            <p className="text-gray-dark text-[18px] max-w-[340px] items-center font-baloo2 sm:text-lg md:text-lg leading-2 font-[600]">
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
                <h3 className="text-gray-lighter text-[13px] font-[400] pt-[10px]">
                  affiliate
                </h3>
                <div className="flex justify-center ">
                  <a href={`${question.sponsor.url}`}>
                    <img
                      src={path14}
                      alt="netflix"
                      className="w-[24px] h-[24px]"
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
                    href={`${question.sponsor.adsS3Url}`}
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