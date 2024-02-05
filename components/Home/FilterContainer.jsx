import React from "react";
import { filterButtonInfo } from "../../constants/filterButtonInfo";
import { FilterButton } from "./index";

const FilterContainer = () => {
  return (
    <div className="space-y-5 py-10 px-5">
      {filterButtonInfo.map((filter, key) => (
        <div key={key}>
          <div
            className={`h-[1px] w-5/6 rounded-full bg-dark/50 dark:bg-light/30 m-auto ${
              filter.text === "School Supplies" || filter.text === "New"
                ? ""
                : "hidden"
            } `}
          />
          <FilterButton key={key} text={filter.text} icon={filter.icon} />
        </div>
      ))}
    </div>
  );
};

export default FilterContainer;
