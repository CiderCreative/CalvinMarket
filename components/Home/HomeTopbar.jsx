import React from "react";
import { filterButtonInfo } from "../../constants/filterButtonInfo";
import ListingButtons from "./ListingButtons";

const HomeTopbar = () => {
  return (
    <div className="mt-5 lg:hidden">
      <div className="flex justify-center">
        {/* Create & Edit Listing */}
        <ListingButtons />
      </div>

      {/* Filter Buttons - Small Screen */}
      <div className="m-auto mt-5 flex flex-wrap justify-center">
        {filterButtonInfo.map((filter, idx) => (
          <div
            key={idx}
            className="flex w-[80px] cursor-pointer flex-col items-center rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 sm:w-[100px]"
          >
            {filter.icon}
            <p className="mt-1 text-xs">{filter.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopbar;
