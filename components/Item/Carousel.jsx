"use client";

import React, { useState, useEffect, useCallback } from "react";
import { CarouselArrow } from "./index";
import Image from "next/image";

const Carousel = ({ index, setIndex, urls }) => {
  const [distanceRight, setDistanceRight] = useState(0); //pos carousel is shifted from right

  // Funcs to handle left & right arrow clicks -> sliding the carousel
  const handleLeft = useCallback(() => {
    setIndex((index - 1 + urls.length) % urls.length);
  }, [index, urls, setIndex]);
  const handleRight = useCallback(() => {
    setIndex((index + 1) % urls.length);
  }, [index, urls, setIndex]);

  // Calculate right position when 'index' changes
  useEffect(() => {
    const rightPosition = index * 100 + "%";
    setDistanceRight(rightPosition);
  }, [index]);

  // Listen for ArrowLeft and ArrowRight key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };
    window.addEventListener("keydown", handleKeyDown); //Listen for key presses
    return () => {
      window.removeEventListener("keydown", handleKeyDown); //Cleanup listener
    };
  }, [handleLeft, handleRight]);

  return (
    <div className="bg-dark relative lg:w-full lg:h-[80vh] flex justify-between">
      {/* The Carousel */}
      <div
        className="flex overflow-visible [&>*]:flex-shrink-0 relative transition-all duration-200 right-0"
        style={{ right: distanceRight }}
      >
        {/* Create block for each photo */}
        {urls.map((image, idx) => {
          return (
            <div
              key={idx}
              className={`flex item-center justify-center w-full bg-primary`}
            >
              <Image
                className={`h-full object-cover`}
                loading="eager"
                src={image}
                draggable="false"
                alt=""
                width={600}
                height={600}
              />
            </div>
          );
        })}
      </div>

      <CarouselArrow direction="left" func={handleLeft} />
      <CarouselArrow direction="right" func={handleRight} />
    </div>
  );
};

export default Carousel;
