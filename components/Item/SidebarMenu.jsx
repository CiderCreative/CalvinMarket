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
    <div className="relative flex flex-col bg-primary px-5 pt-10 m-auto max-w-full h-full p-5">
      {/* show item if not editing */}
      <div className="overflow-y-auto w-full h-auto pb-[136px]">
        <ItemHeader
          title={title}
          price={price}
          dateAdded={itemId}
          preferredMeetup={preferredMeetup}
        />
        <ItemDescription tags={tags} description={description} />
        <SellerInfo profileId={profileId} />
      </div>

      {/* allow edits if user is editing */}

      <QuickMessage />
    </div>
  );
};

export default SidebarMenu;
