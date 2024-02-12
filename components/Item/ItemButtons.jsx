import React from "react";
import { MoreOptionsButton, FavoriteButton, MessageButton } from "./index";

const ItemButtons = ({ setIsEditing, item, profileId }) => {
  return (
    <div className="flex space-x-3">
      <MoreOptionsButton setIsEditing={setIsEditing} item={item} />
      <FavoriteButton />
      <MessageButton messageRecipient={profileId} />
    </div>
  );
};

export default ItemButtons;
