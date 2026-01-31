import { useState } from "react";

function ScoreBoard({score}){
    const [bestScore, setBestScore] = useState(0)

    if (bestScore < score){
        setBestScore(score)
    }
    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Best: {bestScore}</h2>
        </div>
    )
}

export default ScoreBoard