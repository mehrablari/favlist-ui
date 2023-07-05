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
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
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

// const CardSwipe = (data) => {
//   console.log("this is cardswipe",data)
//   const response = 

  

//   return (
//     <div>
//       <h1>Hello love</h1>
//     </div>
//   );
// }

// export default CardSwipe;

import React from 'react'

const CardSwipe = (data) => {
  console.log("this is cardswipe",data.data.questionData)
  const response = data.data.questionData;
  console.log("got you", response)

  // const date = data.data.questionData.text;
  // console.log("text",date)

  return (
    <div className="bg-primary flex flex-row justify-between h-[450px]">
      {
        response.map((id, name) => (
          <div key={id} className="p-[20px] bg-neutral mx-auto h-[400px] rounded-lg w-[300px]">
            <h1 className="bg-primary">This is text:{name.text}</h1>
            <h1>{name.category}</h1>
            <h1>{name.dateToPost}</h1>

          </div>
        ))
      }
    </div>
  )
}


export default CardSwipe


// import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
// import path14 from "../../assets/images/path14.png";

// const CardSwipe = ({ data }) => {
//   // const [category, text, date] = data;
//   return (
//     <div className="bg-primary">
//       <div className="bg-neutral rounded-lg p-[20px] flex mx-auto flex-col w-[360px]">
//         {data.map((question, index)=> console.log("this is question",question))}
//         <div className=" flex flex-col">
//           <p className="text-[12px] text-gray-light font-[400]">

//             Today's question
//           </p>
//           <div className="flex flex-row justify-center p-[12px] align-middle">
//             <div>
//               <AccessTimeOutlinedIcon
//                 style={{ fontSize: "12px", height: "12px" }}
//                 className="text-primary-light"
//               />
//             </div>
//             <h1 className="pl-[12px] text-[12px] text-primary-light h-[12px] mb-[10px] font-[400]">
//               6d to expiry
//             </h1>
//           </div>
//         </div>
//         <h2 className="text-[18px] font-[700] text-gray-dark">Question text</h2>
//         <div className="flex flex-col justify-center w-[43px] h-[56px] mx-auto">
//           <h3 className="text-gray-lighter text-[12px] font-[400]">sponsor</h3>
//           <div className="flex justify-center ">
//             <img src={path14} alt="netflix" className="w-[24px] h-[24px]" />
//           </div>
//           <h3 className="text-gray-light font-[600] pb-[20px] mx-auto flex justify-center align-middle">
//             Favlist
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSwipe;


// const CardSwipe = ({ data }) => {
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>ID: {item.id}</p>
//           <p>URL: {item.url}</p>
//           <p>Question: {item.question}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardSwipe;