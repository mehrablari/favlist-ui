import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import AnswerContainer from "../components/questionbox/AnswerContainer";
//swiper js library for the swiping functionality
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Suggestion = () => {
  return (
    <main className="bg-neutral p-[12px] flex flex-col justify-center ">
      <div className="flex flex-row justify-between">
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
      <div className="bg-neutral">
        <Swiper pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[250px] bg-neutral" >
            <SwiperSlide><AnswerContainer /></SwiperSlide>
            <SwiperSlide><AnswerContainer /></SwiperSlide>
            <SwiperSlide><AnswerContainer /></SwiperSlide>
        </Swiper>

    </div>
    </main>
  );
};

export default Suggestion;
