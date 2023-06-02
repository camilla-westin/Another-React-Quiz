import React from "react"

export default function Answers({answers, correct, handleAnswerClick, increaseScore}) {
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [classNames, setClassNames] = React.useState([]);

    function handleButtonClick(index) {
        handleAnswerClick();
        setIsDisabled(true);
        checkAnswer(index);
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === correct) {
            increaseScore();
        }

        const updatedClassNames = answers.map((_, index) =>
            index === selectedIndex && selectedIndex === correct
            ? "correct"
            : index === selectedIndex && selectedIndex !== correct
            ? "incorrect"
            : ""
        );
        setClassNames(updatedClassNames);

    }

    return (
        <ul className="answers">
            {answers.map((answer, index) => (
                <li
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={classNames[index]}               >
                    <span>{String.fromCharCode(65 + index)}</span>
                    <p className={isDisabled ? "disabled" : null}>{answer}</p>
                </li>
            ))}
        </ul>
    )
}