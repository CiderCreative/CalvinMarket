import React from 'react'

const page = ({params: {ItemId}}) => {
  return (
    <div>
      {/* Sidebar with Item Details */}
      <div className="flex flex-col fixed right-0 inset-y-0 bg-red-200 w-[400px]">
        <p>Title</p>
        <p>Price</p>
        <p>Posted X days ago</p>
        <p>Pickup Method</p>

        <div className="flex space-x-5">
          <div className="bg-gray-300 px-6 py-3 rounded-lg">Message</div>
          <div className="bg-gray-300 px-6 py-3 rounded-lg">Heart</div>
          <div className="bg-gray-300 px-6 py-3 rounded-lg">...</div>
        </div>

        <p>Item Details</p>
        <div className="grid grid-cols-2">
          <p>Condition</p>
          <p>Like New</p>
          <p>Color</p>
          <p>Brown</p>
          <p>Men&apos;s Size</p>
          <p>Large</p>
        </div>
        <p>Men’s new Carhartt jacket size L made in USA. Never been worn. Does have EGS electrical group patch on it. You could probably put a different patch over it if you wanted to. Interior zip pocket. Interior Velcro pocket. 2 front pockets. Hooded. Sf/pf home. Dorm pickup from BB.</p>

        <p>Seller Information</p>
        <div className="flex">
          <p className="bg-gray-300 p-5 rounded-full">Pic</p>
          <div className="flex flex-col">
            <p>Username (email)</p>
            <p>Star rating (review count)</p>
          </div>
        </div>

        <div className="fixed w-full bottom-0 bg-red-500">
          <p>Send the seller a message</p>
          <p>Hello is this available?</p>
          <p>Send</p>
        </div>

      </div>
      {/* End of Sidebar */}

    </div>
  )
}

export default page