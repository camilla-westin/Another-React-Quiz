export default function Answers(props) {
    function handleButtonClick() {
        props.handleAnswerClick();
    }
    return (
        <ul className="answers">
            <li onClick={handleButtonClick}><span>A</span><p>{props.answers[0]}</p></li>
            <li onClick={handleButtonClick}><span>B</span><p>{props.answers[1]}</p></li>
            <li onClick={handleButtonClick}><span>C</span><p>{props.answers[2]}</p></li>
            <li onClick={handleButtonClick}><span>D</span><p>{props.answers[3]}</p></li>
        </ul>
    )
}