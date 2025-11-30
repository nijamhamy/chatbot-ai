import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar({ onNewChat }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm ai-navbar">
            <h2 className="navbar-brand mb-0">AI Tools</h2>

            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ms-auto gap-2">

                    <li className="nav-item">
                        <button className="btn btn-primary nav-btn" onClick={onNewChat}>
                            📝 New Chat
                        </button>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-outline-light nav-btn">
                            ⚙️ Settings
                        </button>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-outline-light nav-btn">
                            ℹ️ About
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
