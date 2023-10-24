"use client"
import React, { useState } from 'react'
import {Carousel} from "@/components/Item/index"

const ItemCarousel = () => {
  const [index, setIndex] = useState(0)
  const colors = ['bg-[#553322]', 'bg-[#226699]', 'bg-[#990033]', 'bg-[#669922]', 'bg-[#CC4400]'];

  return (
    <div>
      <div className="overflow-x-hidden w-[calc(100vw-400px)]">
        <Carousel index={index}>
          {colors.map((style, idx) => (<div key={idx} className={`aspect-square w-[500px] ${style}`} />))}
        </Carousel>
      </div>
    </div>
  )
}

export default ItemCarousel