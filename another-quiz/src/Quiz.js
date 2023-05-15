import React from "react"
import Answers from "./Answers"

export default function Quiz(props) {
    // console.log(props)
    return (
        <div className="quizbox"> 
            <h2 className="question">{props.question}</h2>       
            <Answers 
                key={props.id}
                answers={props.answer}  />       
        </div>                   
    )
}