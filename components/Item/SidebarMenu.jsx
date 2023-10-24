import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from '.'

const SidebarMenu = () => {
  return (
    <div className="flex flex-col fixed right-0 inset-y-0 w-[400px]">
      <ItemHeader />
      <ItemDescription />
      <SellerInfo />
      <QuickMessage />
  </div>
  )
}

export default SidebarMenu