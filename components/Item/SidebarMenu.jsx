import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from './index'

const SidebarMenu = () => {
  return (
    <div className="flex flex-col lg:fixed right-0 inset-y-0 lg:w-[400px] bg-light px-5 pt-10 m-auto">
      <ItemHeader />
      <ItemDescription />
      <SellerInfo />
      <QuickMessage />
  </div>
  )
}

export default SidebarMenu