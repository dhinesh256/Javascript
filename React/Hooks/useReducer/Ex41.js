import React, {useReducer} from 'react';

// Example prgm with initial state and action as an object
const initial ={counterValue :0,counterValue2 : 20};
const reducer =(state,action) => {
    switch(action.type){
        case 'increment':
            return {...state,counterValue:state.counterValue + action.value}
        case 'decrement':
            return {...state,counterValue:state.counterValue - action.value}

        case 'increment2':
            return {...state,counterValue2:state.counterValue2 + action.value}
        case 'decrement2':
            return {...state,counterValue2:state.counterValue2 - action.value}

        case 'reset':
            return initial
        default:
            return state.counterValue  
    }
     
}
function Ex41(props) {
    const [count , dispatch] = useReducer( reducer , initial)
    
    const [countTwo , dispatch2] = useReducer(reducer, initial)

    return (
        <div>
            <h1>first state value {count.counterValue}</h1>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>
            <div>
            <h1>second state value {count.counterValue2}</h1>    
            <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement</button>

            </div>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <div>
                <h1>{countTwo.counterValue2}</h1>
                <p>same reducer can be used for diff useReducer</p>
                <button onClick={()=>dispatch2({type:'increment2',value:1})}>Increment</button>
                <button onClick={()=>dispatch2({type:'decrement2',value:1})}>Decrement</button>
            </div>
        </div>
    );
}

export default Ex41;