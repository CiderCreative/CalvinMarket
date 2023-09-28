import React from 'react'
import { filterButtonInfo } from '@/constants/filterButtonInfo'
import {FilterButton} from "@/components/Home/index"

const FilterContainer = () => {
  return (
    <div>
      {filterButtonInfo.map((filter, key) =>(
        <FilterButton key={key} text={filter.text} icon={filter.icon}/>
      ))}
    </div>
  )
}

export default FilterContainer