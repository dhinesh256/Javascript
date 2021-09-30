import React ,{useContext} from 'react';
import {context1,context2} from './Context'

/*
USES useContext AND GETS FIRSTNAME AND LASTNAME FROM CONTEXT COMPONENT
*/
function Comp3(props) {

    const firstName = useContext(context1)
    const lastname  = useContext(context2)

    return (
        <div>
           From Comp3 using useContext - {firstName} {lastname}
        </div>
    );
}

export default Comp3;