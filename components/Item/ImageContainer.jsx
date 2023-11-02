import Image from 'next/image'
import React from 'react'

const ImageContainer = ({urls, index, setIndex}) => {
  return (
    <div className="flex space-x-2 md:space-x-5 justify-center mt-10">
      {urls.map((image, idx) => (
        <Image
          src={image}
          key={idx}
          draggable="false"
          alt=""
          onClick={() => setIndex(idx)}
          height={100}
          width={100}
          className={`aspect-square w-10 md:w-12 object-cover hover:cursor-pointer transition-all duration-200
          ${index === idx ? "opacity-100 border-black border-y-4 p-1" : "opacity-50"}`}
        />
      ))}
    </div>
  )
}

export default ImageContainer