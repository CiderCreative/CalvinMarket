import React from 'react'
import { useState } from 'react'

const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const settingsIcon = <svg class="w-6 h-6 text-opposite hover:fill-[#cccccc] hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/><path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g></svg>

  return (
    <div>
      <div onClick={() => {setSettingsOpen(!settingsOpen)}}>{settingsIcon}</div>
      <div className={`absolute space-y-5 p-5 top-10 right-20 border-2 border-opposite rounded-xl ${settingsOpen ? "visible" : "hidden"}`}>
        { darkMode ?
          (<svg onClick={() => {setDarkMode(!darkMode)}} className="w-6 h-6 text-opposite hover:cursor-pointer hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/></svg>)
          :
          (<svg onClick={() => {setDarkMode(!darkMode)}} className="w-6 h-6 text-opposite hover:cursor-pointer hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>)
        }
      <button className="inline-block bg-maroon text-light px-5 py-2 rounded-md hover:cursor-pointer hover:scale-[102%] transition-transform duration-100">Log out</button>

      <div>

      </div>

      </div>
    </div>
  )
}

export default Settings