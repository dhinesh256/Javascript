import React,{useReducer,useEffect} from 'react';
import axios from 'axios'

const initial = {
    loading : true,
    error : '',
    post : {}
}
function reducer(state,action){
    switch(action.type){
        case 'Success':
            return {loading :false,
            error : '',
            post : action.payload
            }
        case 'error':
            return{loading : false,
            error : 'something went wrong!!!',
            post : {}  
            }
        default:
            return state

    }
}
function Ex42DataFetching(props) {
    
    const [value,dispatch] = useReducer(reducer,initial)

    useEffect(
        () =>{
            axios.get("https://jsonplaceholder.typicode.com/posts/5")
            .then(
                res =>{
                   dispatch({type:'Success',payload:res.data})
                }
            )
            .catch(
                err=>{
                    dispatch({type:'error',payload:''})

                }
            )
        }
    )
    return (
        <div>
           { value.loading ? 'loading' :value.post.title}
           {value.error ? value.error : null}
        </div>
    );
}

export default Ex42DataFetching;