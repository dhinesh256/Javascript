import React, { useEffect ,useRef} from 'react';
/*useRef returns a mutable ref object whose .current property
 is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component.
Variable got from useref can hold a value throughout the component,
without changing due to re-rendering.
*/
function Useref(props) {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref = {inputRef.current} type='text'/>
        </div>
    );
}

export default Useref;