// import { createContext, useState } from "react";
// import run from "../config/appfiy";

// export const Context = createContext();

// const ContextProvider = (props) => {
//     const [input, setInput] = useState("");
//     const [recentPrompt, setRecentPrompt] = useState("");
//     const [prevPrompts, setPrevPrompts] = useState([]);
//     const [showResult, setShowResult] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [resultData, setResultData] = useState("");

//     const delayPara = (index, nextWord) => {
//         setTimeout(function () {
//             setResultData((prev) => prev + nextWord);
//         }, 75 * index);
//     };

//     const onSent = async (prompt) => {
//         setResultData("");
//         setLoading(true);
//         setShowResult(true);
//         let response;
//         if (prompt !== undefined) {
//             response = await run(prompt);
//             setRecentPrompt(prompt)
//         }
//         else {
//             setPrevPrompts(prev => [...prev, input])
//             setRecentPrompt(input);
//             const response = await run(input);
//         }
//         let responseArray = response.split("**");
//         let newResponse = "";

//         for (let i = 0; i < responseArray.length; i++) {
//             if (i === 0 || i % 2 !== 1) {
//                 newResponse += responseArray[i];
//             } else {
//                 newResponse += "<b>" + responseArray[i] + "</b>";
//             }
//         }

//         let newResponse2 = newResponse.split("*").join("</br>");
//         let newResponseArray = newResponse2.split(" ");

//         for (let i = 0; i < newResponseArray.length; i++) {
//             const nextWord = newResponseArray[i];
//             delayPara(i, nextWord + " ");
//         }

//         setLoading(false);
//         setInput(""); // Reset input field
//     };

//     const contextValue = {
//         prevPrompts,
//         setPrevPrompts,
//         input,
//         setInput,
//         recentPrompt,
//         setRecentPrompt,
//         onSent,
//         showResult,
//         loading,
//         resultData,
//     };

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     );
// };

// export default ContextProvider;
import { createContext, useState } from "react";
import run from "../config/appfiy";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        let query = prompt || input; // Use prompt if provided, otherwise use input
        setRecentPrompt(query);

        // Ensure previous prompts are updated correctly
        setPrevPrompts((prev) => {
            if (!prev.includes(query)) {
                return [...prev, query]; // Add new prompt only if it's unique
            }
            return prev;
        });

        const response = await run(query);
        let responseArray = response.split("**");
        let newResponse = "";

        for (let i = 0; i < responseArray.length; i++) {
            newResponse += i % 2 !== 1 ? responseArray[i] : "<b>" + responseArray[i] + "</b>";
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            delayPara(i, newResponseArray[i] + " ");
        }

        setLoading(false);
        setInput(""); // Reset input field after sending
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        onSent,
        showResult,
        loading,
        resultData,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
