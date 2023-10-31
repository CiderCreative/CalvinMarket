"use client"

import React from 'react'
import { ExitItem, ItemCarousel, SidebarMenu } from '../../../components/Item/index'

const page = ({params: {ItemId}}) => {
  return (
    <div>
      <ExitItem />
      <ItemCarousel />
      <SidebarMenu />
    </div>
  )
}

export default page