"use client"
import React, { useState } from 'react'
import { CurrentConversationContainer, CurrentConversationHeader, MessagesSidebar } from "../../components/Messages/index.js"
import wayfinder from "../../public/wayfinder.svg"

const peopleList = [
  { name: "Emily Rodriguez",  image: wayfinder },
  { name: "Jordan Smith",     image: wayfinder },
  { name: "Carlos Gonzalez",  image: wayfinder },
  { name: "Alex Turner",      image: wayfinder },
  { name: "Olivia Kim",       image: wayfinder },
  { name: "Sophia Williams",  image: wayfinder },
  { name: "Vanessa Patel",    image: wayfinder }
];

const Messages = () => {
  const [ activePerson, setActivePerson ] = useState(peopleList[0]);
  const [ sidebarOpen,  setSidebarOpen  ] = useState(true);

  return (
    <div>
      {/* Conversation selector in sidebar menu */}
      <MessagesSidebar
        activePerson={activePerson}
        setActivePerson={setActivePerson}
        peopleList={peopleList}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main messages content */}
      <div className={`transition-all duration-200 ${sidebarOpen ? "pl-[300px]" : "pl-[100px]" }`}>
        <CurrentConversationHeader activePerson={activePerson} />
        <CurrentConversationContainer />
      </div>

    </div>
  )
}

export default Messages