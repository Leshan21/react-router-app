import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatchRoute = () => {
    const navigate  = useNavigate();
  return (
    <div>
      404 Page not found ....!
      <button onClick={() => navigate("/")}>back</button>
    </div>
  )
}

export default NoMatchRoute
