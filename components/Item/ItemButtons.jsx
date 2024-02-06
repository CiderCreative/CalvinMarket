import React from "react";
import { MoreOptionsButton, FavoriteButton, MessageButton } from "./index";

const ItemButtons = ({ setIsEditing, item }) => {
  return (
    <div className="flex space-x-3">
      <MoreOptionsButton setIsEditing={setIsEditing} item={item} />
      <FavoriteButton />
      <MessageButton />
    </div>
  );
};

export default ItemButtons;
