/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { useContext, useState } from "react";
import "./tindercards.css";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import DataContext from "../../context/DataContexts";


const openNewTab = (url) => {
  window.open(url, '_blank');
}


const CardSwipeContainer = ({ handleSwipe }) => {
  const { questions } = useContext(DataContext);

  //local storage
  const storedQuestionIndex = localStorage.getItem("selectedQuestionIndex");
  const [question, setQuestion] = useState(storedQuestionIndex);

  const handleSwipeChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    console.log("card params:", swiper);
    localStorage.removeItem(
      "selectedQuestionIndex" in localStorage ? "selectedQuestionIndex" : ""
    );
    localStorage.setItem("selectedQuestionIndex", activeIndex);
  

    setQuestion(questions[activeIndex]);

    handleSwipe(questions[activeIndex]);
  };

  const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      colors.push(randomColor);
    }
    return colors;
  };
  const borderColors = generateRandomColors(questions.length);

  const remaining = (days) => {
    if (days === 0) {
      return "day to expire";
    } else if (days === 1) {
      return "1 day to expire";
    } else if (days >= 2 && days <= 20) {
      return `${days} days to expire`;
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

  const handleOpenNewTab = (url) => {
    openNewTab(url);
  };

 

  return (
    <div className="bg-primary w-full overflow-hidden fixed top-[0] right-[0] left-[0] z-20 ">
      <Swiper
        // slidesPerView={1}
        effect={"cards"}
        grabCursor={true}
        initialSlide={question}
        loop={true}
        modules={[EffectCards]}
        className="myswiper px-[10px] align-middle mx-auto pt-[30px] font-sans sm:px-[20px] flex flex-wrap flex-auto justify-center s:w-[340px] md:w-[350px] w-[360px] max-w-[380px] "
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
      >
        {questions.map((question, id) => (
          <SwiperSlide
            key={id}
            className={`sm:w-[340px] md:w-[350px] mdx:w-[360px] lg:w-[360px] bg-neutral rounded-[30px] mx-auto flex flex-col justify-center text-center mt-[2rem] pb-[10px] max-w-[380px] h-[240px] drop-shadow-lg border-4`}
            style={{ borderColor: borderColors[id] }}
          >
            <p className="text-gray-dark text-[21px] items-center font-baloo2 sm:text-[20px] md:text-[20px] px-[10px] max-w-[360px] sm:w-[300px] md:w-[340px] font-[700] tracking-tighter">
              {question.text}
            </p>
            <div className="flex flex-row justify-center bg-neutral rounded-lg w-[320px] pt-[40px] mx-auto pb-[10px]">
              <p className="text-[13px] text-gray-light font-baloo2 font-[400] pr-[10px]">
                {formatDate(question.dateToPost)}
              </p>
              <div className="flex flex-row justify-center items-center h-[40px] pb-[10px]">
                <img src={Clock} alt="clock" className="w-[15px] h-[15px]" />
                <h1 className="text-[13px] pl-[5px] text-primary-light font-[400] font-baloo2">
                  {remaining(question.daysToRemainOpen + 1)}
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[40px]">
              <h3 className="text-gray-light text-[14px] font-[400]">
                affiliate
              </h3>
              <div className="flex justify-center ">
                <a href={`${question.sponsor.url}`} target="_blank" rel="noreferrer" className="rounded-full">
                  <img
                    src={question.sponsor.logoS3Url}
                    alt="netflix"
                    className="rounded-md h-[30px] w-[40px] "
                  />
                </a>
              </div>
              <div className="flex justify-center">
                <h3 className="text-gray-dark text-[13px] font-[600] pb-[15px] text-center w-[200px]">
                  {question.sponsor.name}
                </h3>
              </div>

              <div className="youtube absolute bottom-md right-[0px] top-[210px] font-baloo2">
                <a href={`${question.sponsor.adsS3Url}`} target="_blank" rel="noreferrer" className="w-[56px]">
                  <img
                    src={youtubeIcon}
                    alt="youtube icon"
                    className="w-[24px] h-[17px] "
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
