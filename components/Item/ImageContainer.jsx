import Image from 'next/image'
import React from 'react'

const ImageContainer = ({item, index, setIndex}) => {
  return (
    <div className="flex justify-center space-x-5 mt-10">
      {item.map((image, idx) => (
        <div key={idx}>
          <Image
          src={image}
          alt=""
          onClick={() => setIndex(idx)}
          className={`aspect-square w-16 object-cover hover:cursor-pointer transition-all duration-200
          ${index === idx ? "opacity-100 border-black border-y-4 p-1" : "opacity-50"}`}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageContainer