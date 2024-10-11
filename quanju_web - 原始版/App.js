import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AIChat from './components/AIChat';

function App() {
  const [messages, setMessages] = useState([]);
  const [showAIChat, setShowAIChat] = useState(false);

  const handleSendMessage = async (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    
    // 这里应该调用AI API获取回复
    const aiResponse = `这是AI对"${message}"的回复`;
    
    setMessages(prevMessages => [...prevMessages, { text: aiResponse, isUser: false }]);
  };

  const toggleAIChat = () => {
    setShowAIChat(!showAIChat);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <Main toggleAIChat={toggleAIChat} />
        {showAIChat && (
          <AIChat
            messages={messages}
            onSendMessage={handleSendMessage}
            onClose={toggleAIChat}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;