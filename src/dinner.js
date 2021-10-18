import React from "react";

function Dinner (props){
    return(
        <div>
        <h1>Today We are Serving {props.dishName}</h1>
        <h2>Today We are Serving Karahi {props.sweetDish}</h2>
        </div>
        )
    }
    
    export default Dinner;   // What is this Working