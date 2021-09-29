// support file to unMount mousemove event 

import React , {useState} from "react";
import Ex2 from "./Ex2";

function Ex21() {
    const [display,setDisplay] = useState(true)
    return (  
        <div>
            <button onClick={() => setDisplay(!display)}>click to remove mouse component </button>
            {display && <Ex2 />}
        </div>
    );
}

export default Ex21;