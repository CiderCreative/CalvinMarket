import React from 'react'
import Link from 'next/link'

const ItemHighlight = ({price, title, detail}) => {
  return (
    <Link href="/Item/1" className="flex flex-col hover:scale-[102%] w-[120px] md:w-[150px] xl:w-[200px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:cursor-pointer mr-10 mb-5">
      <div className="bg-maroon aspect-square w-[120px] md:w-[150px] xl:w-[200px] flex-shrink-0" />
      <p className="text-md leading-5 pt-1">{price > 0 ? `$${price}` : "Free"}</p>
      <p className="text-md font-bold">{title}</p>
      <p className="text-xs font-light">{detail}</p>
    </Link>
  )
}

export default ItemHighlight