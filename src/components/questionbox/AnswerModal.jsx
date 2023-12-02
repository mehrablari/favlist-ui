/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import cancelIcon from "../../assets/images/cancelicon.png";
import "./style/answermodal.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import DataContext from "../../context/DataContexts";
 import 'react-toastify/dist/ReactToastify.css';

SwiperCore.use([Pagination]);

const AnswerModal = ({
  suggestedOption,
  closeBackdrop,
  handleClick,
  maxAnswer,
}) => {
  const { answers } = useContext(DataContext);

  console.log(answers.length, answers);

  const handleVibration = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(1000);
    }
  };

  // State to store the selected answers
  // const [answeredList, setAnsweredList] = useState([]);
  // const [answerSet, setAnswerSet] = useState(new Set());

  const [noResultsMessage, setNoResultsMessage] = useState("");

  // Searchbox state
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLength, setInputLength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [filteredOption, setFilteredOptions] = useState([]);

  // console.log(answerSet)

  useEffect(() => {
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
    setNoResultsMessage(
      filteredResults.length === 0 ? "No matching items found." : ""
    );
    setFilteredOptions(filteredResults);

    if (inputValue.length > 5) {
      setSelectedOption(null);
    }
  };

  const handleAnswerClick = (answer) => {
    handleVibration();

    handleClick(answer);

    if (answers.includes(answer)) {
      toast.error(`${answer} is already added.`, {
        position: "top-right",
        autoClose: 1000,
      });
    } else if (answers.length >= maxAnswer) {
      toast.warning(`Maximum answers (${maxAnswer}) reached.`, {
        position: "top-right",
        autoClose: 1000,
      });
    } else {
      // const newAnswerSet = new Set(answerSet);
      // newAnswerSet.add(answer);
      // setAnswerSet(newAnswerSet);

      toast.success(`${answer} has been added.`, {
        position: "top-right",
        autoClose: 1000,
      });
    }

    // const answeredList = Array.from(answerSet);

    // setAnsweredList((prevAnsweredList) => [...prevAnsweredList, answer]);

    localStorage.setItem("answers", JSON.stringify(answers));
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
        <SwiperSlide
          key={i}
          className="answermodal w-[380px] sm:w-[340px] md:w-[360px] pb-[10px] lg:pb-[10px] mdx:pb-[20px] font-baloo2 "
        >
          <div className="flex flex-wrap py-[2px] px-[15px] md:px-[4px] sm:px-[3px] sm:py-[2px] md:py-[4px]">
            {items.map((answer, index) => (
              <div
                key={index}
                className="w-1/2 px-[4px] flex mx-auto md:px-[2px] py-[2px] lg:py-[1px] sm:py-[2px] md:py-[1px] "
              >
                <div
                  className={`bg-gray-four  mx-auto hover:bg-button-inactive focus:outline-none focus:ring-primary-bg bg-opacity-10 px-[4px] py-[1px] rounded-[16px] md:mx-[1px] my-[1px]  sm:my-[0px] sm:px-[2px] w-full md:my-[1px] sm:w-full ${
                    answers.includes(answer) ? "bg-primary " : ""
                  }`}
                >
                  <h3
                    className="text-[17px] h-[19px] sm:h-[18px] md:h-[18px] leading-[20px] text-center text-gray-dark text-opacity-90 font-[500] mx-auto overflow-hidden sm:leading-[20px] md:leading-[20px] w-full mdx:leading-[20px] cursor-pointer sm:text-[16px]"
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer.length > 20 ? `${answer.slice(0, 22)}...` : answer}
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
    <div className="fixed mb-[130px] xl:mb-[0px] rounded-[16px] sm:mb-[270px] mdx:mb-[340px] mdx:rounded-[16px] lg:mb-[640px] md:mb-[300px] flex flex-col h-[420px] lg:h-[380px] md:h-[400px]  mdx:h-[450px] sm:h-[400px] bg-neutral p-[10px] w-[380px] md:w-full sm:w-full mx-auto sm:pt-[20px] md:pt-[20px] mdx:pt-[20px] z-10">
      <div className="flex flex-col pt-[2px]">
        <div className="flex flex-row justify-between overflow-hidden pb-[4px] text-gray-dark w-[360px] sm:w-[340px] sm:pb-[2px] h-[30px] mx-auto font-sans">
          <h2 className="sm:text-[16px]">Suggestions</h2>
          <img
            src={cancelIcon}
            alt="cancel"
            onClick={closeBackdrop}
            className="cursor-pointer sm:w-[15px] sm:h-[15px] w-[20px] h-[20px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle mx-auto bg-neutral w-full pt-[3px] h-[110px] md:h-[40px] pb-[10px] sm:pt-[3px] sm:h-[40px] mdx:h-[30px]">
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center sm:pt-[10px] justify-center align-middle ">
          {inputValue.length === 0 && (
            <span className="absolute right-[4px] top-[3px] sm:top-[5px] h-full flex items-center">
              <SearchIcon
                className="h-[15px] w-[15px] text-gray-lighter"
                aria-hidden="true"
              />
            </span>
          )}
          <div className="flex justify-center flex-col">
            <input
              onChange={handleInputChange}
              disabled={selectedOption && selectedOption.length >= maxAnswer}
              type="search"
              placeholder="Start typing an answer..."
              className="placeholder:w-[170px] sm:placeholder:w-[180px] md:placeholder:w-[150px] sm:placeholder:text-[13px] placeholder:text-[14px] placeholder:h-[20px] sm:placeholder:pl-[20px] placeholder:pl-[10px] md:placeholder:pl-[10px] placeholder:pt-[20px] border-2 border-primary-lighter active:border-type-active p-[10px] text-sm outline-none w-[350px] sm:w-[340px] rounded-[12px] h-[40px] text-gray-dark hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
            />
          </div>
        </div>
      </div>
      {!noResultsMessage ? (
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
            // "--swiper-pagination-bullet": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
          }}
          className="mySwiper h-[670px] md:h-[300px] mdx:h-[400px] pb-[4px] sm:pt-[10px] lg:pt-[5px] xl:pt-[20px] sm:h-[300px] lg:h-[700px] md:pt-[10px] flex justify-center sm:w-full w-[325px] align-middle md:w-full mx-auto mdx:pt-[2px] pt-[10px]"
        >
          {renderSwiperSlides()}
        </Swiper>
      ) : (
        <p className="bg-neutral text-gray-dark text-center text-[16px] p-[20px]">
          {noResultsMessage}
        </p>
      )}
      <ToastContainer />
    </div>
  );
};

export default AnswerModal;
