export default function Answers(props) {
    return (
        <ul className="answers">
            <li><span>A</span><p>{props.answers[0]}</p></li>
            <li><span>B</span><p>{props.answers[1]}</p></li>
            <li><span>C</span><p>{props.answers[2]}</p></li>
            <li><span>D</span><p>{props.answers[3]}</p></li>
        </ul>
    )
}