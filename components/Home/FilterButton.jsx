import React from 'react'

const FilterButton = ({text, icon}) => {
  return (
    <div>
      <p>{text}</p>
      {icon}
    </div>
  )
}

export default FilterButton