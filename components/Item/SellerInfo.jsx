import React from "react";
import { StarRating } from "../Profile/index";
import { UserIcon } from "@heroicons/react/24/outline";

const SellerInfo = ({ profileId }) => {
  return (
    <div>
      <div className="mt-3 flex space-x-5">
        {/* User Icon */}
        <div className="flex aspect-square size-16 items-center justify-center rounded-full bg-light shadow-sm dark:bg-dark">
          <UserIcon className="size-5 rounded-full text-dark dark:text-light" />
        </div>

        <div className="flex flex-col space-y-1">
          <p className="text-base font-medium">{profileId}</p>
          <StarRating />
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
