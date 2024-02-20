import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

const StarRating = () => {
  return (
    <div className="flex items-center space-x-0.5">
      <StarIcon className="size-5 text-dark dark:text-light" />
      <StarIcon className="size-5 text-dark dark:text-light" />
      <StarIcon className="size-5 text-dark dark:text-light" />
      <StarIcon className="size-5 text-dark dark:text-light" />
      <StarOutlineIcon className="size-5 text-dark dark:text-light" />
      <p className="pl-1 text-xs">(5)</p>
    </div>
  );
};

export default StarRating;
