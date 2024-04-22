import AdvancedImage from "../AdvancedImage";
import React from "react";

const ImageContainer = ({ urls, index, setIndex }) => {
  return (
    <div className="flex justify-center space-x-2 md:space-x-5">
      {urls.map((image, idx) => (
        <AdvancedImage
          src={image}
          key={idx}
          draggable="false"
          alt=""
          onClick={() => setIndex(idx)}
          height={100}
          width={100}
          className={`aspect-square w-10 object-cover transition-all duration-200 hover:cursor-pointer md:w-12
          ${
            index === idx
              ? "border-y-4 border-black p-1 opacity-100"
              : "opacity-50"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
