import React from 'react'
import { ItemHeader, ItemDescription, SellerInfo, QuickMessage } from '../index'
import {apparelType} from '../EditItem/ItemTypes/index'

const EditSidebarMenu = () => {
  return (
    <div className="flex flex-col fixed right-0 inset-y-0 w-[400px] bg-light px-5">
      {Object.keys(apparelType).map((key, index) => {
        let value = apparelType[key]
        return(
        <div key={index}>
          {value.type === "button" ? 
            <div>
              <div className="text-xl">{key}</div>
              {value.options.map((option, index) => (
                <button key={index}>{option}</button>
              ))}
            </div>
          : value.type === "drop-down" ?
            <div>
              <div>{key}</div>
              <select>
                {value.options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          : value.type === "text" ?
            <div>
              <div>{key}</div>
              <input type="text" placeholder={value.filler}/>
            </div>
          : null}
        </div>
      )})}
  </div>
  )
}

export default EditSidebarMenu