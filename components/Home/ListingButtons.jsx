import React from "react";
import Link from "next/link";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const ListingButtons = () => {
  return (
    <div className="flex h-16 space-x-1 text-sm md:h-20">
      <Link
        className="flex flex-col items-center justify-center rounded-md bg-yellow shadow-sm transition-colors duration-75 hover:bg-opacity-80 dark:bg-neutral-700 dark:hover:bg-opacity-80 max-lg:px-6 lg:w-3/5"
        href="/AddListing"
      >
        <PlusIcon className="mb-2 size-4" /> Create Listing
      </Link>
      <Link
        className="flex flex-col items-center justify-center rounded-md bg-light shadow-sm transition-colors duration-75 hover:bg-opacity-50 dark:bg-dark dark:hover:bg-opacity-70 max-lg:px-6 lg:w-2/5"
        href="/EditListing"
      >
        <PencilSquareIcon className="mb-2 size-4" /> Edit Listing
      </Link>
    </div>
  );
};

export default ListingButtons;
