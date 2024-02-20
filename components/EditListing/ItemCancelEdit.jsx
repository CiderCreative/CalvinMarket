import React from "react";

const ItemCancelEdit = ({ setIsEditing }) => {
  return (
    <div
      onClick={() => setIsEditing(false)}
      className="cursor-pointer rounded-md bg-yellow px-8 py-2 text-dark shadow-sm transition-colors duration-100 ease-in-out hover:bg-opacity-70"
    >
      Cancel
    </div>
  );
};

export default ItemCancelEdit;
