import React from 'react'
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

  const MessagesSidebar = ({activePerson, setActivePerson, peopleList, sidebarOpen, setSidebarOpen}) => {
  const Router = useRouter(); //Router objec

  return (
    <div className={`fixed left-0 h-screen py-5 shadow-xl transition-all duration-200 text-primary ${sidebarOpen ? "w-[300px]" : "w-[100px]"}`}>

      {/* Button menu -- top  */}
      <div className="flex justify-between mb-10 px-5">
        <XMarkIcon onClick={() => Router.back()} className="aspect-square h-8 hover:cursor-pointer"/>
        <ChevronLeftIcon className={`aspect-square h-8 hover:cursor-pointer transition-transform duration-200 ${sidebarOpen ? "rotate-0" : "rotate-180" }`} onClick={() => setSidebarOpen(!sidebarOpen)}/>
      </div>

      <div className="w-full space-y-2 px-5">
        {/* Each person's preview  */}
        {peopleList.map((person, idx) => (
          <div
            key={idx}
            className="w-full flex items-center space-x-8 py-4 px-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-[1px] border-transparent hover:border-opposite/20 rounded-xl hover:cursor-pointer"
            onClick={() => setActivePerson(person)}
          >
            <Image src={person.image} alt={`Profile picture of ${person.name}`} className="aspect-square w-6 h-6" draggable={false} />
            {sidebarOpen && <p className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">{person.name}</p>}
          </div>
        ))}
      </div>

    </div>
  )
}

export default MessagesSidebar