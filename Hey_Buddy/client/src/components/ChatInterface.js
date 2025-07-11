import React, { useState } from 'react';
import './ChatInterface.css'; // styling file

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey Buddy 👋 What’s on your list today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);

    // Basic bot response (customize this!)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: `Let's tackle "${input}". You’ve got this 💪` }
      ]);
    }, 800);

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Hey_Buddy 🤖</div>
      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your task or a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
