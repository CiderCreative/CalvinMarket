import React from 'react'

const ReceivedMessage = ({text}) => {
  return (
    <div className="flex justify-start">
      <div className="px-3 py-5 bg-maroon text-white dark:text-opacity-80 rounded-xl rounded-bl-none max-w-2/3 ">
        {text}
      </div>
    </div>
  )
}

export default ReceivedMessage