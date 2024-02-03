import React from "react";
import { ButtonLink } from "./index";

const ListingButtons = () => {
  return (
    <div className="flex lg:flex-col justify-around lg:justify-center max-lg:mb-5 lg:ml-[10%] lg:w-[80%] lg:space-y-3">
      <ButtonLink
        text="Create a listing"
        link="/AddListing"
        styles="bg-opposite dark:bg-neutral-700 text-light dark:text-neutral-300 font-semibold max-lg:w-2/5"
      />
      <ButtonLink
        text="Edit listings"
        link="/EditListing"
        styles="border-2 border-dark dark:border-light/20 max-lg:w-2/5"
      />
    </div>
  );
};

export default ListingButtons;
