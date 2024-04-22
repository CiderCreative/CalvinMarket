"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
/**
 * Special functions:
 * - error handles
 * - loads low quality first, and then high quality, then loads rest of images on page
 * - slow pulse loading animation that fades into the image
 */

const AdvancedImage = ({
  src,
  alt,
  className,
  minQuality = 25,
  maxQuality = 25,
  draggable = false,
  priority = false,
}) => {
  const [attempt, setAttempt] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingHighQuality, setLoadingHighQuality] = useState("not loading"); //waits to load until the lower quality img is loaded
  const transparentImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/B8AAwAB/DEdE5YAAAAASUVORK5CYII=";

  const handleError = (e) => {
    if (attempt < 2) {
      // Retry up to 3 times
      setAttempt(attempt + 1);
    }
  };

  return (
    <>
      {isLoading && (
        <Image
          src={transparentImage}
          width={src.width || 500}
          height={src.height || 500}
          alt="loading image"
          className={`${className} max-h-${src.height} max-w-${src.width} slow-pulse animate-pulse rounded-lg bg-gradient-to-r from-[#eae9e9] to-[#f6f5f5]`}
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={src.width || 500}
        height={src.height || 500}
        key={attempt} // This is the key to re-render the image
        draggable={draggable}
        quality={loadingHighQuality === "not loading" ? minQuality : maxQuality} // Load low quality first
        className={`${isLoading ? "absolute h-0 w-0" : className}`}
        onLoad={() => {
          setIsLoading(src.includes("picsum.photos"));
          if (loadingHighQuality === "picsum.photos") {
            setLoadingHighQuality("loaded");
          } else if (loadingHighQuality === "not loading") {
            setLoadingHighQuality("loading"); // Load high quality on load
          }
        }}
        onError={loadingHighQuality !== "loaded" ? handleError : false}
        priority={priority}
        loading={
          loadingHighQuality !== "loaded" && !priority ? "lazy" : "eager"
        } // load all images on the page once the high quality image is loaded
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1.0s",
        }}
      />
    </>
  );
};

export default AdvancedImage;
// This file relies on the following:
// - Putting this code in a global.css file:
//     .slow-pulse {
//         animation-duration: 5s; /* Change 5s to your desired duration */
//     }
