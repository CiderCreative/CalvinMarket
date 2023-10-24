"use client"

import React, { useState, useEffect } from 'react'

const Carousel = ({colors}) => {
  const [count, setCount] = useState(0)
  const [distanceRight, setDistanceRight] = useState(0);
  const handleLeft = () => { setCount((count - 1 + colors.length) % colors.length); };
  const handleRight = () => { setCount((count + 1) % colors.length); };

// Scroll on keypress
useEffect(() => {
  const rightPosition = count * 100 + "%";
  setDistanceRight(rightPosition);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        handleLeft();
        break;

      case "ArrowRight":
        handleRight();
        break;

      default:
        break;
    }
  };
  window.addEventListener('keydown', handleKeyDown); //Listen for Arrows Keys
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [count]);

  return (

    <div className='bg-dark relative w-[100%] h-full'>

      <div className="flex overflow-visible [&>*]:flex-shrink-0 relative transition-all duration-200 right-0" style={{right: distanceRight}}>
        {/* Create block for each review */}
        {colors.map((style, idx) => <div key={idx} className={`w-full h-[500px] ${style}`} />)}
      </div>

      <button className="absolute top-[50%] left-3 sm:left-[3vw] xl:left-[15vw] text-sm sm:text-lg lg:text-2xl aspect-square w-8 sm:w-[50px] rounded-full text-white hover:border-2 border-white active:scale-90" onClick={() => handleLeft()}>←</button>
      <button className="absolute top-[50%] right-3 sm:right-[3vw] xl:right-[15vw] text-sm sm:text-lg lg:text-2xl aspect-square w-8 sm:w-[50px] rounded-full text-white hover:border-2 border-white active:scale-90" onClick={() => handleRight()}>→</button>
    </div>
  )
}

export default Carousel