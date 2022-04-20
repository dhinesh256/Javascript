import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function Products() {
  return (
    <div>
        <input type='search' placeholder="Search products"/>
        <nav >
            <Link to='featured'>Featured</Link> {/*NOT INCLUDING  '/' DENOTES RELATIVE PATH WHICH INHERIT FROM CLOSEST/PARENT ROUTE*/}
            <Link to='new'>New</Link>
        </nav>
        <Outlet/>
        {/* OUTLET COMPONENT IS USED TO DISPLAY THE SELECTED ROUTE'S COMPONENT(HERE IT IS FEATURED OR HOME) */}
    </div>
    
  )
}

export default Products