import React, { useState } from 'react';
import './ChatBot.css'; // Optional: for styling

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: "Got it! Let's stay productive 🚀" };

    setMessages(prev => [...prev, userMessage, botReply]);
    setInput('');
  };

  return (
    <div className="chat-container border rounded p-3 bg-light">
      <h4>Hey_Buddy Assistant 💬</h4>
      <div className="chat-box mb-2" style={{ height: '250px', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
            <span className={`badge ${msg.sender === 'user' ? 'bg-primary' : 'bg-success'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ask something..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-outline-secondary" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
