import React from "react";
import { filterButtonInfo } from "../../constants/filterButtonInfo";
import ListingButtons from "./ListingButtons";

const HomeTopbar = () => {
  return (
    <div className="lg:hidden mt-5">
      {/* Create & Edit Listing */}
      <ListingButtons />

      {/* Filter Buttons - Small Screen */}
      <div className="flex flex-wrap justify-center m-auto">
        {filterButtonInfo.map((filter, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-[80px] sm:w-[100px] hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2 rounded-xl cursor-pointer"
          >
            <div className="bg-yellow text-dark rounded-full p-1">
              <div className="aspect-square w-5 flex items-center justify-center">
                {filter.icon}
              </div>
            </div>

            <p className="text-base mt-1">{filter.text.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopbar;
