import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from './index'

const SidebarMenu = () => {
  return (
    <div className="flex flex-col fixed right-0 inset-y-0 bg-red-200 w-[400px]">
      <ItemHeader />
      <ItemDescription />
      <SellerInfo />
      <QuickMessage />
  </div>
  )
}

export default SidebarMenu