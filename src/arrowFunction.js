import React from 'react';
import ReactDOM from 'react-dom';

function ArrayDisplay(props){
    return(
        <>
        <div clsaaName="cardBox">
    <h1>{props.title}</h1>
    <h2>{props.body}</h2>
        
        </div>
        </>
    );
}

ReactDOM.render(
    <ArrayDisplay />, documnet.getElementById("root")

);