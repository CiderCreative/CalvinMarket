"use client";

import { Amplify } from "@aws-amplify/core";
import * as gen from "../../constants/backend/generated";
import React, { useState, useEffect, useRef, use } from "react";
import {
  CurrentConversationContainer,
  CurrentConversationHeader,
  MessagesSidebar,
  TypeMessage,
} from "../../components/Messages/index.js";
import wayfinder from "../../public/wayfinder.svg";
import { MessageHandler } from "../../utils/MessageHandler";
import { useSession } from "next-auth/react";
const peopleList = [
  { name: "Emily Rodriguez", image: wayfinder },
  { name: "Jordan Smith", image: wayfinder },
  { name: "Carlos Gonzalez", image: wayfinder },
  { name: "Alex Turner", image: wayfinder },
  { name: "Olivia Kim", image: wayfinder },
  { name: "Sophia Williams", image: wayfinder },
  { name: "Vanessa Patel", image: wayfinder },
];

Amplify.configure(gen.config);

const Messages = () => {
  const { data: session, status } = useSession();
  const [activePerson, setActivePerson] = useState(peopleList[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null); //notification to pass through to MessageHandler
  let messageHandler = useRef(null);

  //TODO sort messages correctly and make sure that they are called as soon as user opens messages.

  useEffect(() => {
    if (
      status !== "loading" &&
      session.user.email &&
      messageHandler.current === null
    ) {
      messageHandler.current = new MessageHandler(
        session?.user.email,
        (msg) => {
          setNewMessage(msg);
        }
      );
    }
  }, [status]);

  async function handleSubmit(e, msg) {
    e.preventDefault();
    e.stopPropagation();
    const resp = await gen.publish(
      Math.round((Date.now() - 1700179470000) / 100),
      session?.user.email,
      msg,
      activePerson.name
    );
    console.log("RESPONSE", resp);
  }

  //whenever there's a new message, update the messages array
  useEffect(() => {
    if (messageHandler.current) {
      setMessages(messageHandler.current.getMessages());
    }
  }, [newMessage]);

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
      <div
        className={`transition-all duration-200 ${
          sidebarOpen ? "pl-[300px]" : "pl-[100px]"
        }`}
      >
        <CurrentConversationHeader activePerson={activePerson} />
        <CurrentConversationContainer
          messagesArray={messages[activePerson.name] || []}
          userId={session?.user.email}
        />
        <TypeMessage onSubmit={handleSubmit} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
};

export default Messages;
