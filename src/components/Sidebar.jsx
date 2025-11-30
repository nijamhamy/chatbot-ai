import React, { useState } from "react";
import { FaPlus, FaCog, FaInfoCircle, FaBars } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ onNewChat }) {
    // ALWAYS start collapsed
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

            {/* Collapse Button */}
            <div className="collapse-btn" onClick={toggleSidebar}>
                <FaBars />
            </div>

            <div className="menu">
                <button className="menu-item" onClick={onNewChat}>
                    <FaPlus />
                    {!collapsed && <span>New Chat</span>}
                </button>

                <button className="menu-item">
                    <FaCog />
                    {!collapsed && <span>Settings</span>}
                </button>

                <button className="menu-item">
                    <FaInfoCircle />
                    {!collapsed && <span>About</span>}
                </button>
            </div>
        </div>
    );
}
