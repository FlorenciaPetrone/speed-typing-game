import React from "react";
import useWordGame from "./useWordGame"

function App(){
 const {
     textAreaRef, 
     handleChange, 
     text, 
     isTimeRunning, 
     timeRemaining, 
     startGame, 
     wordCount} = useWordGame(15)

    return(
        <div>
            <h1>How fast do you type? </h1>
            <textarea 
                ref={textAreaRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button
                    onClick={startGame}
                    disabled={isTimeRunning}
                >START GAME!</button>
                <h1>Word Count: {wordCount}</h1>
            </div>

    )
};
export default App ;


