import React from 'react'
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const CurrentConversationContainer = ({messagesArray, userId}) => {
  return (
    <div className="w-full max-w-[1000px] m-auto h-[80vh] pt-10 px-10 space-y-5 overflow-y-scroll hide-scrollbar">

      {messagesArray.map((messageObj, idx) => (
        <div key={idx}>
          {messageObj?.senderId === userId ?
            (<SentMessage text={messageObj?.message}/>)
            :
            (<ReceivedMessage text={messageObj?.message}/>)
          }
        </div>
      ))}

    </div>
  )
}

export default CurrentConversationContainer