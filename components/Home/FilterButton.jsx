import React from "react";

const FilterButton = ({ text, icon }) => {
  return (
    <div className="flex items-center space-x-5 hover:cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 px-5 py-3 rounded-xl">
      <div className=" bg-yellow text-dark rounded-full p-1">
        <div className="aspect-square w-5 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <p className="text-sm">{text}</p>
    </div>
  );
};

export default FilterButton;
