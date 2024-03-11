import React, { useState, useRef, useEffect } from "react";

const ItemDescription = ({ description }) => {
  const [fullDesc, setFullDesc] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Check if the description height is greater than 200px
    if (descriptionRef.current.clientHeight > 200) {
      setFullDesc(true);
    }
  }, []);

  return (
    <div className="pt-10 text-base md:pt-5">
      <div
        className={`relative mt-10 overflow-hidden ${
          fullDesc ? "h-auto" : "h-[50vh] lg:h-[200px]"
        }`}
      >
        <p
          ref={descriptionRef}
          className="mb-10 h-full overflow-y-auto lg:overflow-y-clip"
        >
          {description}
        </p>
        {fullDesc && (
          <button
            onClick={() => setFullDesc(!fullDesc)}
            className="absolute bottom-0 w-full rounded-b-xl bg-primary py-2 text-center text-xs transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            {fullDesc ? "Minimize" : "Read full description"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
