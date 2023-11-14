"use client"

import React from 'react'
import { EditSidebarMenu } from "../../components/EditListing/index.js"

const page = ({params: {ItemId}}) => {
  return (
    <div>
      <EditSidebarMenu/>
    </div>
  )
}

export default page