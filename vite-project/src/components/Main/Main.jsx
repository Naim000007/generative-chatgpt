import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Appify Dev</p>
                <img src={assets.user_icon} alt='user-icone'></img>
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Naim</span></p>
                    <p>How can i help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest Me when is the best time to visit Sajek</p>
                        <img src={assets.compass_icon}></img>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: Networking</p>
                        <img src={assets.bulb_icon}></img>
                    </div>
                    <div className="card">
                        <p>How to crack a coding interview</p>
                        <img src={assets.message_icon}></img>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon}></img>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Ask Anything..." />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Appify may display inaccurate info, including about people, so double check it responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main