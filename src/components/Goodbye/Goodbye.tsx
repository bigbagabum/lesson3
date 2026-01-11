interface Props {
    familyName: string;
    score?: number;
}

function Goodbye ({familyName, score}: Props) {
    return <p>Goodbye, {familyName} your score is {score}</p>
}

export default Goodbye;