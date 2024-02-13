import React from "react";

const ItemHeader = ({ title, price }) => {
  return (
    <div className="text-lg font-semibold dark:text-light md:text-xl lg:text-2xl xl:text-3xl">
      {/* Title & Price */}
      <div className="flex justify-between max-sm:flex-col">
        <h1 className="mb-2 max-md:text-xl">{title}</h1>
        <h2>{price > 0 ? `$${price}` : "Free"}</h2>
      </div>
    </div>
  );
};

export default ItemHeader;
