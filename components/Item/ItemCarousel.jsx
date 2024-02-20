"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Carousel, ImageContainer, CarouselArrow } from "./index";
import { apiLimiter } from "../../utils/rateLimiter";
import loadingImg from "../../constants/loadingImage.png";

const ItemCarousel = ({ imageKeys }) => {
  const [carouselIndex, setCarouselIndex] = useState(0); // Controls which primary image to display
  const [urls, setUrls] = useState([loadingImg]); // List of urls for images
  const imageKeyList = imageKeys.slice(1, -1).split(","); // Image key list is the names of the images

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imgPromises = await apiLimiter.getImage(imageKeyList);
        const imageURLs = await Promise.all(imgPromises);
        setUrls(imageURLs);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
      }
    };
    if (imageKeyList[0] !== "") {
      fetchImageURLs();
    }
  }, [imageKeys]);

  // Funcs to handle left & right arrow clicks -> sliding the carousel
  const handleLeft = useCallback(() => {
    setCarouselIndex((carouselIndex - 1 + urls.length) % urls.length);
  }, [carouselIndex, urls, setCarouselIndex]);

  const handleRight = useCallback(() => {
    setCarouselIndex((carouselIndex + 1) % urls.length);
  }, [carouselIndex, urls, setCarouselIndex]);

  // Listen for ArrowLeft and ArrowRight key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };
    window.addEventListener("keydown", handleKeyDown); //Listen for key presses
    return () => {
      window.removeEventListener("keydown", handleKeyDown); //Cleanup listener
    };
  }, [handleLeft, handleRight]);

  return (
    <div className="h-full w-full overflow-x-hidden">
      {/* Display a single image -- with cycling functionality */}
      <Carousel
        index={carouselIndex}
        setIndex={setCarouselIndex}
        urls={urls}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />

      <div className="mx-5 mb-20 mt-10 flex items-center justify-center space-x-20">
        <CarouselArrow direction="left" func={handleLeft} />
        {/* Display small previews of images */}
        <ImageContainer
          index={carouselIndex}
          setIndex={setCarouselIndex}
          urls={urls}
        />
        <CarouselArrow direction="right" func={handleRight} />
      </div>
    </div>
  );
};

export default ItemCarousel;
