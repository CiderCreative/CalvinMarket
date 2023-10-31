"use client"

import React from 'react'
import { SidebarMenu } from '../../../components/Item/index'

const page = ({params: {ItemId}}) => {
  return (
    <div>
      <SidebarMenu />
    </div>
  )
}

export default page