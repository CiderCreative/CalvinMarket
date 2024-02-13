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
    <div className="h-full overflow-y-auto bg-gray px-5 py-10 dark:bg-darkGray lg:px-20 lg:py-20">
      <div className="flex max-w-4xl flex-col">
        {/* Title & Price */}
        <ItemHeader title={title} price={price} />
        <div className="my-10 h-[1px] w-full bg-dark/10 dark:bg-light/10" />

        {/* Tags & Desc */}
        <ItemTags tags={tags} />
        <ItemDescription description={description} />
        <div className="my-10 h-[1px] w-full bg-dark/10 dark:bg-light/10" />

        {/* Seller Info & Buttons */}
        <div className="flex justify-between max-2xl:flex-col max-2xl:space-y-10 2xl:items-center">
          <SellerInfo profileId={profileId} />
          <ItemButtons
            setIsEditing={setIsEditing}
            item={item}
            profileId={profileId}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
