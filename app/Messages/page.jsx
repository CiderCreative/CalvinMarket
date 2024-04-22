"use client";

import { Amplify } from "@aws-amplify/core";
import * as gen from "../../constants/backend/generated";
import config from "../../constants/backend/aws-exports";
import React, { useState, useEffect, useRef, Suspense } from "react";
import {
  CurrentConversationContainer,
  CurrentConversationHeader,
  MessagesSidebar,
  TypeMessage,
} from "../../components/Messages/index.js";
import wayfinder from "../../public/wayfinder.svg";
import { MessageHandler } from "../../utils/MessageHandler";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

Amplify.configure(config);

const Messages = () => {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const user = searchParams.get("user");
  const [activePerson, setActivePerson] = useState(
    user ? { name: user, image: wayfinder } : null,
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [newMessage, setNewMessage] = useState(null); //notification to pass through to MessageHandler
  const isFirstRender = useRef(true);
  let messageHandler = useRef(null);

  //initialize the messageHandler if user is logged in
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
        },
      );
    }
  }, [status]);

  //publish a new message
  async function handleSubmit(e, msg) {
    e.preventDefault();
    e.stopPropagation();
    const resp = await gen.publish(
      Math.round((Date.now() - 1700179470000) / 100),
      session?.user.email,
      msg,
      activePerson.name,
    );
  }

  //whenever there's a new message (from anyone), update the messages array
  useEffect(() => {
    if (messageHandler.current) {
      setMessages(messageHandler.current.getMessages());
      let newPeopleList = messageHandler.current
        .getContacts()
        .map((person) => ({ name: person, image: wayfinder }));
      if (isFirstRender.current) {
        setActivePerson(activePerson ? activePerson : newPeopleList[0]);
        isFirstRender.current = false;
      }
      setPeopleList(newPeopleList);
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
          messagesArray={(activePerson && messages[activePerson.name]) || []}
          userId={session?.user.email}
        />
        <TypeMessage onSubmit={handleSubmit} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
};

export default Messages;
