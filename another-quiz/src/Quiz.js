import React from "react"
import Answers from "./Answers"

export default function Quiz(props) {
    // console.log(props)
    return (
        <div className="quiz"> 
            <h2>{props.question}</h2>       
            <Answers 
                key={props.id}
                answers={props.answer}  />       
        </div>                   
    )
}