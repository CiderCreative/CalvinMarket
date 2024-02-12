import React from "react";
import Link from "next/link";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const ListingButtons = () => {
  return (
    <div className="flex h-20 w-full space-x-1 text-sm">
      <Link
        className="flex w-3/5 flex-col items-center justify-center rounded-md bg-yellow shadow-sm transition-colors duration-75 hover:bg-opacity-80"
        href="/AddListing"
      >
        <PlusIcon className="mb-2 size-4" /> Create Listing
      </Link>
      <Link
        className="flex w-2/5 flex-col items-center justify-center rounded-md bg-light shadow-sm transition-colors duration-75 hover:bg-opacity-50"
        href="/EditListing"
      >
        <PencilSquareIcon className="mb-2 size-4" /> Edit Listing
      </Link>
    </div>
  );
};

export default ListingButtons;
