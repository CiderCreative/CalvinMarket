"use client"
import React, { useState, useEffect } from 'react'
import { ExitItem, ItemCarousel, SidebarMenu } from '../../../components/Item/index'

const Page = ({params: {ItemId}}) => {
  const [item, setItem] = useState([]);

  console.log(ItemId.substring(0,ItemId.length-3))

  useEffect(()=>{
    // Get item from DB
    const getItems = async() => {
      console.log("THIS part is running")
      const response = await fetch(`/api/items/get`, {
        method:"POST",
        body: JSON.stringify({
          "filter":`itemId = ${ItemId.substring(0,ItemId.length-3)}`
        })
      })
      const data = await response;
      console.log(data.json())
    }

    getItems();
}, [ItemId])

  return (

    <div>
      <ExitItem />
      <ItemCarousel imageKeys={item}/>
      <SidebarMenu item={item}/>
    </div>
  )
}

export default Page