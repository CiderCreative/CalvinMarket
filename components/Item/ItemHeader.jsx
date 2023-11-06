import React from 'react'
import { MessageButton, FavoriteButton, MoreOptionsButton } from '../Item/index'

const ItemHeader = ({title, price, dateAdded, preferredMeetup}) => {
  const pickupIcon = <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/></svg>

  // Calculate distance from now to dateAdded
  const currentDate = new Date();
  const pastDate = new Date(parseInt(dateAdded));
  const differenceInTime = currentDate.getTime() - pastDate.getTime();

  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const differenceInHours = Math.floor(differenceInTime / (1000 * 3600));
  const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));

  let timeAgo;
  if (differenceInDays > 0) {
    timeAgo = `${differenceInDays} day${differenceInDays > 1 ? 's' : ''} ago`;
  } else if (differenceInHours > 0) {
    timeAgo = `${differenceInHours} hour${differenceInHours > 1 ? 's' : ''} ago`;
  } else {
    timeAgo = `${differenceInMinutes} minute${differenceInMinutes > 1 ? 's' : ''} ago`;
  }

  return (
    <div>
      <h3 className="text-lg sm:text-xl xl:text-2xl font-black">{title}</h3>
      <p className="text-xl font-semibold">{price > 0 ? `$${price}` : 'Free'}</p>
      <p className="text-sm font-normal">{timeAgo}</p>
      <div className="flex items-center space-x-2 text-lg font-normal mt-3">
        {pickupIcon}
        <p>{preferredMeetup}</p>
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