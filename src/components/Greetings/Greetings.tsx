interface Props {
    name: string;
}


function Greetings({name}:Props){
    return <h1>Hello, {name}!</h1>
}

export default Greetings;