"use client"

import React, { useState, useEffect, useCallback } from 'react'
import {CarouselArrow} from "./index"
import Image from 'next/image'
import {apiLimiter} from '../../utils/rateLimiter'
import loadingImg from '../../constants/loadingImage.png'

const Carousel = ({imageKeys, index, setIndex}) => {
  const [distanceRight, setDistanceRight] = useState(0); //pos carousel is shifted from right


  const [urls, setUrls] = useState([loadingImg]);   //list of urls for images
  const imageKeyList = imageKeys.slice(1,-1).split(",")
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

  // Funcs to handle left & right arrow clicks -> sliding the carousel
  const handleLeft = useCallback(() => { setIndex((index - 1 + imageKeys.length) % imageKeys.length); }, [index, imageKeys, setIndex]);
  const handleRight = useCallback(() => { setIndex((index + 1) % imageKeys.length); }, [index, imageKeys, setIndex]);

  // Calculate right position when 'index' changes
  useEffect(() => {
    const rightPosition = index * 100 + "%";
    setDistanceRight(rightPosition);
  }, [index]);


  // Listen for ArrowLeft and ArrowRight key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);      //Listen for key presses
    return () => {
      window.removeEventListener('keydown', handleKeyDown); //Cleanup listener
    };
  }, [handleLeft, handleRight]);

  return (

    <div className='bg-dark relative w-[100%] h-full'>

      {/* The Carousel */}
      <div className="flex overflow-visible [&>*]:flex-shrink-0 relative transition-all duration-200 right-0" style={{right: distanceRight}}>
        {/* Create block for each review */}
        {urls.map((image, idx) => 
         {
          return( <div key={idx} className={`flex imageKeyss-center justify-center w-full h-[70vh] bg-primary`}>
            <Image className={`h-full w-auto`} src={image} draggable="false" alt="" width={600} height={600}/>
          </div>)}
          )}
      </div>

      <CarouselArrow direction="left" func={handleLeft}/>
      <CarouselArrow direction="right" func={handleRight}/>
    </div>
  )
}

export default Carousel