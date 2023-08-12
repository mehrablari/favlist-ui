import soundEffect from "../../assets/audio/software.wav";
import CancelIcon from "@mui/icons-material/Cancel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import cancelIcon from "../../assets/images/cancelicon.png"

SwiperCore.use([Pagination]);

const AnswerModal = ({ suggestedOption, closeBackdrop, handleClick }) => {
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
    // Sound when a suggestion is clicked
    const audio = new Audio(soundEffect);
    audio.play();

    handleClick(answer);
    console.log('click me');

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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const totalSlides = Math.ceil(filteredOption.length / 20);

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
        <SwiperSlide key={i} className="w-[327px] sm:w-[300px] sm:h-[32vh] h-[40vh] pb-[10px] md:h-[36vh] font-baloo2">
          <div className="flex flex-wrap py-[15px] overflow-hidden">
            {items.map((answer, index) => (
              <div key={index} className="w-1/2">
                <div className="bg-gray-lighter bg-opacity-10 p-[10px] sm:p-[5px] rounded-[16px] m-[4px] sm:m-[6px]">
                  <h3
                    className="text-[12px] text-center text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 sm:leading-4 cursor-pointer sm:text-[12px]"
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
    <div className="flex flex-col bg-neutral h-screen p-[10px] w-[100vh] pb-[20px] sm:pt-[5px]">
      <div className="flex flex-row justify-between pb-[10px] text-gray-dark w-[327px] sm:w-[280px] sm:pb-[5px] mx-auto font-sans pt-[20px] sm:pt-[20px] ">
        <h2 className="sm:text-[14px]">Suggestions</h2>
        <img src={cancelIcon} alt="cancel" onClick={closeBackdrop} className="cursor-pointer sm:w-[15px] sm:h-[15px]"/>
        
      </div>
      <h2 className="font-[400] sm-w-[300px] flex flex-wrap text-[13px] sm:text-[11px] sm:pb-[5px] pb-[10px] text-gray-lighter mx-auto w-[327px]">
        Select from this pool of suggestions to answer the question.
      </h2>
      <Swiper
        slidesPerView={1}
        slidesPerColumn={1}
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
        className="mySwiper h-screen sm:px-[10px] md:px-[10px] sm:py-[10px] sm:pt-[85px] pt-[20px] md:pt-[70px]  flex justify-center sm:w-[280px] w-[325px] align-middle mx-auto"
      >
        {renderSwiperSlides()}
      </Swiper>
      <div className="flex flex-col justify-center mx-auto bg-neutral w-full pt-[20px] pb-[20px] md:pb-[5px] sm:pt-[5px] sm:h-[20vh] md:h-[35vh] ">
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center sm:pt-[10px] justify-center align-middle">
          {inputValue.length === 0 && (
            <span className="absolute left-[10px] top-[2.5px] h-full flex items-center">
              <SearchIcon className="h-[15px] w-[15px] text-gray-lighter" aria-hidden="true" />
            </span>
          )}
          <div className="flex-grow">
            <input
              onChange={handleInputChange}
              disabled={selectedOption && selectedOption.length >= 5}
              type="search"
              placeholder="Start typing an answer..."
              className="placeholder:w-[180px] sm:placeholder:w-[120px] sm:placeholder:text-[10px] placeholder:text-[13px] placeholder:h-[16px] sm:placeholder:pl-[20px] placeholder:pl-[30px] placeholder:pt-[20px] border-2 border-primary p-[12px] text-sm outline-none sm:w-[280px] w-[327px] rounded-[12px] h-[44px] text-gray-dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
