import React from "react";
import { filterButtonInfo } from "../../constants/filterButtonInfo";
import { FilterButton } from "./index";

const FilterContainer = () => {
  return (
    <div>
      {filterButtonInfo.map((filter, key) => (
        <div key={key}>
          <div
            className={`m-auto my-10 h-[1px] rounded-full bg-dark/10 dark:bg-light/10 ${
              filter.text === "School" || filter.text === "New" ? "" : "hidden"
            } `}
          />
          <FilterButton key={key} text={filter.text} icon={filter.icon} />
        </div>
      ))}
    </div>
  );
};

export default FilterContainer;
