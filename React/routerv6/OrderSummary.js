import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()
  return (
      <>
    <div>Order Successfully placed</div>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  )
}

export default OrderSummary