import React from "react"
import './quiz.scss';
import data from "./data/data"
import Quiz from "./Quiz"

function App() {

  const [quizElements, setQuizElements] = React.useState(data)
    
  const allQuizElements = quizElements.map(qa => (
      <Quiz 
          key={qa.id}  
          question={qa.question}
          answer={qa.answers}
          correct={qa.correct}
      />
  ))

  return (
    <div className="App">
      <header className="App-header">     
        <h1>Another React Quiz</h1>
      </header>
      <div className="quiz">
        {allQuizElements}
      </div>
    </div>
  );
}

export default App;
