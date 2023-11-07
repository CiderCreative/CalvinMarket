"use client"
import React, { useState, useEffect } from 'react'
import {Carousel, ImageContainer} from "./index"
import {apiLimiter} from '../../utils/rateLimiter'
import loadingImg from '../../constants/loadingImage.png'

const ItemCarousel = ({imageKeys}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);  // Controls which primary image to display
  const [urls, setUrls] = useState([loadingImg]);         // List of urls for images
  const imageKeyList = imageKeys.slice(1,-1).split(",")        // Image key list is the names of the images

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imgPromises = await apiLimiter.getImage(imageKeyList)
        const imageURLs = await Promise.all(imgPromises);
        setUrls(imageURLs);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
      }
    };
    if(imageKeyList[0] !== ""){
      fetchImageURLs();
    }
  }, [imageKeys]);

  return (
    <div className="overflow-x-hidden w-full h-full">

      {/* Display a single image -- with cycling functionality */}
      <Carousel
        index={carouselIndex}
        setIndex={setCarouselIndex}
        urls={urls}
      />

      {/* Display small previews of images */}
      <ImageContainer
        index={carouselIndex}
        setIndex={setCarouselIndex}
        urls={urls}
      />

    </div>
  )
}

export default ItemCarousel