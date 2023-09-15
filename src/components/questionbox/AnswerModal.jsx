
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Pagination } from "swiper";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import cancelIcon from "../../assets/images/cancelicon.png";
import "./style/answermodal.css"
import { ToastContainer, toast } from "react-toastify";

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


    // if (!answerSet.has(answer) && answerSet.size < maxAnswer) {
    //   // Add the new answer to the set
    //   const newAnswerSet = new Set(answerSet);
    //   toast.error(`Answer "${answer}" is already added.`, {
    //   position: "top-right",
    //   autoClose: 1000,
    // });
    //   newAnswerSet.add(answer);
    //   setAnswerSet(newAnswerSet);
    //   toast.warning(`Maximum answers (${maxAnswer}) reached.`, {
    //     position: "top-right",
    //     autoClose: 1000,
    //   });
    // }
    // toast.success(`${answer} has been added.`, {
    //   closeOnClick: true,
    //   position: "top-right",
    //   toastId: answer <= maxAnswer,
    //   autoClose: 1000, // You can adjust the duration of the notification
    // });
    if (answerSet.has(answer)) {
      // If the answer is already in the set, show a toast indicating it's already added
      toast.error(`${answer} is already added.`, {
        position: "top-right",
        autoClose: 1000,
      });
    } else if (answerSet.size >= maxAnswer) {
      // If the maximum allowed answers have been reached, show a toast indicating it
      toast.warning(`Maximum answers (${maxAnswer}) reached.`, {
        position: "top-right",
        autoClose: 1000,
      });
    } else {
      // Add the new answer to the set
      const newAnswerSet = new Set(answerSet);
      newAnswerSet.add(answer);
      setAnswerSet(newAnswerSet);
  
      // Show a success toast for a successfully added answer
      toast.success(`${answer} has been added.`, {
        position: "top-right",
        autoClose: 1000,
      });
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
  const totalSlides = Math.min(Math.ceil(filteredOption.length / 14), 8);

  const renderSwiperSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * 14;
      const endIndex = startIndex + 14;
      const items =
        filteredOption.length > 0
          ? filteredOption.slice(startIndex, endIndex)
          : suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide
          key={i}
          className="answermodal w-[380px] sm:w-[340px] md:w-[360px] h-[100px] pb-[10px] font-baloo2 "
        >
          <div className="flex flex-wrap py-[5px] px-[15px] md:px-[4px] sm:px-[3px] sm:py-[2px]">
            {items.map((answer, index) => (
              <div key={index} className="w-1/2 py-[4px] sm:py-[6px] md:py-[0px] px-[4px]">
                <div className={`bg-gray-bg hover:bg-button-inactive focus:outline-none focus:ring-primary-bg bg-opacity-10 px-[4px] py-[5px] rounded-[16px] mx-[2px] md:mx-[3px] my-[2px] sm:my-[0px] sm:px-[2px] w-full md:my-[6px] sm:w-full ${
                      answerSet.has(answer) ? 'bg-primary ' : ''
                    }`}>
                  <h3
                    className="text-[15px] leading-3 text-center text-gray-dark text-opacity-90 font-[500]  overflow-hidden whitespace-nowrap sm:leading-4 md:leading-4 w-full mdx:leading-4 cursor-pointer sm:text-[14px]"
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer.length > 12 ? `${answer.slice(0, 24)}...` : answer}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <ToastContainer />
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className="fixed mb-[130px] rounded-[16px] sm:mb-[270px] mdx:mb-[340px] mdx:rounded-[16px] lg:mb-[500px] md:mb-[300px] flex flex-col h-[420px] lg:h-[380px] md:h-[400px]  mdx:h-[450px] sm:h-[400px] bg-neutral p-[10px] w-[380px] md:w-full sm:w-full mx-auto sm:pt-[20px] md:pt-[20px] mdx:pt-[20px] ">
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
        {/* <h2 className="font-[600] flex flex-wrap text-[14px] tracking-tight sm:text-[14px] text-gray-lighter mx-auto text-center sm:w-full md:w-[320px] w-[340px] md:flex justify-center align-middle md:tracking-tighter">
          Select from this pool of suggestions to answer the question.
        </h2> */}
      </div>
      <div className="flex flex-col justify-center align-middle mx-auto bg-neutral w-full pt-[3px] h-[110px] md:h-[40px] pb-[10px] sm:pt-[3px] sm:h-[40px] ">
        <div className="w-[327px] sm:w-[290px] mx-auto relative flex items-center sm:pt-[10px] justify-center align-middle ">
          {inputValue.length === 0 && (
            <span className="absolute left-[4px] top-[3px] sm:top-[5px] h-full flex items-center">
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
              className="placeholder:w-[170px] sm:placeholder:w-[180px] md:placeholder:w-[150px] sm:placeholder:text-[13px] placeholder:text-[14px] placeholder:h-[20px] sm:placeholder:pl-[50px] placeholder:pl-[40px] md:placeholder:pl-[40px] placeholder:pt-[20px] border-2 border-primary-lighter active:border-type-active p-[10px] text-sm outline-none w-[350px] sm:w-[340px] rounded-[12px] h-[40px] text-gray-dark hover:bg-button-inactive active:bg-neutral focus:bg-neutral"
            />
          </div>
        </div>
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
        className="mySwiper h-[500px] md:h-[300px] mdx:h-[450px] pb-[4px] sm:pt-[90px] lg:pt-[70px] xl:pt-[50px] sm:min-h-max lg:h-[800px] md:min-h-max md:pt-[85px] flex justify-center sm:w-full w-[325px] align-middle md:w-full mx-auto mdx:pt-[85px] pt-[70px]"
      >
        {renderSwiperSlides()}
      </Swiper>
      
    </div>
  );
};

export default AnswerModal;
