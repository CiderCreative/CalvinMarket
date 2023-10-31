"use client"
import React, { useState } from 'react'
import {Carousel, ImageContainer} from "./index"
import { JacketItem } from "../../public/FakeItem/index"

const ItemCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        <Carousel item={JacketItem} index={carouselIndex} setIndex={setCarouselIndex} />
        <ImageContainer item={JacketItem} index={carouselIndex} setIndex={setCarouselIndex} />
      </div>
    </div>
  )
}

export default ItemCarousel