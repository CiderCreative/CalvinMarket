import React from "react";

const ItemHeader = ({ title, price }) => {
  return (
    <div className="text-3xl font-semibold dark:text-light">
      {/* Title & Price */}
      <div className="flex justify-between">
        <h1>{title}</h1>
        <h2>{price > 0 ? `$${price}` : "Free"}</h2>
      </div>

      <div className="my-10 h-[1px] w-full bg-dark/10 dark:bg-light/10" />
    </div>
  );
};

export default ItemHeader;
