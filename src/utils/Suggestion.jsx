// // import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
// // import { Link } from "react-router-dom";
// // import AnswerContainer from "../components/questionbox/AnswerContainer";
// // //swiper js library for the swiping functionality
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import soundEffect from "../assets/audio/software.wav"

// // // Import Swiper styles

// // import "swiper/css/pagination";
// // // import required modules
// // import { Pagination } from "swiper";

// // const Suggestion = ({handleSuggestion, suggestedOption}) => {
// //   // const handleSwipeChange = swiper =>  (questionData[swiper.activeIndex], handleSwipe(questionData[swiper.activeIndex].answersJson))

// //   console.log("This is suggestion data",suggestedOption)

// //   const audio = new Audio(soundEffect);

// //     const playSoundEffect = () => {
// //       audio.play();
// //     };

// //   return (
// //     <main className="bg-neutral p-[12px] flex flex-col justify-center h-full mx-auto ">
// //       <div className="flex flex-row justify-between bg-neutral w-[327px] mx-auto">
// //         <div className="text-grey-text text-[15px] font-[600]">Suggestions</div>
// //         <Link to="/answers">
// //           <span className="text-primary hover:bg-sky-500 cursor-pointer text-[12px] font-[500]">
// //             See all Suggestions
// //           </span>
// //           <ArrowCircleRightOutlinedIcon
// //             sx={{ color: "#A13E97", height: "12px" }}
// //           />
// //         </Link>
// //       </div>
// //       <div className="bg-neutral mx-auto w-[327px]">
// //         <Swiper
// //           pagination={{
// //             clickable: true,
// //           }}
// //           modules={[Pagination]}
// //           className="mySwiper w-full h-[250px] bg-neutral "
// //         >
// //           <SwiperSlide>
// //             <AnswerContainer />
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <AnswerContainer />
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <AnswerContainer />
// //           </SwiperSlide>
// //         </Swiper>
// //         <Swiper
// //           pagination={{
// //             clickable: true,
// //           }}
// //           modules={[Pagination]}
// //           className="mySwiper w-full h-[250px] bg-neutral "
// //         >
// //           <SwiperSlide>
// //             {suggestedOption.map((suggestion, id) => (
// //               <div key={suggestion.id} className="w-1/3">
// //                 <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
// //                   <h3
// //                     className="text-[12px] text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
// //                     onClick={playSoundEffect}
// //                   >
// //                     {suggestion.title.length > 8
// //                       ? `${suggestion.title.slice(0, 12)}...`
// //                       : suggestion.title}
// //                   </h3>
// //                 </div>
// //               </div>
// //             ))}
// //             {/* <div className="flex flex-wrap bg-neutral ">
// //             {suggestedOption.slice(0, 12).map((answers) => (
// //               <div key={answers.id} className="w-1/3">
// //                 <div className="bg-gray-lighter bg-opacity-10 p-[10px] rounded-[16px] m-[12px]">
// //                   <h3 className="text-[12px] text-gray-dark text-opacity-90 font-medium  overflow-hidden whitespace-nowrap leading-3 cursor-pointer" onClick={playSoundEffect}>{answers.title.length > 8 ? `${answers.title.slice(0, 12)}...` : answers.title}</h3>
// //                 </div>
// //               </div>
// //             ))}
// //           </div> */}
// //           </SwiperSlide>
// //         </Swiper>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Suggestion;



import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import AnswerContainer from "../components/questionbox/AnswerContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import soundEffect from "../assets/audio/software.wav";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Suggestion = ({ suggestedOption }) => {
  const audio = new Audio(soundEffect);
  const playSoundEffect = () => {
    audio.play();
  };

  const renderSwiperSlides = () => {
    const totalItems = suggestedOption.length;
    const numSlides = Math.ceil(totalItems / 12);
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * 12;
      const endIndex = startIndex + 12;
      const items = suggestedOption.slice(startIndex, endIndex);

      slides.push(
        <SwiperSlide key={i} className="flex flex-wrap p-[10px] ">
          {items.map((suggestion, index) => (
            <div key={index} className="w-1/3">
              <div className="bg-gray-lighter bg-opacity-10 p-[10px] w-[95px] rounded-[16px] h-[32px] flex justify-evenly ">
                <h3
                  className="text-[12px] text-center font-[400] text-gray-dark text-opacity-90 overflow-hidden whitespace-nowrap leading-3 cursor-pointer"
                  onClick={playSoundEffect}
                >
                  {suggestion.length > 12
                    ? `${suggestion.slice(0, 18)}...`
                    : suggestion}
                </h3>
              </div>
            </div>
          ))}
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <main className="bg-neutral p-[12px] flex flex-col justify-center h-[240px] mx-auto ">
      <div className="flex flex-row justify-between bg-neutral w-[327px] mx-auto">
        <div className="text-grey-text text-[15px] font-[600]">Suggestions</div>
        <Link to="/answers">
          <span className="text-primary hover:bg-sky-500 cursor-pointer text-[12px] font-[500]">
            See all Suggestions
          </span>
          <ArrowCircleRightOutlinedIcon
            sx={{ color: "#A13E97", height: "12px" }}
          />
        </Link>
      </div>
      <div className="bg-neutral mx-auto w-[327px]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-[327px] h-[250px] bg-neutral"
        >
          {renderSwiperSlides()}
        </Swiper>
      </div>
    </main>
  );
};

export default Suggestion;

