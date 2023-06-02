import React from "react"

export default function Result({sumPercentage, totalScore}) {
    let resultText;

    if (sumPercentage > 90) {
        resultText = "You are an expert!"
    } else if (sumPercentage > 50) {
        resultText = "You are pretty good at this!"
    } else {
        resultText = "Maybe some more practice for you.."
    }

    return (
        <div>
            <h2>{resultText}</h2>
            <div>Score: {totalScore}</div>
            <div>Procent: {sumPercentage}</div>
        </div>
    )
}