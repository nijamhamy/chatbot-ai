import React from "react";
import "./Message.css";

export default function Message({ sender, text }) {
    return (
        <div className={`message ${sender === "user" ? "user-msg" : "ai-msg"}`}>
            <p>{text}</p>
        </div>
    );
}
