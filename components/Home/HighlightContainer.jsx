import React, { useState } from 'react'
import { ItemHighlight } from './index'


const HighlightContainer = ({text}) => {
  return (
    <div className="px-0 sm:p-10 py-10">
      <h3 className="text-2xl font-bold mb-5">{text}</h3>
      <div className="flex flex-wrap">
        <ItemHighlight price="33" title="Math 251 Textbook" detail="978-1234567890" />
        <ItemHighlight price="72" title="Vintage Watch" detail="9/22/2023" />
        <ItemHighlight price="0" title="House Plant" detail="5/12/2022" />
        <ItemHighlight price="49" title="Gaming Laptop" detail="7/18/2022" />
        <ItemHighlight price="25" title="Physics 133 Book - USED" detail="561678279" />
      </div>
    </div>
  )
}

export default HighlightContainer
