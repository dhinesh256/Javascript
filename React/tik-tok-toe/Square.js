import React ,{useContext} from "react";
import {handle} from './Game'

const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};
function Square(props){
    const handleTask = useContext(handle)
    console.log("square called ")
    
    return (
            
	        <button style={style} onClick={()=>handleTask(props.num)}>{props.value}</button>
        
);
}
export default Square