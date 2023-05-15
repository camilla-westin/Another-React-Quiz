import React from "react"

export default function Answers(props) {
    const [isDisabled, setIsDisabled] = React.useState(false)

    function handleButtonClick(index) {
        props.handleAnswerClick()
        setIsDisabled(true)
        checkAnswer(index)
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === props.correct) {
         console.log("correct")
        } else {
          console.log("incorrect")
        }
      }

    return (
        <ul className="answers">
            <li onClick={() => handleButtonClick(0)}><span>A</span><p className={isDisabled ? "disabled" : null}>{props.answers[0]}</p></li>
            <li onClick={() => handleButtonClick(1)}><span>B</span><p className={isDisabled ? "disabled" : null}>{props.answers[1]}</p></li>
            <li onClick={() => handleButtonClick(2)}><span>C</span><p className={isDisabled ? "disabled" : null}>{props.answers[2]}</p></li>
            <li onClick={() => handleButtonClick(3)}><span>D</span><p className={isDisabled ? "disabled" : null}>{props.answers[3]}</p></li>
      </ul>
    )
}