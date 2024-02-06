import React from "react";
import { MoreOptionsButton, FavoriteButton, MessageButton } from "./index";

const ItemButtons = () => {
  return (
    <div className="flex space-x-3">
      <MoreOptionsButton />
      <FavoriteButton />
      <MessageButton />
    </div>
  );
};

export default ItemButtons;
