"use client"
import React, { useState } from 'react'
import {Carousel, ImageContainer} from "./index"

const ItemCarousel = ({item}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);  //controls which primary image to display

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        {/* Display a single image -- with cycling functionality */}
        <Carousel       imageKeys={item} index={carouselIndex} setIndex={setCarouselIndex} />
        {/* Display small previews of images */}
        <ImageContainer item={item} index={carouselIndex} setIndex={setCarouselIndex} />
      </div>
    </div>
  )
}

export default ItemCarousel