import React from 'react'
import { StarRating } from "../Profile/index"

const SellerInfo = () => {
  const user = <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/></svg>
  return (
    <div className="mt-5" >
      <p className="text-xl font-bold">Seller Information</p>

      <div className="flex space-x-5 mt-3">
        <p className="p-5 bg-gray-300 aspect-square  rounded-full">{user}</p>

        <div className="flex flex-col">
          <p className="text-md font-bold">Diane Sorrento (des3)</p>
          <StarRating />
        </div>

      </div>

    </div>
  )
}

export default SellerInfo