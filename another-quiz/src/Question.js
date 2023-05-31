import React from "react"
import Answers from "./Answers"
import Result from "./Result"

export default function Question(props) {

    const [showNextButton, setShowNextButton] = React.useState(false);
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

      if (!props.showResultButton) {
        setShowNextButton(true);
      } 
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

            {showNextButton && <button className="fancy-btn" onClick={props.onNextButtonClick}>Next question</button>}

            <Result />
        </div>                   
    )
}