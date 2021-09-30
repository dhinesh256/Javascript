//Examples for useEffect Hook

import React , {useState,useEffect} from "react";

function Ex2() {
/*
useEffect runs after every render and it handles side effects
useEffect should get a fuction as arg1 and can get a dependency array as a arg2
(empty arg2 mimics the componentdidmount)
*/
const [num,setNum]= useState(0)
const [X,setX]= useState(0)
const [Y,setY]= useState(0)


const logmouseposition = (e)=>{
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(
    () => {
        
        document.title = num  
        window.addEventListener('mousemove',logmouseposition) 
        
        return () => {
            console.log("component removed")
            window.removeEventListener('mousemove',logmouseposition)}
    } ,[]       //if num is included in arr, the useEffect will check there is any change or not in num
                // and render if only there's a change
    
)

    return ( 
        <div>
            <button onClick={() => setNum(num => num+1)}>click {num}</button>
            Hook X is {X} and Y is {Y}
        </div>
     );
}

export default Ex2;