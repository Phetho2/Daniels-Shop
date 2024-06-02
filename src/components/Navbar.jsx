import React from 'react'
import '../components/Navbar.css'
import Cart from '../assets/busket__icon.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="header">
          <Link to="/">
            <h2>Daniels Shop</h2>
          </Link>
           
        </div>
        <div className="card">
            <span>Go to cart</span>
            <Link to="/cart">
              <img src={Cart} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar