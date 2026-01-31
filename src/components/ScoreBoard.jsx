import { useState } from "react";
import "../styles/scoreBoard.css"

function ScoreBoard({score}){
    const [bestScore, setBestScore] = useState(0)

    if (bestScore < score){
        setBestScore(score)
    }
    return (
        <div className="score">
            <h2>Score: {score} - Best: {bestScore}</h2>
        </div>
    )
}

export default ScoreBoard