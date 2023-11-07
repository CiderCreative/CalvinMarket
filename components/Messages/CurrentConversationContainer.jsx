import React from 'react'
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const CurrentConversationContainer = ({messagesArray}) => {
  return (
    <div className="w-full pt-10 px-10 space-y-5">

      {messagesArray.map((message, idx) => (
        <div key={idx}>
          {message.sender === "You" ?
            (<SentMessage text={message.content}/>)
            :
            (<ReceivedMessage text={message.content}/>)
          }
        </div>
      ))}

    </div>
  )
}

export default CurrentConversationContainer