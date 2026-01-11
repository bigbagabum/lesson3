import {useState} from "react";
import Button from "../Button/Button";
import style from "./Counter.module.css";



function Counter(){
 const [count, setCount] = useState(0);



function handlePlusOne(){
   setCount(count+1);
}

function handleMinusTwo(){
    setCount(count-2);
}

function handleClear(){
    setCount(0);
}

function handleRandom(){
    setCount(Math.floor(Math.random() * 11));
}

    return (
<section className={style.container}>
    <h2>Counter</h2>
    Count: {count}

    <Button  onClick={handlePlusOne} child = "+1"/>
    <Button onClick={handleMinusTwo} child = "-2"/> 
    <Button  onClick={handleClear} child="Clear"/>
    <Button onClick={handleRandom} child="Random"/>


</section>
    );
}


export default Counter;