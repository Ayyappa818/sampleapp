import React, { useState } from "react";
function Counter(){
    function inc(){
        setAb(ab+1)
    }
    function dec(){
        setAb(ab-1)
    }
    var [ab,setAb]=useState(0)
    return <div align="center" className="border border-2 border-primary m-2 p-2">
        <h1>counter:{ab}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
    </div>
}
export default Counter