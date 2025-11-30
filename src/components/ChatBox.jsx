import React, { useState, useEffect, useRef } from "react";
import { sendMessage } from "../api";
import { FaPaperPlane } from "react-icons/fa";
import "./ChatBox.css";

export default function ChatBox({ clearSignal }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages([]);
    }, [clearSignal]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        setMessages(prev => [...prev, userMsg]);

        setInput("");

        const reply = await sendMessage(input);
        setMessages(prev => [...prev, { sender: "ai", text: reply }]);
    };

    // ⌨️ Handle keyboard input
    const handleKeyDown = (e) => {
        // Shift + Enter → new line
        if (e.key === "Enter" && e.shiftKey) {
            return;
        }

        // Enter → send message
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chat-container">

            <div className="chat-messages">
                {messages.map((msg, i) => (
                    <div key={i} className={`msg ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            <div className="chat-input-area">
                <textarea
                    className="chat-input"
                    placeholder="Message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                />

                <button className="send-btn" onClick={handleSend}>
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
}
