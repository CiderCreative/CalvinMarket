"use client"
import React, { useState, useEffect } from 'react'
import { ExitItem, ItemCarousel, SidebarMenu } from '../../../components/Item/index'

const Page = ({params: {ItemId}}) => {
  const [item, setItem] = useState([{imageKeys:"[]"}]);

  useEffect(()=>{
    // Get item from DB
    const getItems = async() => {
      const response = await fetch(`/api/items/get`, {
        method:"POST",
        body: JSON.stringify({
          "filter":`itemId = ${ItemId.substring(0,ItemId.length-3)}`
        })
      })
      .then((res) => res.json())
      .then((data) => setItem(data.Items))
    }

    getItems();
}, [ItemId])
  return (

    <div>
      <ExitItem />
      <ItemCarousel item={item[0].imageKeys}/>
      <SidebarMenu item={item[0]}/>
    </div>
  )
}

export default Page