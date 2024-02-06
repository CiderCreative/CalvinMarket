import React from "react";
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from "./index";

const SidebarMenu = ({ item }) => {
  const {
    title,
    price,
    itemId,
    description,
    preferredMeetup,
    tags,
    profileId,
  } = item;

  return (
    <div className="h-full bg-gray px-20 pt-40">
      <div className="flex max-w-4xl flex-col">
        {/* Title & Price */}
        <ItemHeader title={title} price={price} />

        {/* Tags & Desc */}
        <ItemDescription tags={tags} description={description} />

        {/*  */}
        <SellerInfo profileId={profileId} />

        {/* Buttons */}
        <></>
      </div>
    </div>
  );
};

export default SidebarMenu;
