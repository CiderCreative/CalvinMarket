import React from 'react'

const FilterButton = ({text, icon}) => {
  return (
    <div className="flex items-center space-x-5 hover:cursor-pointer hover:opacity-70 transition-opacity duration-100">

      <div className=" bg-yellow rounded-full p-1">
        <div className="aspect-square w-5 flex items-center justify-center">{icon}</div>
      </div>

      <p className="text-sm">{text}</p>

    </div>
)
}

export default FilterButton