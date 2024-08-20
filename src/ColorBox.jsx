import "./ColorBox.css"
import { useState } from "react";

function randomChoice(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function ColorBox({colors}){
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () =>{ 
        const ranColor = ()=> randomChoice(colors);
        setColor(ranColor); 
    };
    return (
        <div className="ColorBox" style={{backgroundColor: color}} onClick={changeColor}></div>
    )
    // const [color, setColor] = useState("red");
    // const changeColor = () =>{ 
    //     const index = Math.floor(Math.random() * colors.length);
    //     setColor(colors[index]); 
    // };
    // return (
    //     <div className="ColorBox" style={{backgroundColor: color}} onClick={changeColor}></div>
    // )
    

}

export default ColorBox;