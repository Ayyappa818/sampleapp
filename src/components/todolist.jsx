import React, { useState } from "react";
function Todolist(){
    var [ab,setAb]=useState([
        // "Ayyappa",
        // "Anji",
        // "Tarun",
        // "Vikas"
    ])
    function xyz(){
        var a=document.getElementById("d1").value 
        setAb([...ab,a])
    }
    function xy(){
        var b=document.getElementById("d2")
        b.style.color="blue"
    }
    function yz(i){
        var del =[...ab]
        del.splice(i,1)
        setAb(del)
    }
    return <div align="center" className="border border-2 border-info m-2 p-2">
        <h1 style={{color:"red"}}>Todolist</h1>
        <input type="text" id="d1" />
        <button onClick={(()=>{xyz()})} style={{backgroundColor:"orange"}}>ADD</button>
        {ab.map((s)=>{
            return <div>
                <li id="d2"  style={{color:"purple"}}>{s}<button onClick={((s)=>{xy()})} style={{backgroundColor:"red"}}>Done</button><button onClick={(s)=>{yz()}}>Del</button></li>
            </div>
        })}
    </div>
}
export default Todolist