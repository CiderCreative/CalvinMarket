import React from "react";

const ItemTags = () => {
  // Parse the tags string into an object
  let properties = {};
  try {
    const parsedTags = JSON.parse(tags);
    properties = parsedTags.properties || {};
  } catch (e) {
    console.error("Failed to parse tags", e);
  }

  return (
    <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-5">
      {Object.entries(properties).map(([key, value]) => (
        <React.Fragment key={key}>
          <p className="font-bold">
            {key.charAt(0).toUpperCase() +
              key
                .slice(1)
                .replace(/([A-Z])/g, " $1")
                .trim()}
          </p>
          <p>{String(value)}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemTags;
