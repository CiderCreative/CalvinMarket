import React from "react";
import {
  ItemHeader,
  ItemTags,
  ItemDescription,
  SellerInfo,
  ItemButtons,
} from "./index";

const SidebarMenu = ({ item, setIsEditing }) => {
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
    <div className="h-full overflow-y-auto bg-gray px-20 pb-24 pt-40">
      <div className="flex max-w-4xl flex-col">
        {/* Title & Price */}
        <ItemHeader title={title} price={price} />
        <div className="my-10 h-[1px] w-full bg-dark/10 dark:bg-light/10" />

        {/* Tags & Desc */}
        <ItemTags tags={tags} />
        <ItemDescription description={description} />
        <div className="my-10 h-[1px] w-full bg-dark/10 dark:bg-light/10" />

        {/* Seller Info & Buttons */}
        <div className="flex items-center justify-between">
          <SellerInfo profileId={profileId} />
          <ItemButtons setIsEditing={setIsEditing} item={item} />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
