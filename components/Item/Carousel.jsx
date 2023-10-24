"use client"

import React, { useState, useEffect } from 'react'

const Reviews = () => {
  var count = 0;

  const handleLeft = () => {
    count = (count - 1 + colors.length) % colors.length;
    const container = document.getElementById("container");
    const rightPosition = count * 100 + "vw";
    container.style.right = rightPosition;
  };

  const handleRight = () => {
    count = (count + 1) % colors.length;
    const container = document.getElementById("container");
    const rightPosition = count * 100 + "vw";
    container.style.right = rightPosition;
  };

  // Scroll on keypress
  useEffect(() => {
		const handleKeyDown = (e) => {
			switch (e.keyCode) {
				case 37: //left arrow keypress
        handleLeft();
        break;

				case 39: //right arrow keypress
        handleRight();
					break;

				default:
					break
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {window.removeEventListener('keydown', handleKeyDown);}
	},[])

  const colors = [ "bg-[#123456]", "bg-[#AABBCC]", "bg-[#FF9900]", "bg-[#00FF00]", "bg-[#FF0000]", "bg-[#6600CC]", "bg-[#0099FF]", "bg-[#992233]", "bg-[#00CC99]",
  ];

  return (

    <div className='bg-dark relative w-[100vw] h-full'>

      <div className="flex overflow-visible [&>*]:flex-shrink-0 relative transition-all duration-200 right-0" id='container'>
        {/* Create review block for each review */}
        {colors.map((style, idx) => <div key={idx} className={`w-full h-[500px] ${style}`} />)}
      </div>

      <button className="absolute top-[50%] left-3 sm:left-[3vw] xl:left-[15vw] text-sm sm:text-lg lg:text-2xl aspect-square w-8 sm:w-[50px] rounded-full text-white hover:border-2 border-white active:scale-90" onClick={handleLeft}>←</button>
      <button className="absolute top-[50%] right-3 sm:right-[3vw] xl:right-[15vw] text-sm sm:text-lg lg:text-2xl aspect-square w-8 sm:w-[50px] rounded-full text-white hover:border-2 border-white active:scale-90" onClick={handleRight}>→</button>
    </div>
  )
}

export default Reviews