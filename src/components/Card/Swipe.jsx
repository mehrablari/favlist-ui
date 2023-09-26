import React, { useState } from "react";
import "./tindercards.css";
import "./card.css";
import youtubeIcon from "../../assets/images/youtubeIcon.jpg";
import Clock from "../../assets/images/clock.png";
import { Swipeable } from "react-swipeable";

const CardSwipe = ({ apiData, handleSwipe }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeChange = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? apiData.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === apiData.length - 1 ? 0 : prevIndex + 1
      );
    }

    handleSwipe(apiData[currentIndex]);
  };

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

  const borderColors = generateRandomColors(apiData.length);

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
      <Swipeable
        onSwipedLeft={() => handleSwipeChange("left")}
        onSwipedRight={() => handleSwipeChange("right")}
      >
        <div className="custom-swipe-container">
          {apiData.map((question, id) => (
            <div
              key={id}
              className={`custom-swipe-card bg-neutral rounded-[24px] mx-auto flex flex-col justify-center text-center mt-[2rem] mb-[12px] pb-[10px] max-w-[380px] h-[240px] drop-shadow-lg border-2`}
              style={{ borderColor: borderColors[id] }}
            >
              <p className="text-gray-dark text-[18px] items-center font-baloo2 sm:text-[18px] md:text-[20px] px-[10px] max-w-[360px] sm:w-[300px] md:w-[340px] font-[600] tracking-tighter">
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
                  // style={{ backgroundColor: "#A13E97" }}
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
            </div>
          ))}
        </div>
      </Swipeable>
    </div>
  );
};

export default CardSwipe;
