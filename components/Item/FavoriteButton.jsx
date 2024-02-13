import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";

const FavoriteButton = () => {
  const [isHearted, setIsHearted] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center rounded-lg bg-light px-7 py-3 shadow-sm transition-opacity duration-100 hover:cursor-pointer hover:bg-neutral-100 dark:bg-neutral-700 hover:dark:bg-neutral-800"
      onClick={() => setIsHearted(!isHearted)}
    >
      <HeartIcon
        className={`absolute size-5 ${isHearted ? "opacity-100" : "opacity-0"} text-primary transition-opacity duration-300 `}
      />
      <HeartOutlineIcon
        className={`absolute size-5 ${!isHearted ? "opacity-100" : "opacity-0"} text-primary transition-opacity duration-300 `}
      />
    </div>
  );
};

export default FavoriteButton;
