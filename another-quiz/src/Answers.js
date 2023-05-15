export default function Answers(props) {
    return (
        <ul id="answers">
            <li><span>A</span>{props.answers[0]}</li>
            <li><span>B</span>{props.answers[1]}</li>
            <li><span>C</span>{props.answers[2]}</li>
            <li><span>D</span>{props.answers[3]}</li>
        </ul>
    )
}