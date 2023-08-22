import soundEffect from "../../assets/audio/software.wav";
import { Link, useLocation } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useState, useEffect, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

SwiperCore.use([Pagination]);

const Answers = () => {
  // State to store the selected answers
  const [answeredList, setAnsweredList] = useState([]);
  const [answerSet, setAnswerSet] = useState(new Set());

  //searchbox state
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLength, setInputLength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]); // Local state for filtered suggestions

  const location = useLocation();

  const suggestedOption = useMemo(
    () => location.state?.suggestedOption || [],
    [location.state?.suggestedOption]
  );

  useEffect(() => {
    // Initialize filteredOptions with suggestedOption when the component mounts
    setFilteredOptions(suggestedOption);
  }, [suggestedOption]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputLength(inputValue.length);
    setInputValue(inputValue);

    // Filter the suggestions based on the user's input
    const filteredResults = suggestedOption.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredResults);

    if (inputValue.length > 5) {
      setSelectedOption(null);
    }
  };


  const handleAnswerClick = (answer) => {
    // Sound when a suggestion is clicked
    const audio = new Audio(soundEffect);
    audio.play();
    console.log("22333");
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


  };

  const totalSlides = Math.ceil(filteredOptions.length / 20);

  const renderSwiperSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * 20;
      const endIndex = startIndex + 20;
      const items =
        filteredOptions.length > 0
          ? filteredOptions.slice(startIndex, endIndex)
          : suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide key={i}>
          <div className="flex flex-wrap">
            {items.map((answer, index) => (
              <div key={index} className="w-1/2">
                <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[14px]">
                  <h3
                    className="text-[12px] text-center text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
                    onClick={() => handleAnswerClick(answer)}
                
                  >
                    {answer.length > 12 ? `${answer.slice(0, 20)}...` : answer}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {i < totalSlides - 1 && (
            <hr className="mx-auto w-[10px] h-[5px] text-gray-dark" />
          )}
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className="flex flex-col bg-neutral p-[10px]">
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
        className="mySwiper h-full sm:px-[10px] md:px-[10px] md:py-[20px] flex justify-center sm:w-[280px] w-[325px] align-middle pt-[20px] pb-[30px] mx-auto"
      >
        {renderSwiperSlides()}
      </Swiper>
      <div className="flex flex-col justify-center mx-auto bg-neutral w-full h-full pt-[50px] pb-[20px] ">
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center justify-center align-middle">
          {inputValue.length === 0 && (
            <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
          )}
          <div className="flex-grow">
            <input
              onChange={handleInputChange}
              disabled={selectedOption && selectedOption.length >= 5}
              type="search"
              placeholder="Start typing an answer..."
              className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[10px] border-2 border-primary p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
