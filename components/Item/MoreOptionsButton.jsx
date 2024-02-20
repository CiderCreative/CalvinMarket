import React, { useState, useEffect } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const MoreOptionsButton = ({ setIsEditing, item }) => {
  const [dropdown, setDropdown] = useState(false);

  // Close Dropdown on click away (outside of menu)
  useEffect(() => {
    const clickAway = (event) => {
      if (dropdown && !event.target.closest(".click-away")) setDropdown(false);
    };
    document.addEventListener("mousedown", clickAway);
    return () => {
      document.removeEventListener("mousedown", clickAway);
    };
  }, [dropdown]);

  return (
    <div
      className="click-away relative flex items-center rounded-lg bg-light px-5 shadow-sm transition-opacity duration-75 hover:cursor-pointer hover:bg-neutral-100 dark:bg-neutral-700 hover:dark:bg-neutral-800"
      onClick={() => setDropdown(!dropdown)}
    >
      {/* More Options Box */}
      <EllipsisHorizontalIcon className="size-5 text-primary" />

      {/* Dropdown options */}
      {dropdown && (
        <div className="absolute left-0 top-10 z-10 flex max-h-80 flex-col overflow-y-auto rounded-md bg-primary">
          <button
            className="p-3 hover:bg-neutral-200 hover:dark:bg-neutral-800"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="p-3 hover:bg-neutral-200 hover:dark:bg-neutral-800"
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

function onDelete(item) {
  fetch("/api/items/delete", {
    method: "DELETE",
    body: JSON.stringify({ item }),
  }).then((res) => res.json());
}

export default MoreOptionsButton;
