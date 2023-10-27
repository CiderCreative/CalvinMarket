"use client"
import React, { useState } from 'react'
import {Carousel} from "@/components/Item/index"

const ItemCarousel = () => {
  const colors = [ "bg-[#123456]", "bg-[#AABBCC]", "bg-[#FF9900]", "bg-[#00FF00]", "bg-[#FF0000]", "bg-[#6600CC]", "bg-[#0099FF]", "bg-[#992233]", "bg-[#00CC99]" ];

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        <Carousel colors={colors}>
          {colors.map((idx) => (<div key={idx} />))}
        </Carousel>
      </div>
    </div>
  )
}

export default ItemCarousel