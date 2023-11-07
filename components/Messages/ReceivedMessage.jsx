import React from 'react'

const ReceivedMessage = ({text}) => {
  return (
    <div className="flex justify-start">
      <div className="px-3 py-5 bg-maroon text-white dark:text-opacity-80 rounded-xl rounded-bl-none xl:max-w-[800px] ">
        {text}
      </div>
    </div>
  )
}

export default ReceivedMessage