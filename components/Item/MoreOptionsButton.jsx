import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const MoreOptionsButton = () => {
  return (
    <div className="flex items-center rounded-lg bg-light px-5 py-3 shadow-sm transition-opacity duration-100 hover:cursor-pointer hover:bg-neutral-100 dark:bg-neutral-700">
      <EllipsisHorizontalIcon className="size-5 text-dark" />
    </div>
  );
};

export default MoreOptionsButton;
