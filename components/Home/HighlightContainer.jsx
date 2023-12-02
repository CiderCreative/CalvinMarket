import React from "react";
import { ItemHighlight } from "./index";

const HighlightContainer = ({ text, data }) => {
  return (
    <div className="mx-2 sm:p-10 sm:py-10 max-w-[1500px] m-auto">
      <h3 className="text-2xl font-bold mb-5">{text}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-4">
        {data.map((item, index) => {
          return <ItemHighlight key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HighlightContainer;
