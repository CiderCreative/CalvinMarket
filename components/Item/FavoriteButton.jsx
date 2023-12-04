import React from "react";

const FavoriteButton = () => {
  return (
    <div className="bg-neutral-300 dark:bg-neutral-700 flex items-center px-6 py-3 rounded-lg  hover:opacity-70 transition-opacity duration-100 hover:cursor-pointer">
      <svg
        className="w-4 h-4 text-neutral-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21 19"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
        />
      </svg>
    </div>
  );
};

export default FavoriteButton;
