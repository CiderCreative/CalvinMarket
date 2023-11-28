import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'


const TypeMessage = ({sidebarOpen, onSubmit}) => {
  const [message, setMessage] = useState("")
  const widthVal = sidebarOpen ? "w-[calc(100vw-300px)]" : "w-[calc(100vw-100px)]";

  function handleKeyPress(event) {
    if (event.key === 'Enter' && message.length > 0) {
      event.preventDefault();
      console.log(message);
      setMessage("");
      onSubmit(event, message);
    } else {
      setMessage(event.target.value);
    }
  }

  return (
    <div className={`fixed bottom-0 flex items-center py-4 bg-primary ${widthVal} `}>

      <div className="w-full border-2 border-opposite z-10 rounded-lg flex justify-between mx-10">
        <input
          placeholder="Enter your message here"
          className="w-full h-full px-5 py-3 input-clear rounded-l-xl"
          value={message}
          onKeyDown={handleKeyPress}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div
          onClick={(e) => {message.length > 0 && (console.log(message), setMessage(""), onSubmit(e, message))}}
          className="flex flex-col items-center justify-center px-5 hover:bg-yellow rounded-r-lg transition-colors duration-100"
        >
          <PaperAirplaneIcon className="aspect-square w-5"/>
        </div>
      </div>

    </div>
  );
}

export default TypeMessage;

