"use client";
import { FilterContainer, ListingButtons } from "./index";
import { Logo } from "../Global/index";

const HomeSidebar = () => {
  return (
    <div className="dark:bg-darkGray fixed left-0 top-0 h-full w-[300px] bg-gray text-primary max-lg:hidden">
      <div className="h-screen overflow-y-auto px-5 py-10">
        <Logo />
        <ListingButtons /> {/* Create & Edit Listing */}
        <FilterContainer /> {/* "School Supplies", "Electronics", etc. */}
      </div>
    </div>
  );
};

export default HomeSidebar;
