import React, {useReducer} from 'react';
/* usereducer takes in two arg 
1) reducer function
2) initial state

it returns [current state value , method capable of accepting a action to execute the code in render func]
 */
const initial =0;
//the reducer function takes two args i.e current state and the action
const reducer =(state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1  
        case 'reset':
            return initial
        default:
            return state  
    }
     
}
function Ex4(props) {
    const [count , dispatch] = useReducer( reducer , initial)
    //dispatch used to dispatch action
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Rest</button>
        </div>
    );
}

export default Ex4;