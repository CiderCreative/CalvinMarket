import React, { useState } from 'react'
import { ItemHighlight } from './index'


const HighlightContainer = ({text, data}) => {
  return (
    <div className="px-0 sm:p-10 py-10">
      <h3 className="text-2xl font-bold mb-5">{text}</h3>
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          return <ItemHighlight key={index} item={item}/>
        })}
      </div>
    </div>
  )
}


export default HighlightContainer
