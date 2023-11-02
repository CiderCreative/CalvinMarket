import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from './index'

const SidebarMenu = () => {
  return (
    <div className="flex flex-col xl:fixed right-0 inset-y-0 w-[400px] bg-light px-5">
      <ItemHeader />
      <ItemDescription />
      <SellerInfo />
      <QuickMessage />
  </div>
  )
}

export default SidebarMenu