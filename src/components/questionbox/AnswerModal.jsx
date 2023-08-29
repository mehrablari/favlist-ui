
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import cancelIcon from "../../assets/images/cancelicon.png";

SwiperCore.use([Pagination]);

const AnswerModal = ({ suggestedOption, closeBackdrop, handleClick, maxAnswer }) => {

  const handleVibration = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(1000); // Vibrate for 1000 milliseconds (1 second)
    }
  };
 

  // State to store the selected answers
  const [answeredList, setAnsweredList] = useState([]);
  const [answerSet, setAnswerSet] = useState(new Set());
  const [modalOpen, setModalOpen] = useState(true);

  // Searchbox state
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLength, setInputLength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [filteredOption, setFilteredOptions] = useState([]);

  useEffect(() => {
    // Initialize filteredOption with suggestedOption when the component mounts
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
    handleVibration();


    handleClick(answer);


    if (!answerSet.has(answer) && answerSet.size < maxAnswer) {
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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  //const totalSlides = Math.ceil(filteredOption.length / 20);
  const totalSlides = Math.min(Math.ceil(filteredOption.length / 20), 5);

  const renderSwiperSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * 20;
      const endIndex = startIndex + 20;
      const items =
        filteredOption.length > 0
          ? filteredOption.slice(startIndex, endIndex)
          : suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide
          key={i}
          className="w-[327px] sm:w-[300px] sm:h-[32vh] h-[45vh] pb-[10px] md:h-[38vh] font-baloo2"
        >
          <div className="flex flex-wrap py-[15px] px-[2px] md:px-[4px] sm:py-[20px] overflow-hidden">
            {items.map((answer, index) => (
              <div key={index} className="w-1/2">
                <div className="bg-gray-bg hover:bg-button-inactive focus:outline-none focus:ring-primary-bg bg-opacity-10 p-[5px] sm:p-[4px] rounded-[16px] mx-[2px] sm:mx-[8px] md:mx-[3px] my-[5px] sm:my-[8px] md:my-[8px] ">
                  <h3
                    className="text-[14px] md:text-[14px] text-center text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 sm:leading-4 cursor-pointer sm:text-[12px]"
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer.length > 12 ? `${answer.slice(0, 20)}...` : answer}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className="flex flex-col bg-neutral h-screen p-[20px] w-screen pb-[10px] sm:pt-[15px] md:pt-[15px]">
      <div className="flex flex-col pt-[20px]">
        <div className="flex flex-row justify-between pb-[10px] text-gray-dark w-[327px] sm:w-[280px] sm:pb-[5px]h-[80px] mx-auto font-sans">
          <h2 className="sm:text-[14px]">Suggestions</h2>
          <img
            src={cancelIcon}
            alt="cancel"
            onClick={closeBackdrop}
            className="cursor-pointer sm:w-[15px] sm:h-[15px] w-[20px] h-[20px]"
          />
        </div>
        <h2 className="font-[500] flex flex-wrap text-[14px] tracking-tight sm:text-[12px] text-gray-lighter mx-auto text-center sm:w-[327px] md:w-[327px] w-[340px] md:flex justify-center align-middle md:tracking-tighter">
          Select from this pool of suggestions to answer the question.
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        // slidesPerColumn={1}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "#632A7E",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
        className="mySwiper h-[820px] pb-[10px] sm:px-[10px] sm:py-[10px] sm:pt-[100px] xl:pt-[50px]  md:h-[740px] md:pt-[90px] flex justify-center sm:w-[280px] w-[325px] align-middle mx-auto mdx:pt-[70px] lg:pt-[50px] pt-[40px]"
      >
        {renderSwiperSlides()}
      </Swiper>
      <div className="flex flex-col justify-center mx-auto bg-neutral w-full pt-[30px] h-[130px] md:h-[180px] pb-[20px] md:pb-[10px] md:pt-[50px] sm:pt-[5px] sm:h-[20vh] ">
        <div className="w-[327px] sm:w-[300px] mx-auto relative flex items-center sm:pt-[10px] justify-center align-middle ">
          {inputValue.length === 0 && (
            <span className="absolute left-[10px] top-[5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
          )}
          <div className="flex-grow">
            <input
              onChange={handleInputChange}
              disabled={selectedOption && selectedOption.length >= maxAnswer}
              type="search"
              placeholder="Start typing an answer..."
              className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[12px] placeholder:text-[14px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[20px] border-2 border-primary-lighter active:border-type-active p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px] text-gray-dark hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
