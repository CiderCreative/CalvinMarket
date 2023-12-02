"use client";
import { FilterContainer, ListingButtons } from "./index";
import { Logo } from "../Global/index";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

const HomeSidebar = ({ sidebarClosed, setSidebarClosed }) => {
  return (
    <div
      className={`max-lg:hidden fixed top-0 left-0 text-primary bg-primary w-[300px] drop-shadow-xl h-full ${
        sidebarClosed ? "w-[30px]" : ""
      } transition-all duration-100 overflow-hidden`}
    >
      {/* Arrow */}
      <div className="flex justify-end pr-1 pt-3">
        <ChevronDoubleLeftIcon
          className={`h-6 w-6 stroke-[2px] flex-shrink-0 cursor-pointer hover:opacity-70 ${
            sidebarClosed ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setSidebarClosed(!sidebarClosed)}
        />
      </div>

      <div className={`${sidebarClosed ? "hidden" : ""}`}>
        <Logo />
        <ListingButtons /> {/* Create & Edit Listing */}
        <FilterContainer /> {/* "School Supplies", "Electronics", etc. */}
      </div>
    </div>
  );
};

export default HomeSidebar;
