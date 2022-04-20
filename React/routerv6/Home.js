import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
  return (
      <>
        <div style={{margin:100}}>Home Page</div>
        <button onClick={()=>navigate('/order-summary',{replace:true})}>
            {/*REPLACE - REPLACES THE HISTORY STACK , IF FALSE HOME IS NOT ADDED TO HISTORY STACK */}
        Place order
        </button>
      </>
  )
}

export default Home