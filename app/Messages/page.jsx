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

const messages = [
  { sender: "You",  content: "Hey there! I saw your listing for the used laptop. Is it still available?" },
  { sender: "Other", content: "Hi Sarah! Yep, it's still available. It's a great laptop and in excellent condition. Are you interested?" },
  { sender: "You",  content: "Awesome! Yeah, I'm definitely interested. Could you tell me a bit more about its specs and how much you're asking for it?" },
  { sender: "Other", content: "Sure thing! It's a Dell Inspiron 15 with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD. I'm asking for $350, but I'm willing to negotiate." },
  { sender: "You",  content: "That sounds pretty good! Would you mind meeting up so I can take a look at it in person?" },
  { sender: "Other", content: "Of course! Where and when would you like to meet? I'm on campus most of the time." },
  { sender: "You",  content: "How about we meet at Johnny's Cafe tomorrow afternoon around 3 PM?" },
  { sender: "You",  content: "Hey there! I saw your listing for the used laptop. Is it still available?" },
  { sender: "Other", content: "Hi Sarah! Yep, it's still available. It's a great laptop and in excellent condition. Are you interested?" },
  { sender: "You",  content: "Awesome! Yeah, I'm definitely interested. Could you tell me a bit more about its specs and how much you're asking for it?" },
  { sender: "Other", content: "Sure thing! It's a Dell Inspiron 15 with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD. I'm asking for $350, but I'm willing to negotiate." },
  { sender: "You",  content: "That sounds pretty good! Would you mind meeting up so I can take a look at it in person?" },
  { sender: "Other", content: "Of course! Where and when would you like to meet? I'm on campus most of the time." },
  { sender: "You",  content: "How about we meet at Johnny's Cafe tomorrow afternoon around 3 PM?" },
  { sender: "You",  content: "Hey there! I saw your listing for the used laptop. Is it still available?" },
  { sender: "Other", content: "Hi Sarah! Yep, it's still available. It's a great laptop and in excellent condition. Are you interested?" },
  { sender: "You",  content: "Awesome! Yeah, I'm definitely interested. Could you tell me a bit more about its specs and how much you're asking for it?" },
  { sender: "Other", content: "Sure thing! It's a Dell Inspiron 15 with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD. I'm asking for $350, but I'm willing to negotiate." },
  { sender: "You",  content: "That sounds pretty good! Would you mind meeting up so I can take a look at it in person? That sounds pretty good! Would you mind meeting up so I can take a look at it in person? That sounds pretty good! Would you mind meeting up so I can take a look at it in person? That sounds pretty good! Would you mind meeting up so I can take a look at it in person? That sounds pretty good! Would you mind meeting up so I can take a look at it in person?" },
  { sender: "Other", content: "Of course! Where and when would you like to meet? I'm on campus most of the time." },
  { sender: "You",  content: "How about we meet at Johnny's Cafe tomorrow afternoon around 3 PM?" },
  { sender: "You",  content: "Hey there! I saw your listing for the used laptop. Is it still available?" },
  { sender: "Other", content: "Hi Sarah! Yep, it's still available. It's a great laptop and in excellent condition. Are you interested?" },
  { sender: "You",  content: "Awesome! Yeah, I'm definitely interested. Could you tell me a bit more about its specs and how much you're asking for it?" },
  { sender: "Other", content: "Sure thing! It's a Dell Inspiron 15 with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD. I'm asking for $350, but I'm willing to negotiate." },
  { sender: "You",  content: "That sounds pretty good! Would you mind meeting up so I can take a look at it in person?" },
  { sender: "Other", content: "Of course! Where and when would you like to meet? I'm on campus most of the time." },
  { sender: "You",  content: "How about we meet at Johnny's Cafe tomorrow afternoon around 3 PM?" },
  { sender: "You",  content: "Hey there! I saw your listing for the used laptop. Is it still available?" },
  { sender: "Other", content: "Hi Sarah! Yep, it's still available. It's a great laptop and in excellent condition. Are you interested?" },
  { sender: "You",  content: "Awesome! Yeah, I'm definitely interested. Could you tell me a bit more about its specs and how much you're asking for it?" },
  { sender: "Other", content: "Sure thing! It's a Dell Inspiron 15 with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD. I'm asking for $350, but I'm willing to negotiate." },
  { sender: "You",  content: "That sounds pretty good! Would you mind meeting up so I can take a look at it in person?" },
  { sender: "Other", content: "Of course! Where and when would you like to meet? I'm on campus most of the time." },
  { sender: "You",  content: "How about we meet at Johnny's Cafe tomorrow afternoon around 3 PM?" },
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
        <CurrentConversationContainer messagesArray={messages}/>
      </div>

    </div>
  )
}

export default Messages