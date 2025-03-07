// import React, { useContext, useState } from 'react'
// import "./Sidebar.css"
// import { assets } from '../../assets/assets'
// import { Context } from '../../context/Context';
// const Sidebar = () => {
//     const [extended, setExtended] = useState(false);
//     const { onSent, prevPrompts, setRecentPrompt } = useContext(Context)

//     const loadPrompt = async (prompt) => {
//         setRecentPrompt(prompt)
//         await onSent(prompt)
//     }


//     return (
//         <div className='sidebar'>
//             <div className="top">
//                 <img onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon}></img>
//                 <div className='new-chat'>
//                     <img src={assets.plus_icon}></img>
//                     {extended ? <p>New Chat</p> : null}
//                 </div>
//                 {extended ? <div className="recent">
//                     <p className="recent-title">Recent</p>
//                     {
//                         prevPrompts.map((item, index) => {
//                             return (
//                                 <div onClick={() => loadPrompt(item)} className="recent-entry">
//                                     <img src={assets.message_icon} />
//                                     <p>{item.slice(0, 18)}...</p>
//                                 </div>
//                             )
//                         })
//                     }

//                 </div> : null}
//             </div>
//             <div className="bottom">
//                 <div className="bottom-item recent-entry">
//                     <img src={assets.question_icon} />
//                     {extended ? <p>Help</p> : null}
//                 </div>
//                 <div className="bottom-item recent-entry">
//                     <img src={assets.history_icon} />
//                     {extended ? <p>Activity</p> : null}
//                 </div>
//                 <div className="bottom-item recent-entry">
//                     <img src={assets.setting_icon} />
//                     {extended ? <p>Settings</p> : null}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar

import React, { useContext, useState } from 'react';
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon} alt="Menu" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended && <p>New Chat</p>}
                </div>

                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {
                            prevPrompts.length > 0 ? prevPrompts.map((item, index) => (
                                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="Message" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )) : <p>No recent prompts</p>
                        }
                    </div>
                )}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
