import React from "react";

const ItemCancelEdit = ({ setIsEditing }) => {
  return (
    <div
      onClick={() => setIsEditing(false)}
      className="cursor-pointer rounded-md bg-yellow px-8 py-2 text-center text-dark shadow-sm transition-colors duration-100 ease-in-out hover:bg-opacity-70 max-sm:order-2 max-sm:mt-5"
    >
      Cancel
    </div>
  );
};

export default ItemCancelEdit;
