import React from 'react'
import { ItemHighlight } from './index'

const HighlightContainer = ({text}) => {
  return (
    <div className="p-10">
      <h3 className="text-2xl font-bold mb-5">{text}</h3>
      <div className="grid grid-cols-4 gap-10">
        <ItemHighlight price="33" title="Math 251 Textbook" detail="978-1234567890" />
        <ItemHighlight price="72" title="Vintage Watch" detail="978-9876543210" />
        <ItemHighlight price="0" title="House Plant" detail="5/12/2022" />
        <ItemHighlight price="49" title="Gaming Laptop" detail="7/18/2022" />
      </div>
    </div>
  )
}

export default HighlightContainer