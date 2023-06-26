import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AnswerContainer from "../components/questionbox/AnswerContainer";

const Swipertest = () => {
  return (
    <div>
        <Swiper pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-[200px] bg-gray-dark" >
            <SwiperSlide><AnswerContainer /></SwiperSlide>
            <SwiperSlide><AnswerContainer /></SwiperSlide>
            <SwiperSlide><AnswerContainer /></SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Swipertest