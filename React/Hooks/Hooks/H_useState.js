import React , {useState} from 'react';

function H_useState(props) {

    /*useState accepts initial state value and returns 2 value
     1 ) the current state value and
     2 ) a method to change the state value (method can get arg which will change the state value 
                                                          (OR))
                                              can get an arg as function which gets prevState)             
          method has access to the prev state value. 
    */


    const [count , setCount] = useState(0)
    //console.log(setCount)
    const [name,setName] = useState({firstName:'',lastName:''})

    const [items , setItem] = useState([])

    const setTheItem = () => {
        setItem([...items,
            {id:items.length,
            value:Math.floor(Math.random()*10) +10}
        ])
    }

    const setCountByFive = () => {
    for(let i=0 ;i<5;i++){

        setCount(prev => prev + 1)     //count = prev +1
        console.log(count) 
    }                     
    }                   
    return (     
        <div>
            <p>Counter</p>
            <p>{count}</p>
            <button onClick={()=>setCount(count + 1)}>Increment</button> 
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <button onClick={setCountByFive}>setCountByFive</button>
            <br/>
            <p>Enter the input</p>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <p>{JSON.stringify(name)}</p>
            <br/>
            <button onClick={setTheItem}>click to render list</button>
            <ul>
                {items.map(
                    (item)=>(
                        <li key={item.id}>{item.value}</li>
                    )
                )}
            </ul>
        </div>
    ); 
}

export default H_useState;









