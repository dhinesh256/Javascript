import React, { useMemo, useState } from 'react';

function Usememo(props) {
    const [countOne, setcountOne] = useState(0)
    const [countTwo, setcountTwo] = useState(0)

    const incrementone = ()=>{
        setcountOne(countOne + 1)
    }
    const incrementtwo = ()=>{
        setcountTwo(countTwo + 1)
    }
    const isEven = useMemo(()=>{
        let i =0
        while(i<1000000000) i++
        return countOne %2 ===0
    },[countOne])
    return (
        <div>
            <button onClick = {incrementone}>Count One - {countOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick = {incrementtwo}>Count two - {countTwo}</button>
            </div>
        </div>
       
    );
}

export default Usememo;