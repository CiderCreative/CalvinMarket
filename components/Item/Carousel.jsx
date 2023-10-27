"use client"

import React, { useState, useEffect, useCallback } from 'react'
import {CarouselArrow} from "./index"

const Carousel = ({colors}) => {
  const [count, setCount] = useState(0)                  // index of carousel
  const [distanceRight, setDistanceRight] = useState(0); //pos carousel is shifted from right

  // Funcs to handle left & right arrow clicks -> sliding the carousel
  const handleLeft = useCallback(() => { setCount((count - 1 + colors.length) % colors.length); }, [count, colors]);
  const handleRight = useCallback(() => { setCount((count + 1) % colors.length); }, [count, colors]);

  // Calculate right position when 'count' changes
  useEffect(() => {
    const rightPosition = count * 100 + "%";
    setDistanceRight(rightPosition);
  }, [count]);


  // Listen for ArrowLeft and ArrowRight key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);      //Listen for key presses
    return () => {
      window.removeEventListener('keydown', handleKeyDown); //Cleanup listener
    };
  }, [handleLeft, handleRight]);

  return (

    <div className='bg-dark relative w-[100%] h-full'>

      {/* The Carousel */}
      <div className="flex overflow-visible [&>*]:flex-shrink-0 relative transition-all duration-200 right-0" style={{right: distanceRight}}>
        {/* Create block for each review */}
        {colors.map((style, idx) => <div key={idx} className={`flex items-center justify-center w-full h-[500px] bg-primary`}>
          <div className={`h-full w-[300px] ${style}`}></div>
        </div>)}
      </div>

      <CarouselArrow direction="left" func={handleLeft}/>
      <CarouselArrow direction="right" func={handleRight}/>
    </div>
  )
}

export default Carousel