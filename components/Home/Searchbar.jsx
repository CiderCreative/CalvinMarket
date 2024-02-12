import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <div className="flex w-[500px] items-center space-x-3 rounded-md border-[1px] border-dark/30 px-5 py-2 dark:border-light/30">
      <MagnifyingGlassIcon className="text-subtle size-4" />
      <input
        type="text"
        autoComplete="off"
        id="name"
        placeholder="Search"
        className="mt-0.5 w-full border-transparent bg-transparent focus:shadow-none focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
