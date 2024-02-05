"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="lg:w-full lg:h-[30vw] max-h-[1200px] flex justify-between max-w-screen overflow-x-hidden">
      {/* The Carousel */}
      <div
        className="flex overflow-visible [&>*]:flex-shrink-0 relative right-0"
        style={{ right: distanceRight }}
      >
        {/* Create block for each photo */}
        {urls.map((image, idx) => {
          return (
            <div
              key={idx}
              className={`flex item-center justify-center w-full`}
              {...handlers} //Swipe handlers
            >
              <Image
                className="h-full w-auto object-cover"
                loading="eager"
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
