import React from 'react'

const ItemHighlight = ({price, title, detail}) => {
  return (
    <div className="flex flex-col hover:scale-105 transition-transform duration-200 ease-in-out hover:cursor-pointer">
      <div className="bg-maroon aspect-square w-[200px] flex-shrink-0" />
      <p className="text-md leading-5 pt-1">{price > 0 ? `$${price}` : "Free"}</p>
      <p className="text-md font-bold">{title}</p>
      <p className="text-xs font-light">{detail}</p>
    </div>
  )
}

export default ItemHighlight