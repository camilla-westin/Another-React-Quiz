import React from "react"
import Answers from "./Answers"

export default function Quiz(props) {
    const [showButton, setShowButton] = React.useState(false);
    const [score, setScore] = React.useState(0)

    function handleAnswerClick() {
      setShowButton(true);
    }  

    function handleIncreaseScore() {
        setScore((prevScore) => prevScore + 1)   
     
    }

    return (
        <div className="quizbox"> 
            <h2 className="question">{props.question}</h2> 
            
            <Answers 
                key={props.id}
                answers={props.answer}
                correct={props.correct} 
                handleAnswerClick={handleAnswerClick}
                increaseScore={handleIncreaseScore}
            />           

            {showButton ? <button className="fancy-btn">Next question</button> : null}  
        </div>                   
    )
}