import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入您的问题..."
        className="search-input"
      />
      <button type="submit" className="search-button">发送</button>
    </form>
  );
}

export default ChatInput;