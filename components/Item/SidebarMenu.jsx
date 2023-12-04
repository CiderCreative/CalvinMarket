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
    <div className="flex flex-col bg-primary px-5 pt-10 m-auto w-full h-full p-5">
      <div className="overflow-y-scroll">
        <ItemHeader
          title={title}
          price={price}
          dateAdded={itemId}
          preferredMeetup={preferredMeetup}
        />
        <ItemDescription tags={tags} description={description} />
        <SellerInfo profileId={profileId} />
      </div>

      <QuickMessage />
    </div>
  );
};

export default SidebarMenu;
