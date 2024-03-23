import React, { useState } from 'react'

export default function UseChatMessages() {
    const [messages, setMessages] = useState([]);
    function addMessage(message){
        setMessages(prevMessages=>[...prevMessages, message]);
    }
  return (
        {messages,addMessage}
  )
}
