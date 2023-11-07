import React, { useState } from 'react'
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/20/solid'
import wayfinder from "../../public/wayfinder.svg"
import Image from 'next/image'

const people = [
  { name: "Emily Rodriguez",  image: wayfinder },
  { name: "Jordan Smith",     image: wayfinder },
  { name: "Carlos Gonzalez",  image: wayfinder },
  { name: "Alex Turner",      image: wayfinder },
  { name: "Olivia Kim",       image: wayfinder },
  { name: "Sophia Williams",  image: wayfinder },
  { name: "Vanessa Patel",    image: wayfinder }
];

const MessagesSidebar = () => {
  const [activePerson, setActivePerson] = useState(people[0].name);
  const [ sidebarOpen, setSidebarOpen ] = useState(true);

  return (
    <div className={`h-screen py-5 shadow-xl transition-all duration-200 ${sidebarOpen ? "w-[300px]" : "w-[100px]"}`}>

      {/* Button menu -- top  */}
      <div className="flex justify-between mb-10 px-5">
        <XMarkIcon className="aspect-square h-8 hover:cursor-pointer"/>
        <ChevronLeftIcon className={`aspect-square h-8 hover:cursor-pointer transition-transform duration-200 ${sidebarOpen ? "rotate-0" : "rotate-180" }`} onClick={() => setSidebarOpen(!sidebarOpen)}/>
      </div>

      <div className="w-full space-y-2 px-5">
        {/* Each person's preview  */}
        {people.map((person, idx) => (
          <div
            key={idx}
            className="w-full flex items-center space-x-8 py-4 px-5 hover:bg-neutral-200 border-[1px] border-transparent hover:border-dark/20 rounded-xl hover:cursor-pointer"
            onClick={() => setActivePerson(person.name)}
          >
            <Image src={person.image} alt={`Profile picture of ${person.name}`} className="aspect-square w-6 h-6"/>
            {sidebarOpen && <p className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">{person.name}</p>}
          </div>
        ))}
      </div>

    </div>
  )
}

export default MessagesSidebar