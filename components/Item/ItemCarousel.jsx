"use client"
import React, { useState } from 'react'
import {Carousel} from "@/components/Item/index"

const ItemCarousel = () => {
  const [index, setIndex] = useState(0)
  const colors = [ "bg-[#123456]", "bg-[#AABBCC]", "bg-[#FF9900]", "bg-[#00FF00]", "bg-[#FF0000]", "bg-[#6600CC]", "bg-[#0099FF]", "bg-[#992233]", "bg-[#00CC99]" ];

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        <Carousel index={index} colors={colors}>
          {colors.map((style, idx) => (<div key={idx} className={`aspect-square w-[500px] ${style}`} />))}
        </Carousel>
      </div>
    </div>
  )
}

export default ItemCarousel