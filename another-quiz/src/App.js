import React from "react"
import './quiz.scss';
import data from "./data/data"
import Question from "./Question"

function App() {

  const [quizElements] = React.useState(data)
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  const lastQuestion = data.length - 1
  const currentQuestion = quizElements[currentQuestionIndex]


  const handleNextButtonClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  };


  return (
    <div className="App">
      <header className="App-header">     
        <h1>Another React Quiz</h1>
      </header>
      <div className="quiz">
      {currentQuestion && (
          <Question
            key={currentQuestion.id}
            id={currentQuestion.id}
            question={currentQuestion.question}
            answer={currentQuestion.answers}
            correct={currentQuestion.correct}
            total={data.length}
            onNextButtonClick={handleNextButtonClick}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
      </div>
    </div>
  )
}

export default App
