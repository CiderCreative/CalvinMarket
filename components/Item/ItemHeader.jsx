import React from 'react'
import { MessageButton, FavoriteButton, MoreOptionsButton } from '@/components/Item/index'

const ItemHeader = () => {
  const pickupIcon = <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/></svg>

  return (
    <div>
      <h3 className="text-2xl font-black">Carhartt Jacket Large New</h3>
      <p className="text-xl font-semibold">$45</p>
      <p className="text-sm font-normal">Listed 5 days ago</p>
      <div className="flex items-center space-x-2 text-lg font-normal mt-3">
        {pickupIcon}
        <p>Dorm pickup</p>
      </div>

      <div className="flex space-x-5 mt-3">
        <MessageButton />
        <FavoriteButton />
        <MoreOptionsButton />
      </div>
    </div>
  )
}

export default ItemHeader