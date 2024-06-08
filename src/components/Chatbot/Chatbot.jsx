import React, { useState } from 'react';
import './chatbot.css';
import axios from 'axios';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('AIzaSyBu04sNW_b51RiGpJFm8pSzK4uOa3HAGTw');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Clear previous messages and add user message and "Thank you" message
    setMessages([{ role: 'user', text: input }, { role: 'bot', text: 'Thank you for the message' }]);
    setIsProcessing(true);

    try {
      // Send the user message to the ChatGPT API
      // const response = await axios.post(
      //   'https://api.openai.com/v1/engines/davinci-codex/completions',
      //   {
      //     prompt: `User: ${input}\nChatGPT:`,
      //     max_tokens: 150,
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      //     },
      //   }
      // );


      const prompt = `User: ${input}`;
      const maxTokens = 150;
      const response = await model.generateContent({
            prompt,
            max_tokens: maxTokens,
        });

      const text = response.text;
      console.log(text);

      // Extract the bot response from the API response
      const botResponse = response.data.choices[0].text.trim();
      console.log('API Response:', botResponse);

      // Add the bot response to the messages array after a short delay
      setTimeout(() => {
        setMessages([{ role: 'user', text: input }, { role: 'bot', text: botResponse }]);
        setIsProcessing(false);
      }, 1000);

      // Clear the input field
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
      setIsProcessing(false);
    }
  };

  const toggleChatbox = () => {
    setIsVisible(!isVisible);
  };

  const closeChatbox = () => {
    setIsVisible(false);
    setMessages([]);
  };

  return (
    <div className="chatbot">
      <button className="chat-button" onClick={toggleChatbox}>
        💬
      </button>
      <div className={`chatbox ${isVisible ? 'visible' : ''}`}>
        <div className="chatbox-header">
          <span>Ask Me Anything</span>
          <button className="close-btn" onClick={closeChatbox}>X</button>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message.role === 'bot' ? (
                <div className="bot-message">{message.text}</div>
              ) : (
                <div className="user-message">{message.text}</div>
              )}
            </div>
          ))}
          {isProcessing && <div className="processing-message">Processing...</div>}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="input"
        />
        <button onClick={handleSendMessage} className="button">
        <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
