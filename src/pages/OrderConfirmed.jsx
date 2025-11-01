import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmed = () => {
    const navigate  = useNavigate();
  return (
    <>
    <div>
      OrderConfirmed
    </div>
    <button onClick={() => navigate("/")}>back</button>
    </>
 
  )
}

export default OrderConfirmed
