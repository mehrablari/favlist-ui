import React, { useState, useRef } from "react";

const CardSwipeContainer = ({ apiData, handleSwipe }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSwipeChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const isBeginning = swiper.isBeginning;
    const isEnd = swiper.isEnd;

    if (isBeginning) {
      // User swiped left at the beginning, go to the last slide
      setActiveIndex(apiData.length - 1);
    } else if (isEnd) {
      // User swiped right at the end, go to the first slide
      setActiveIndex(0);
    }
  };

  return (
    <div>
      {/* Use swiperRef to reference your Swiper component */}
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSwipeChange}
        // Other Swiper props
      >
        {apiData.map((question, id) => (
          <SwiperSlide key={id}>
            {/* Render your slide content here */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwipeContainer;
