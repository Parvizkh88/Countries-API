import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Favorites from '../pages/Favorites'

const Navbar = () => {
  return (
    <div className='navbar'>
    <section className="navbar_left">
 <h1>Menu</h1>
        <h1>COUNTRY</h1>
    </section>
       <section className="navbar_right">
           <h1>Countries</h1>
           <Link className='nav_list' to='/favorites'>
        <h1 >Favorites </h1>       
     </Link>
       </section>

    </div>
  )
}

export default Navbar