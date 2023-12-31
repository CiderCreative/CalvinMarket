import React from 'react'

const Searchbar = () => {
  const searchIcon = <svg className="w-4 bg-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
  const placeholder = "Search"
  return (
    <div className="flex items-center border-[1.5px] border-dark dark:border-light border-opacity-50 rounded-md w-[500px] px-5 py-2 space-x-3">
      {searchIcon}
      <input type="text" autoComplete="off" id="name" placeholder={placeholder} className="bg-transparent w-full border-transparent focus:outline-none focus:shadow-none"/>
    </div>
  )
}

export default Searchbar