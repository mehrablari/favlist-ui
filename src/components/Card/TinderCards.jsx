
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./tindercards.css";

// import required modules
import { EffectCards } from "swiper";

const TinderCards = () => {
  return (
    <div className="bg-neutral">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-[300px] bg-neutral flex justify-center align-middle"
      >
        <SwiperSlide className="sliderone">Slide 1</SwiperSlide>
        <SwiperSlide className="slidertwo">Slide 2</SwiperSlide>
        <SwiperSlide className="sliderthree">Slide 3</SwiperSlide>
        <SwiperSlide className="sliderfour">Slide 4</SwiperSlide>
        <SwiperSlide className="sliderfive">Slide 5</SwiperSlide>
        <SwiperSlide className="slidersix">Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TinderCards