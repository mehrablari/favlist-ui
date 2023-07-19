// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import DismisIcon from '../../assets/icons/Dismiss.svg';
// import { Link } from 'react-router-dom';
// import AnswerHeader from "../questionbox/AnswerHeader"

// const RankedAnswers = () => {
//   const [rankedAnswers, setRankedAnswers] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const handlePreviewAnswers = () => {
//     // Handle the preview answers logic
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://35.209.30.214:443/api/v1/submissions/9', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           method: "GET",
//           body: JSON.stringify({
//             rankedAnswers: rankedAnswers,
//           }),
//         });
//         setRankedAnswers(response.data.data);
//         console.log("this is response", response.data)
        
//       } catch (error) {
//         console.error('Error fetching ranked data:', error);
//       }
//     };

//     fetchData();
   
//   }, []);

//   return (
//     <form className="bg-neutral pt-[12px] pb-[30px] gap-[12px]" onClick={handleSubmit}>
//       <AnswerHeader />
//       {rankedAnswers.length > 0 &&
//         rankedAnswers.map((answer, index) => (
//           <div className="bg-neutral w-[327px] mx-auto" key={index}>
//             <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
//               <div className='w-[24px] h-[24px] flex justify-start align-middle pt-[7px]'>{answer.rank}</div>
//               <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
//                 <span className="text-[13px] h-[16px]">{answer.text}</span>

//                 <img
//                   src={DismisIcon}
//                   alt="dismiss icon"
                 
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//       {rankedAnswers.length > 0 && (
//         <Link to="/preview" className="flex justify-center align-middle pt-[10px]">
//           <button
//             className={`h-[40px] text-center rounded-lg font-[600] text-[14px] w-[310px] mx-auto ${
//               rankedAnswers.length >= 3
//                 ? 'bg-primary text-neutral'
//                 : 'bg-gray-purple cursor-not-allowed text-neutral'
//             }`}
//             type="submit"
//             onClick={handlePreviewAnswers}
//           >
//             Preview Answers
//           </button>
//         </Link>
//       )}
//     </form>
//   );
// };

// export default RankedAnswers;


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import DismisIcon from '../../assets/icons/Dismiss.svg';
// import { Link } from 'react-router-dom';
// import AnswerHeader from '../questionbox/AnswerHeader';
// import { Responsive, WidthProvider } from 'react-grid-layout';

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const RankedAnswers = () => {
//   const [rankedAnswers, setRankedAnswers] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const handlePreviewAnswers = () => {
//     // Handle the preview answers logic
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://35.209.30.214:443/api/v1/submissions/9', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           method: 'GET',
//           body: JSON.stringify({
//             rankedAnswers: rankedAnswers,
//           }),
//         });
//         setRankedAnswers(response.data.data);
//         console.log('this is response', response.data);
//       } catch (error) {
//         console.error('Error fetching ranked data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const onLayoutChange = (layout) => {
//     // Handle layout change
//   };

//   return (
//     <form className="bg-neutral pt-[12px] pb-[30px] gap-[12px]" onClick={handleSubmit}>
//       <AnswerHeader />
//       <ResponsiveGridLayout
//         className="layout flex justify-center mx-auto p-sm"
//         layouts={{ sm: rankedAnswers }}
//         breakpoints={{ lg: 0, md: 0, sm: 768, xs: 0, xxs: 0 }}
//         cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//         onLayoutChange={onLayoutChange}
//       >
//         {rankedAnswers.map((answer, index) => (
//           <div key={index} className=''>
//             <div>
//               <div className="bg-button-inactive w-[327px] rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] flex flex-row justify-between">
//                 <span className="text-[13px] h-[16px]">{answer.text}</span>
//                 <img src={DismisIcon} alt="dismiss icon" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </ResponsiveGridLayout>

//       {rankedAnswers.length > 0 && (
//         <Link to="/preview" className="flex justify-center align-middle pt-[10px]">
//           <button
//             className={`h-[40px] text-center rounded-lg font-[600] text-[14px] w-[310px] mx-auto ${
//               rankedAnswers.length >= 3
//                 ? 'bg-primary text-neutral'
//                 : 'bg-gray-purple cursor-not-allowed text-neutral'
//             }`}
//             type="submit"
//             onClick={handlePreviewAnswers}
//           >
//             Preview Answers
//           </button>
//         </Link>
//       )}
//     </form>
//   );
// };

// export default RankedAnswers;


import { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import axios from "axios";
import DismisIcon from "../../assets/icons/Dismiss.svg";
import { Link } from "react-router-dom";
import AnswerHeader from "../questionbox/AnswerHeader";

const RankedAnswers = () => {
  const [rankedAnswers, setRankedAnswers] = useState([]);

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = rankedAnswers[dragIndex];
    const updatedList = [...rankedAnswers];
    updatedList.splice(dragIndex, 1);
    updatedList.splice(hoverIndex, 0, draggedItem);
    setRankedAnswers(updatedList);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://35.209.30.214:443/api/v1/submissions/9",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
            body: JSON.stringify({
              rankedAnswers: rankedAnswers,
            }),
          }
        );
        setRankedAnswers(response.data.data);
        console.log("this is response", response.data);
      } catch (error) {
        console.error("Error fetching ranked data:", error);
      }
    };

    fetchData();
  }, []);

  const Item = ({ id, text, index }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.ITEM,
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [, drop] = useDrop(() => ({
      accept: ItemTypes.ITEM,
      hover: (item) => {
        if (item.index !== index) {
          moveItem(item.index, index);
        }
      },
    }));

    drag(drop);

    return (
      <div
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className="bg-neutral w-[327px] mx-auto"
      >
        <div className="bg-neutral p-[8px] flex flex-row justify-between mx-auto w-[327px]">
          <div className="w-[24px] h-[24px] flex justify-start align-middle pt-[7px]">
            {index + 1}
          </div>
          <div className="w-[327px] bg-button-inactive rounded-lg font-[400] text-gray-light px-[12px] py-[10px] h-[44px] mx-auto flex flex-row justify-between">
            <span className="text-[13px] h-[16px]">{text}</span>
            <img src={DismisIcon} alt="dismiss icon" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <form className="bg-neutral pt-[12px] pb-[30px] gap-[12px]">
      <AnswerHeader />
      {rankedAnswers.map((answer, index) => (
        <Item
          key={answer.text}
          id={answer.text}
          text={answer.text}
          index={index}
        />
      ))}

      {rankedAnswers.length > 0 && (
        <Link to="/preview" className="flex justify-center align-middle pt-[10px]">
          <button
            className={`h-[40px] text-center rounded-lg font-[600] text-[14px] w-[310px] mx-auto ${
              rankedAnswers.length >= 3
                ? "bg-primary text-neutral"
                : "bg-gray-purple cursor-not-allowed text-neutral"
            }`}
            type="submit"
            onClick={handlePreviewAnswers}
          >
            Preview Answers
          </button>
        </Link>
      )}
    </form>
  );
};

export default RankedAnswers;
