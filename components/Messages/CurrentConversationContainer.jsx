import React, { useEffect, useRef } from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const CurrentConversationContainer = ({ messagesArray, userId }) => {
  const messagesListRef = useRef(null);

  useEffect(() => {
    messagesListRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="hide-scrollbar m-auto h-[80vh] w-full max-w-[1000px] space-y-5 overflow-y-scroll px-10 pt-10">
      {messagesArray.map((messageObj, idx) => (
        <div key={idx}>
          {messageObj?.senderId === userId ? (
            <SentMessage text={messageObj?.message} />
          ) : (
            <ReceivedMessage text={messageObj?.message} />
          )}
        </div>
      ))}
      <div ref={messagesListRef} />
    </div>
  );
};

export default CurrentConversationContainer;
