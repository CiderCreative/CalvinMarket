import React from 'react'
import { ItemCarousel, SidebarMenu } from '@/components/Item/index'

const page = ({params: {ItemId}}) => {
  return (
    <div>
      <ItemCarousel />
      <SidebarMenu />
    </div>
  )
}

export default page