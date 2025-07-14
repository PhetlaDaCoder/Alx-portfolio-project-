import React, { useState } from 'react';
import ChatBot from '../components/ChatBot';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const newMessage = { sender: 'user', text };
    setMessages(prev => [...prev, newMessage, { sender: 'bot', text: "I'm here to help! 🧠" }]);
  };

  return (
    <div className="container mt-4">
      <h2>Hey_Buddy Chat 💬</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {/* Add input field and send button */}
      </div>
    </div>
  );
};

export default Chat;
