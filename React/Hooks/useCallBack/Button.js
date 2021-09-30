import React from 'react';

function Button({handleClick, children}) {
    console.log('Rendering button' , children)
    return (
       <button onClick={handleClick}>{children}</button>
    );
}

export default React.memo(Button);
//When React.memo() wraps a component, 
//React memoizes the rendered output of the wrapped component then skips unnecessary renderings.