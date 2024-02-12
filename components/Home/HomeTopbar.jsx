import React from "react";
import { filterButtonInfo } from "../../constants/filterButtonInfo";
import ListingButtons from "./ListingButtons";

const HomeTopbar = () => {
  return (
    <div className="mt-5 lg:hidden">
      {/* Create & Edit Listing */}
      <ListingButtons />

      {/* Filter Buttons - Small Screen */}
      <div className="m-auto flex flex-wrap justify-center">
        {filterButtonInfo.map((filter, idx) => (
          <div
            key={idx}
            className="flex w-[80px] cursor-pointer flex-col items-center rounded-xl p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 sm:w-[100px]"
          >
            <div className="rounded-full bg-yellow p-1 text-dark">
              <div className="flex aspect-square w-5 items-center justify-center">
                {filter.icon}
              </div>
            </div>

            <p className="mt-1 text-base">{filter.text.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopbar;
