import React from 'react';

function AIChatHistory({ messages }) {
  return (
    <div className="chat-history">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isUser ? 'user' : 'ai'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default AIChatHistory;