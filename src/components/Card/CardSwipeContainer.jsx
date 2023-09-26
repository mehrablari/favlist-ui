import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { useState, useCallback } from "react";
import "./tindercards.css";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";

const CardSwipeContainer = ({
  apiData,
  handleSwipe,
  questionId,
  daysRemaining,
}) => {

  const reversedApiData = [...apiData].reverse();

  //local storage
  const storedQuestionIndex =
    localStorage.getItem("selectedQuestionIndex") || 0;
  const [question, setQuestion] = useState(storedQuestionIndex);

  const handleSwipeChange = (swiper) => {
    const activeIndex = swiper.realIndex;

    
      console.log("index number:", swiper.realIndex);
      console.log("swiper:", swiper);

    setQuestion(reversedApiData[activeIndex]);

    handleSwipe(reversedApiData[activeIndex]);
  }



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
  const borderColors = generateRandomColors(reversedApiData.length);

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

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        effect={"cards"}
        grabCursor={true}
        loop={true}
  
        modules={[EffectCards]}
        // slidesPerView={1}
        className="mySwiper px-[10px] align-middle mx-auto pt-[30px] font-sans sm:px-[20px] flex flex-wrap flex-auto justify-center s:w-[340px] md:w-[350px] w-[360px] max-w-[380px] fixed top-[0] right-[0] left-[0] z-20"
        onSlideChange={(swiper) => handleSwipeChange(swiper)}
  
      
      >
        {reversedApiData.map((question, id) => (
          <SwiperSlide
            key={id}
            className={`sm:w-[340px] swiper-1 md:w-[350px] mdx:w-[360px] lg:w-[360px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center mt-[2rem] pb-[10px] max-w-[380px] h-[240px] drop-shadow-lg border-2`}
            style={{ borderColor: borderColors[id] }}
           
          >
            <p className="text-gray-dark text-[21px] items-center font-baloo2 sm:text-[20px] md:text-[20px] px-[10px] max-w-[360px] sm:w-[300px] md:w-[340px] font-[700] tracking-tighter">
              {question.text}
            </p>
            <div className="flex flex-row justify-center bg-neutral rounded-lg w-[320px] pt-[10px] mx-auto pb-[10px]">
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
            <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
              <h3 className="text-gray-light text-[14px] font-[400]">
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
                <h3 className="text-gray-dark text-[13px] font-[600] pb-[15px] text-center w-[200px]">
                  {question.sponsor.name}
                </h3>
              </div>

              <div
                className="youtube absolute bottom-md right-[0px] top-[210px] font-baloo2"
               
              >
                <a href={`${question.sponsor.adsS3Url}`} className="w-[56px]">
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


//  const handleReachEnd = () => {
//     if (swiper) {
//       // Check if swiper exists
//       const isEnd = swiper.isEnd;
//       const isBeginning = swiper.isBeginning;

//       if (isEnd || isBeginning) {
//         // If at the beginning or end, reset to the first slide
//         swiper.slideTo(0, 0);
//       }
//     }
//   };

// import { useState } from "react";
// import "./tindercards.css";
// import "./card.css";
// import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
// import Clock from "../../assets/images/clock.png";
// import ArrowB from "../../assets/images/Arrowb.png"
// import Arrow from "../../assets/images/Arrow.png"
// const CardSwipeContainer = ({ apiData, handleSwipe, questionId, daysRemaining }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // const [touchStartX, setTouchStartX] = useState(null);


//   // const handleTouchStart = (e) => {
//   //   e.preventDefault();
//   //   setTouchStartX(e.touches[0].clientX);
//   // };

//   // const handleTouchMove = (e) => {
//   //   e.preventDefault();
//   //   if (touchStartX === null) return;

//   //   const touchCurrentX = e.touches[0].clientX;
//   //   const deltaX = touchCurrentX - touchStartX;

//   //   if (deltaX > 50) {
//   //     handleSwipeChange("left");
//   //     setTouchStartX(null);
//   //   } else if (deltaX < -50) {
//   //     handleSwipeChange("right");
//   //     setTouchStartX(null);
//   //   }
//   // };

//   const handleSwipeChange = (direction) => {
//     let newIndex;
  
//     if (direction === "left") {
//       newIndex = currentIndex === 0 ? apiData.length - 1 : currentIndex - 1;
//     } else if (direction === "right") {
//       newIndex = currentIndex === apiData.length - 1 ? 0 : currentIndex + 1;
//     }
  
//     setCurrentIndex(newIndex);
//     handleSwipe(apiData[newIndex], newIndex);
//   };

//   const generateRandomColors = (count) => {
//     const colors = [];
//     for (let i = 0; i < count; i++) {
//       const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       colors.push(randomColor);
//     }
//     return colors;
//   };

//   const borderColors = generateRandomColors(apiData.length);

//   const remaining = (days) => {
//     if (days === 0) {
//       return "day to expire";
//     } else if (days === 1) {
//       return "1 day to expire";
//     } else if (days >= 2 && days <= 20) {
//       return `${days} days to expire`;
//     } else {
//       return null;
//     }
//   };

//   const formatDate = (inputDate) => {
//     const options = {
//       weekday: "long",
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     };
//     const formattedDate = new Date(inputDate).toLocaleDateString(
//       undefined,
//       options
//     );
//     return formattedDate;
//   };
// //onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
//   return (
//     <div className="bg-primary w-full overflow-hidden " >
//       <div className="px-[14px] align-middle mx-auto pt-[35px] font-sans sm:px-[20px] flex flex-wrap flex-auto justify-center s:w-[340px] md:w-[350px] w-[360px] max-w-[380px] fixed top-[0] right-[0] left-[0] z-20" >
//         {apiData.map((question, id) => (
//           <div
//             key={id}
//             className={` sm:w-[340px] swiper-1 md:w-[350px] mdx:w-[360px] lg:w-[360px] bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center mt-[2rem] mb-[12px] pb-[10px] max-w-[380px] h-[240px] drop-shadow-lg border-2`}
//             style={{ borderColor: borderColors[id] , display: id === currentIndex ? "block" : "none"}}
//           >
//             <p className="py-[10px] text-gray-dark text-[18px] items-center font-baloo2 sm:text-[18px] md:text-[20px] px-[10px] max-w-[360px] sm:w-[300px] md:w-[340px] font-[600] tracking-tighter">
//               {question.text}
//             </p>
//             <div className="flex flex-row justify-center bg-neutral rounded-lg w-[320px] pt-[10px] mx-auto pb-[10px]">
//               <p className="text-[13px] text-gray-light font-baloo2 font-[400] pr-[10px]">
//                 {formatDate(question.dateToPost)}
//               </p>
//               <div className="flex flex-row justify-center items-center h-[40px] pb-[10px]">
//                 <img src={Clock} alt="clock" className="w-[15px] h-[15px]" />
//                 <h1 className="text-[13px] pl-[5px] text-primary-light font-[400] font-baloo2">
//                   {remaining(question.daysToRemainOpen + 1)}
//                 </h1>
//               </div>
//             </div>
//             <div className="flex flex-col justify-center w-[280px] h-[56px] mx-auto font-baloo2 pt-[10px]">
//               <h3 className="text-gray-light text-[14px] font-[400]">
//                 affiliate
//               </h3>
//               <div className="flex justify-center ">
//                 <a href={`${question.sponsor.url}`} className="rounded-full">
//                   <img
//                     src={question.sponsor.logoS3Url}
//                     alt="netflix"
//                     className="rounded-md h-[30px] w-[40px] "
//                   />
//                 </a>
//               </div>
//               <div className="flex justify-center">
//                 <h3 className="text-gray-dark text-[13px] font-[600] pb-[15px] text-center w-[200px]">
//                   {question.sponsor.name}
//                 </h3>
//               </div>

//               <div
//                 className="youtube absolute bottom-md right-[0px] top-[210px] font-baloo2"
//               >
//                 <a href={`${question.sponsor.adsS3Url}`} className="w-[56px]">
//                   <img
//                     src={youtubeIcon}
//                     alt="youtube icon"
//                     className="w-[24px] h-[17px] "
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       <div className="flex flex-row justify-around pb-[40px] w-[100px] mx-auto">
//         <button className="bg-primary-bg  rounded-[100%] p-[5px]" onClick={() => handleSwipeChange("left")}><img src={Arrow} className="" alt="arrow back"/></button>
//         <button className="bg-primary-bg rounded-[100%] p-[5px]" onClick={() => handleSwipeChange("right")}><img src={ArrowB} alt="arrow back"/></button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default CardSwipeContainer;
