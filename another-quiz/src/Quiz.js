import React from "react"
import Answers from "./Answers"

export default function Quiz(props) {
    const [showButton, setShowButton] = React.useState(false);

    function handleAnswerClick() {
      setShowButton(true);
    }  

    return (
        <div className="quizbox"> 
            <h2 className="question">{props.question}</h2> 
            
            <Answers 
                key={props.id}
                answers={props.answer}
                correct={props.correct} 
                handleAnswerClick={handleAnswerClick}
            />           

            {showButton ? <button className="fancy-btn">Next question</button> : null}  
        </div>                   
    )
}