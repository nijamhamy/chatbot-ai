import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import "./App.css";

export default function App() {
  const [clearSignal, setClearSignal] = useState(0);

  const handleNewChat = () => {
    setClearSignal(prev => prev + 1);
  };

  return (
    <div className="app-container">
      {/* Sidebar (Left) */}
      <Sidebar onNewChat={handleNewChat} />

      {/* Chat Area */}
      <ChatBox clearSignal={clearSignal} />
    </div>
  );
}
