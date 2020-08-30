import React, { useState } from 'react';
import EmojiFaces from './EmojiFaces';
// import ReactDOM from 'react-dom';
const Output = () => {

    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [val3, setVal3] = useState(0);
    
    const IncNum = () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
        let randomNum1 = getRandomInt(10) ;
        let randomNum2 = getRandomInt(10) ;
        let randomNum3 = getRandomInt(10) ;
        setVal1(randomNum1 );
        
        setVal2(randomNum2 );
        setVal3(randomNum3 );
        console.log(EmojiFaces[val1].emoji);
    };


    return(
        
        
        <>
            <h1>The Slot Mchine</h1>
            <h1>{EmojiFaces[val1].emoji} | {EmojiFaces[val2].emoji} | {EmojiFaces[val3].emoji}</h1>
           
            <button onClick={IncNum}>click me</button>
            <br />

        </>
    

    );

};
export default Output;