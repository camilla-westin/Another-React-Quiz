import React from "react"
import Answers from "./Answers"

export default function Quiz(props) {
    const [showButton, setShowButton] = React.useState(false);
    const [score, setScore] = React.useState(() => {
        const storedScore = sessionStorage.getItem("quizScore");
        return storedScore ? parseInt(storedScore, 10) : 0;
    });

    React.useEffect(() => {
        sessionStorage.setItem("quizScore", score.toString());

        const handleBeforeUnload = () => {
          sessionStorage.removeItem("quizScore");
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [score]);

    function handleAnswerClick() {
      setShowButton(true);
    }  

    function handleIncreaseScore() {
        setScore((prevScore) => prevScore + 1)       
    }

    return (
        <div className="quizbox"> 
            <div>Score: {score}</div>
            <h2 className="question">{props.question}</h2> 
            
            <Answers 
                key={props.id}
                answers={props.answer}
                correct={props.correct} 
                handleAnswerClick={handleAnswerClick}
                increaseScore={handleIncreaseScore}
            />           

            {showButton ? <button className="fancy-btn" onClick={props.onNextButtonClick}>Next question</button> : null}  
        </div>                   
    )
}