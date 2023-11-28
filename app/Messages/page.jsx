"use client"
import {Amplify} from '@aws-amplify/core'
import * as gen from '../../constants/backend/generated'
import React, { useState, useEffect, useRef, use } from 'react'
import { CurrentConversationContainer, CurrentConversationHeader, MessagesSidebar, TypeMessage } from "../../components/Messages/index.js"
import wayfinder from "../../public/wayfinder.svg"
import { MessageHandler } from "../../utils/MessageHandler"
import { useSession } from 'next-auth/react'
const peopleList = [
  { name: "Emily Rodriguez",  image: wayfinder },
  { name: "Jordan Smith",     image: wayfinder },
  { name: "Carlos Gonzalez",  image: wayfinder },
  { name: "Alex Turner",      image: wayfinder },
  { name: "Olivia Kim",       image: wayfinder },
  { name: "Sophia Williams",  image: wayfinder },
  { name: "Vanessa Patel",    image: wayfinder }
];


Amplify.configure(gen.config)

const Messages = () => {
  const session = useSession();
  const [ activePerson, setActivePerson ] = useState(peopleList[0]);
  const [ sidebarOpen,  setSidebarOpen  ] = useState(true);
  const [ messages,     setMessages     ] = useState([]);
  const [ newMessage,   setNewMessage   ] = useState(null);

  const messageHandler = useRef(new MessageHandler(session.data.user.email, (msg) => {setNewMessage(msg)})).current;

  async function handleSubmit(e, msg) {
      e.preventDefault()
      e.stopPropagation()
      await gen.publish(Math.round((Date.now()-1700179470000)/100), session.data.user.email, msg, activePerson.name);
  }

  useEffect(() => {setMessages(messageHandler.getMessages()); }, [newMessage])

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
        <CurrentConversationHeader      activePerson={activePerson} />
        <CurrentConversationContainer   messagesArray={messages[activePerson.name] || []}    userId={session.data.user.email}/>
        <TypeMessage  onSubmit={handleSubmit}       sidebarOpen={sidebarOpen}   />
      </div>

    </div>
  )
}

export default Messages