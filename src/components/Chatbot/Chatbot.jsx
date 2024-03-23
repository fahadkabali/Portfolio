import React from 'react'
import './Chatbot.css'
import { Chatbot } from ‘react-chatbot-kit’;
import UseChatMessages from './UseChatMessages'



export default function Chatbot() {
    const {messages} = UseChatMessages();
    function handleUserMessage(message){
        addMessage({text: message, isUser:true})
    }
    const config={
        .
        .
        inputPlaceholder:'Type a message ...',
        .
    }

    const actionProvider = .
    const messageParser = .
  return (
    <div>
        <Chatbot
        config ={config}
        actionProvider={actionProvider}
        messageParser={messageParser}
        />
        <div>
            {messages.map((message,index)=>(
            <div key={index}>{message.text}</div>
            ))}
        </div>
    </div>
  )
}
