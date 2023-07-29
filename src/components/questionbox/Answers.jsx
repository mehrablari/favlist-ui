
import Searchbox from "../../utils/Searchbox";
import soundEffect from "../../assets/audio/software.wav"
import { Link, useLocation } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useEffect, useState, useContext } from "react";
import { LayoutContext } from "../Layout";


SwiperCore.use([Pagination]);

const Answers = () => {

  // State to store the selected answers
  const [answeredList, setAnsweredList] = useState([]);
  const [answerSet, setAnswerSet] = useState(new Set());

  const location = useLocation();
  const suggestedOption = location.state?.suggestedOption || [];
  const filteredOptions = location.state?.filteredOptions || [];
  // const {suggestedOption, filteredOptions} = useContext(LayoutContext);
  // console.log("sugg", suggestedOption,filteredOptions)

  const handleAnswerClick = (answer) => {
    // Sound when a suggestion is clicked
    const audio = new Audio(soundEffect);
    audio.play();

    if (!answerSet.has(answer) && answerSet.size < 5) {
      // Add the new answer to the set
      const newAnswerSet = new Set(answerSet);
      newAnswerSet.add(answer);
      setAnswerSet(newAnswerSet);
    }
    const answeredList = Array.from(answerSet);
    
    setAnsweredList((prevAnsweredList) => [...prevAnsweredList, answer]);
    // Store the updated answeredList in local storage
    localStorage.setItem("answers", JSON.stringify(answeredList));

    // console.log("Clicked answer:", answer);
  };

  

  const totalSlides = Math.ceil(suggestedOption.length / 20);

  const renderSwiperSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * 20;
      const endIndex = startIndex + 20;
      const items = filteredOptions.length > 0
        ? filteredOptions.slice(startIndex, endIndex)
        : suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide key={i}>
          <div className="flex flex-wrap">
            {items.map((answer, index) => (
              <div key={index} className="w-1/2">
                <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
                  <h3
                    className="text-[12px] text-center text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer.length > 8 ? `${answer.slice(0, 20)}...` : answer}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {i < totalSlides - 1 && <hr className="mx-auto w-[10px] h-[5px] text-gray-dark" />}
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className="flex flex-col bg-neutral p-[20px]">
      <div className="flex flex-row justify-between p-[20px]">
        <h2>Suggestions</h2>
        <Link to="/" className="cursor-pointer">
          <CancelIcon />
        </Link>
      </div>
      <h2 className="font-[400] text-[13px] p-[10px] text-gray-lighter">
        Select from this pool of suggestions to answer the question.
      </h2>
      <Swiper
        slidesPerView={1}
        slidesPerColumn={1}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper h-full sm:px-[10px] md:px-[10px] md:py-[20px] flex justify-center sm:w-[280px] w-[325px] align-middle pt-[40px] pb-[30px] mx-auto"
      >
        {renderSwiperSlides()}
      </Swiper>
      {/* Disable the answers after reaching the maximum limit
      <div>
        <Searchbox />
      </div> */}
    </div>
  )
};

export default Answers;
