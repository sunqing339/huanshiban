import React from 'react';
import AIChatHistory from './AIChatHistory';
import ChatInput from './ChatInput';

function AIChat({ messages, onSendMessage, onClose }) {
  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <h3>AI 聊天助手</h3>
        <button onClick={onClose}>关闭</button>
      </div>
      <AIChatHistory messages={messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}

export default AIChat;