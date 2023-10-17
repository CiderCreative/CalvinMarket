import React, { useState } from 'react'
import { ItemHighlight } from './index'


const HighlightContainer = ({text}) => {
  return (
    <div className="p-10">
      <h3 className="text-2xl font-bold mb-5">{text}</h3>
      <div className={`grid grid-cols-${calculateGridItemsPerRow(useState.screenWidth)} gap-10`}>
        <ItemHighlight price="33" title="Math 251 Textbook" detail="978-1234567890" />
        <ItemHighlight price="72" title="Vintage Watch" detail="978-9876543210" />
        <ItemHighlight price="0" title="House Plant" detail="5/12/2022" />
        <ItemHighlight price="49" title="Gaming Laptop" detail="7/18/2022" />
      </div>
    </div>
  )
}

export default HighlightContainer

function calculateGridItemsPerRow(screenWidth) {
  let itemSize;

  // Determine ItemHighlight size based on screen width
  if (screenWidth >= 1024) {
    itemSize = 200; // Large screens
  } else if (screenWidth >= 768) {
    itemSize = 150; // Medium screens
  } else {
    itemSize = 100; // Small screens
  }

  // Calculate the number of items that can fit per row
  const itemsPerRow = Math.floor(screenWidth / itemSize);
  console.log(itemsPerRow)
  return itemsPerRow;
}