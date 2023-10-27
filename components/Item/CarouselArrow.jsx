import React from 'react'

const CarouselArrow = ({direction, func}) => {
  const arrow = <svg className={`w-6 h-6 text-primary ${direction === "left" ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/></svg>
  const styles = direction === "left" ? "pr-1 left-3 sm:left-[3vw] xl:left-[15vw]" : "pl-1 right-3 sm:right-[3vw] xl:right-[15vw]"

  return (
    <button
    onClick={func}
    className={`flex items-center justify-center absolute top-[50%] text-sm sm:text-lg lg:text-2xl aspect-square w-8 sm:w-[50px] rounded-full text-primary hover:border-2 bg-opposite bg-opacity-20 border-opposite dark:border-light active:scale-90 ${styles}`}
    >
      {arrow}
    </button>

  )
}

export default CarouselArrow