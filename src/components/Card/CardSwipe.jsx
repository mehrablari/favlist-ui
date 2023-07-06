// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "./tindercards.css";
// import { EffectCards } from "swiper";
// import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
// import path14 from "../../assets/images/path14.png";

// const CardSwipe = ({ questions, onCardSwipe }) => {
//   const handleCardSwipe = (question) => {
//     onCardSwipe(question);
//   };

//   return (
//     <div className="bg-primary">
//       <Swiper
        // effect={"cards"}
        // grabCursor={true}
        // modules={[EffectCards]}
//         className="mySwiper h-[300px] bg-primary flex justify-center align-middle w-[400px] p-[20px]"
//         onSlideChange={(swiper) => handleCardSwipe(questions[swiper.activeIndex])}
//       >
//        {questions.map((question) => (
//             <SwiperSlide
//             className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[20px] p-[10px] m-[3rem] min-w-[271px] drop-shadow-lg mb-[20px]"
//             key={question.id}
//           >
//             <div className=" flex flex-col">
//               <p className="text-[12px] text-gray-light font-[400]">
//                 Today's question
//               </p>
//               <div className="flex flex-row justify-center p-[12px] align-middle">
//                 <div>
//                   <AccessTimeOutlinedIcon
//                     style={{ fontSize: "12px", height: "12px" }}
//                     className="text-primary-light"
//                   />
//                 </div>
//                 <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
//                   6d to expiry
//                 </h1>
//               </div>
//             </div>
//             <h2 className="text-[18px] font-[700] text-gray-dark">{question.text}</h2>
//             <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
//               <h3 className="text-gray-lighter text-[12px] font-[400]">
//                 sponsor
//               </h3>
//               <div className="flex justify-center ">
//                 <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
//               </div>
//               <h3 className="text-gray-light font-[600] pb-[20px] mx-auto flex justify-center align-middle">Favlist</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardSwipe;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";
import { EffectCards } from "swiper";


import path14 from "../../assets/images/path14.png";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useEffect } from "react";

const CardSwipe = ({questionData}) => {
  if (!questionData ) {
    return  <p>Loading</p>
  } 

  console.log("array questions",questionData)

useEffect(()=> {
  console.log(questionData)
})

  
  


  const datalist = questionData.map((question, id) => (



    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper h-[300px] bg-primary flex justify-center align-middle w-[400px] p-[20px]"
      key={id}
      // onSlideChange={(swiper) => handleCardSwipe(questions[swiper.activeIndex])}
    >
    
      <SwiperSlide className="bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center gap-[20px] p-[10px] m-[3rem] min-w-[271px] drop-shadow-lg mb-[20px]">
        <div className=" p-[10px] flex flex-col w-[311px] h-[211px] bg-neutral  rounded-lg">
          <p className="text-[12px] text-gray-light font-[400]">
            Today's question
          </p>
          <div className="flex flex-row justify-center p-[12px] align-middle">
            <div>
              <AccessTimeOutlinedIcon
                style={{ fontSize: "12px", height: "12px" }}
                className="text-primary-light"
              />
            </div>
            <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
              6d to expiry
            </h1>
          </div>
          <div>{question.text}</div>
          <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
            <h3 className="text-gray-lighter text-[12px] font-[400]">
              sponsor
            </h3>
            <div className="flex justify-center ">
              <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
            </div>
            <h3 className="text-gray-light font-[600] pb-[20px] mx-auto flex justify-center align-middle">
              Favlist
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  ));


  return (
    <div className="bg-primary flex flex-row justify-between h-[450px]">
      {datalist}
    </div>
  );
};

export default CardSwipe;
