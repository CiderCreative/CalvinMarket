"use client"
import React from 'react'
import {Carousel} from "./index"
import { JacketItem } from "../../public/FakeItem/index"

const ItemCarousel = () => {

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        <Carousel item={JacketItem} />
      </div>
    </div>
  )
}

export default ItemCarousel