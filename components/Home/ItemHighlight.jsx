import React from 'react'

const ItemHighlight = ({price, title, detail}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-maroon aspect-square w-[200px] flex-shrink-0" />
      <p className="text-md">{price > 0 ? `$${price}` : "Free"}</p>
      <p className="text-md font-bold">{title}</p>
      <p className="text-xs font-light">{detail}</p>
    </div>
  )
}

export default ItemHighlight