import React from 'react';
import SearchBar from './SearchBar';

function Main({ toggleAIChat }) {
  return (
    <main className="main-content">
      <div className="search-container">
        <SearchBar />
        <button onClick={toggleAIChat} className="ai-chat-button">打开AI聊天</button>
      </div>
      {/* 保留其他主要内容 */}
    </main>
  );
}

export default Main;