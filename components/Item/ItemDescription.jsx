import React from 'react'

const ItemDescription = ({tags}) => {
  return (
    <div className="mt-5 text-sm">
      <h4 className="text-xl font-bold">Item Details</h4>

      <div className="grid grid-cols-2 mt-3 mr-[100px] gap-y-2">
        <p className="font-bold">Condition</p>
        <p>Like New</p>

        <p className="font-bold">Color</p>
        <p>Brown</p>

        <p className="font-bold">Men&apos;s Size</p>
        <p>Large</p>
      </div>

      <p className="mt-4">Men’s new Carhartt jacket size L made in USA. Never been worn. Does have EGS electrical group patch on it. You could probably put a different patch over it if you wanted to. Interior zip pocket. Interior Velcro pocket. 2 front pockets. Hooded. Sf/pf home. Dorm pickup from BB.</p>
    </div>
  )
}

export default ItemDescription