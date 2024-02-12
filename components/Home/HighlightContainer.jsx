import React from "react";
import { ItemHighlight } from "./index";

const HighlightContainer = ({ text, data }) => {
  return (
    <div className="m-auto max-w-[1500px] px-2 py-10 sm:px-10">
      <h3 className="text-subtle mb-5 text-lg font-bold md:text-xl xl:text-2xl">
        {text}
      </h3>
      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((item, index) => {
          return <ItemHighlight key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HighlightContainer;
