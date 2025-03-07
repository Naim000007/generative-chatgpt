import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' src={assets.menu_icon}></img>
                <div className='new-chat'>
                    <img src={assets.plus_icon}></img>
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} />
                        <p>What is React...</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} />
                    <p>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} />
                    <p>Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar