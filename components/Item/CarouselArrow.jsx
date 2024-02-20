import React from "react";

const CarouselArrow = ({ direction, func }) => {
  const arrow = (
    <svg
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
      />
    </svg>
  );
  const styles = direction === "left" ? "pr-1" : "pl-1";

  return (
    <button
      onClick={func}
      className={`flex aspect-square w-8 items-center justify-center rounded-full border-opposite bg-gray-accent text-base text-primary hover:border-2 active:scale-90 dark:border-light sm:w-12 sm:text-lg lg:text-2xl ${styles}`}
    >
      {arrow}
    </button>
  );
};

export default CarouselArrow;
