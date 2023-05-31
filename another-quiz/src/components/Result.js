import React from "react"

export default function Result(props) {
    return (
        <div>
            <h2>This is your result</h2>
            <div>Score: {props.totalScore}</div>
        </div>
    )
}