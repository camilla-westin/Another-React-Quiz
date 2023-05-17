import React from "react"

export default function Answers(props) {
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [classNames, setClassNames] = React.useState([]);

    function handleButtonClick(index) {
        props.handleAnswerClick();
        setIsDisabled(true);
        checkAnswer(index);
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === props.correct) {
            props.increaseScore();
        }

        const updatedClassNames = props.answers.map((_, index) =>
            index === selectedIndex && selectedIndex === props.correct
            ? "correct"
            : index === selectedIndex && selectedIndex != props.correct
            ? "incorrect"
            : ""
        );
        setClassNames(updatedClassNames);

    }

    return (
        <ul className="answers">
            {props.answers.map((answer, index) => (
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