import React from "react"

export default function Result(props) {
    let resultText;

    if (props.sumPercentage > 90) {
        resultText = "You are an expert!"
    } else if (props.sumPercentage > 50) {
        resultText = "You are pretty good at this!"
    } else {
        resultText = "Maybe some more practice for you.."
    }

    return (
        <div>
            <h2>{resultText}</h2>
            <div>Score: {props.totalScore}</div>
            <div>Procent: {props.sumPercentage}</div>
        </div>
    )
}