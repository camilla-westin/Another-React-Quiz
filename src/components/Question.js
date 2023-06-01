import React from "react"
import Answers from "./Answers"
import Result from "./Result"

export default function Question(props) {
    const [showNextButton, setShowNextButton] = React.useState(false);
    const [showResultButton, setShowResultButton] = React.useState(false);
    const [showResult, setShowResult] = React.useState(false)
    const [scorePercentage, setScorePercentage] = React.useState(0)

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
        if (props.lastQuestion === props.currentQuestionIndex) {
          setShowNextButton(false)
          setShowResultButton(true)
        } else {
          setShowNextButton(true)
        }
    }  

    function handleIncreaseScore() {
        setScore((prevScore) => prevScore + 1)       
    }

    function handleShowResult() {
      setShowResult(true)
      setShowResultButton(false)
      setScorePercentage(() => {
        const percentage = (score / props.questionSum) * 100;
        return percentage.toFixed(2);
      })
    }

    return (
        <div className="quizbox">          
            {!showResult && <h2 className="question">{props.question}</h2>} 
            
            {!showResult && 
            <Answers 
                key={props.id}
                answers={props.answer}
                correct={props.correct} 
                handleAnswerClick={handleAnswerClick}
                increaseScore={handleIncreaseScore}
            />}    

            {showNextButton && <button className="fancy-btn" onClick={props.onNextButtonClick}>Next question</button>}
            {showResultButton && <button className="fancy-btn" onClick={handleShowResult}>Show result</button>}

            {showResult && <Result totalScore={score} sumPercentage={scorePercentage} />} 
        </div>                   
    )
}