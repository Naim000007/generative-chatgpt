import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            onSent(input);
        }
    };

    // Function to update input when clicking a card
    const handleCardClick = (text) => {
        setInput(text);
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>Appify Dev</p>
                <img src={assets.user_icon} alt='user-icon' />
            </div>

            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Naim</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest me when is the best time to visit Sajek")}>
                                <p>Suggest me when is the best time to visit Sajek</p>
                                <img src={assets.compass_icon} alt="compass" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Briefly summarize this concept: Networking")}>
                                <p>Briefly summarize this concept: Networking</p>
                                <img src={assets.bulb_icon} alt="bulb" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("How to crack a coding interview")}>
                                <p>How to crack a coding interview</p>
                                <img src={assets.message_icon} alt="message" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt='user icon' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }} />}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Ask Anything..."
                            onKeyDown={handleKeyDown} // 🔥 Press Enter to send
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery" />
                            <img src={assets.mic_icon} alt="mic" />
                            {input ? (
                                <img onClick={() => onSent(input)} src={assets.send_icon} alt="send" />
                            ) : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Appify may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
