import React from "react";
import { StarRating } from "../Profile/index";
import { UserIcon } from "@heroicons/react/24/outline";

const SellerInfo = ({ profileId }) => {
  return (
    <div>
      <div className="mt-3 flex space-x-5">
        {/* User Icon */}
        <div className="size-16 flex aspect-square items-center justify-center rounded-full bg-light shadow-sm">
          <UserIcon className="size-5 rounded-full text-dark" />
        </div>

        <div className="flex flex-col space-y-1">
          <p className="text-base font-semibold">{profileId}</p>
          <StarRating />
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
