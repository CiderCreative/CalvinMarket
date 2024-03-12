import React, { useState, useRef } from "react";

const ItemDescription = ({ description }) => {
  const [fullDesc, setFullDesc] = useState(false);
  const descRef = useRef(null);

  return (
    <div className="pt-10 text-base md:pt-5">
      <div
        className={`relative mt-10 overflow-y-hidden ${
          fullDesc ? "h-auto" : "max-h-[50vh] lg:max-h-[200px]"
        }`}
      >
        <p
          className="mb-10 h-full overflow-y-auto lg:overflow-y-clip"
          ref={descRef}
        >
          {description}
        </p>
        {descRef && descRef.current?.scrollHeight > 200 && (
          <button
            onClick={() => setFullDesc(!fullDesc)}
            className="absolute bottom-0 w-full rounded-b-md bg-primary py-2 text-center text-xs transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            {fullDesc ? "Minimize" : "Read full description"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
