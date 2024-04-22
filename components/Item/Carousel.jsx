"use client";

import React, { useState, useEffect } from "react";
import AdvancedImage from "../AdvancedImage";
import { useSwipeable } from "react-swipeable";

const Carousel = ({ index, urls, handleLeft, handleRight }) => {
  const [distanceRight, setDistanceRight] = useState(0); //pos carousel is shifted from right

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleRight(),
    onSwipedRight: () => handleLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable mouse swiping for desktop
  });

  // Calculate right position when 'index' changes
  useEffect(() => {
    const rightPosition = index * 100 + "%";
    setDistanceRight(rightPosition);
  }, [index]);

  return (
    <div className="max-w-screen mx-3 flex max-h-[1200px] justify-center overflow-x-hidden max-lg:max-h-[400px] lg:h-[30vw] lg:w-full">
      {/* The Carousel */}
      <div
        className="relative right-0 flex overflow-visible [&>*]:flex-shrink-0"
        style={{ right: distanceRight }}
      >
        {/* Create block for each photo */}
        {urls.map((image, idx) => {
          return (
            <div
              key={idx}
              className={`item-center flex w-full justify-center`}
              {...handlers} //Swipe handlers
            >
              <AdvancedImage
                className="h-full w-auto object-cover"
                loading="eager"
                priority
                src={image}
                draggable="false"
                alt=""
                width={4000}
                height={4000}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
