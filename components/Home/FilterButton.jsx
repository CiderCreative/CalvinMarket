import React from "react";

const FilterButton = ({ text, icon }) => {
  return (
    <div className="flex items-center space-x-5 rounded-md px-12 py-5 text-sm hover:cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-800">
      {icon} <p>{text}</p>
    </div>
  );
};

export default FilterButton;
