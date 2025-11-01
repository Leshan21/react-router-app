import React from 'react'
import { Link, NavLink, Outlet} from 'react-router-dom'
const Product = () => {
    
  return (
    <div>
      <input type="search" placeholder='type here' />
       <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="details">Details</NavLink>
       </nav>
      

      {/* to show child pages after the nested route */}
      <Outlet></Outlet>
    </div>
  )
}

export default Product
