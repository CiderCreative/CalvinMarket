import React from 'react'

const QuickMessage = () => {
  const messageIcon = <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/></svg>
  return (
    <div className="fixed w-full bottom-3">

      <div className="flex items-center space-x-2">
        {messageIcon}
        <p className="text-md font-regular">Send the seller a message</p>
      </div>

      <input className="p-2 w-1/4 mt-1 mb-2 input-clear bg-opposite bg-opacity-10 border-2 border-opposite border-opacity-50 rounded-lg" defaultValue="Hello is this available?"></input>

      <button className="flex justify-center w-1/4 py-1 bg-yellow text-dark text-sm font-semibold rounded-lg">Send</button>

    </div>
  )
}

export default QuickMessage