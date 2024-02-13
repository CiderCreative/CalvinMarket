import React, { useState, useEffect } from "react";

const ItemTags = ({ tags }) => {
  // Parse the tags string into an object
  const [properties, setProperties] = useState(JSON.parse(tags) || {});

  useEffect(() => setProperties(JSON.parse(tags) || {}), [tags]);

  return (
    <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-5 xl:grid-cols-4">
      {Object.entries(properties).map(([key, value]) => (
        <React.Fragment key={key}>
          <p className="font-medium">
            {key.charAt(0).toUpperCase() +
              key
                .slice(1)
                .replace(/([A-Z])/g, " $1")
                .trim()}
          </p>
          <p className="text-subtle">{String(value)}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemTags;
