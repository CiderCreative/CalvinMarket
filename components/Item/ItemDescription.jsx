import React, { useState } from "react";

const ItemDescription = ({ tags, description }) => {
  // Parse the tags string into an object
  let properties = {};
  try {
    const parsedTags = JSON.parse(tags);
    properties = parsedTags.properties || {};
  } catch (e) {
    console.error("Failed to parse tags", e);
  }

  const [fullDesc, setFullDesc] = useState(false);

  return (
    <div className="pt-10 md:pt-5 text-base">
      <h4 className="text-xl font-bold">Item Details</h4>

      <div className="grid grid-cols-2 mt-3 gap-y-2">
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

      <div
        className={`relative mt-10  overflow-hidden ${
          fullDesc ? "h-auto" : "h-[50vh] lg:h-[200px]"
        }`}
      >
        <p className="h-full overflow-y-auto lg:overflow-y-clip mb-10">
          {description}
        </p>
        <button
          onClick={() => setFullDesc(!fullDesc)}
          className="absolute w-full text-center bottom-0 text-xs py-2 bg-primary hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-b-xl transition-colors"
        >
          {fullDesc ? "Minimize" : "Read full description"}
        </button>
      </div>
    </div>
  );
};

export default ItemDescription;
