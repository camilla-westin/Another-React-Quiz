import React from "react"
import './quiz.scss';
import data from "./data/data"
import Quiz from "./Quiz"

function App() {

  const [quizElements] = React.useState(data)
  const [currentQuizIndex, setCurrentQuizIndex] = React.useState(0);

  const handleNextButtonClick = () => {
    setCurrentQuizIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuiz = quizElements[currentQuizIndex];

  console.log(currentQuiz);

  return (
    <div className="App">
      <header className="App-header">     
        <h1>Another React Quiz</h1>
      </header>
      <div className="quiz">
      {currentQuiz && (
          <Quiz
            key={currentQuiz.id}
            id={currentQuiz.id}
            question={currentQuiz.question}
            answer={currentQuiz.answers}
            correct={currentQuiz.correct}
            total={data.length}
            onNextButtonClick={handleNextButtonClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
