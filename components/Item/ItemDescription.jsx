import React from 'react'

const ItemDescription = ({tags, description}) => {
    // Parse the tags string into an object
    let properties = {};
    try {
      const parsedTags = JSON.parse(tags);
      properties = parsedTags.properties || {};
    } catch (e) {
      console.error('Failed to parse tags', e);
    }

  return (
    <div className="mt-5 text-sm">
      <h4 className="text-xl font-bold">Item Details</h4>

      <div className="grid grid-cols-2 mt-3 mr-[100px] gap-y-2">
      {Object.entries(properties).map(([key, value]) => (
        <React.Fragment key={key}>
          <p className="font-bold">
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          </p>
          <p>{String(value)}</p>
        </React.Fragment>
      ))}
    </div>

      <p className="mt-4 h-[200px] overflow-y-scroll">{description}</p>
    </div>
  )
}

export default ItemDescription