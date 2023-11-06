import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from './index'

const SidebarMenu = ({item}) => {
  const {title, price, itemId, description, preferredMeetup, tags, profileId} = item;

  return (
    <div className="flex flex-col lg:fixed right-0 inset-y-0 lg:w-[400px] bg-light px-5 pt-10 m-auto">
      <ItemHeader title={title} price={price} dateAdded={itemId} preferredMeetup={preferredMeetup} />
      <ItemDescription tags={tags} description={description} />
      <SellerInfo profileId={profileId} />
      <QuickMessage />
  </div>
  )
}

export default SidebarMenu