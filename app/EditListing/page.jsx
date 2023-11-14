"use client"

import React from 'react'
import { ExitItem, ItemCarousel, SidebarMenu } from '../../components/Item/index'
import EditSidebarMenu from '../../components/Item/EditItem/EditSidebarMenu'

const page = ({params: {ItemId}}) => {
  return (
    <div>
      {/* <ExitItem />
      <ItemCarousel /> */}
      <EditSidebarMenu/>
    </div>
  )
}

export default page