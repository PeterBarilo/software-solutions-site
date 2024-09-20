import React from 'react'
import './Nav.css'
import { assets } from '../assets/assets'

const Nav = () => {
  return (
    <>
    
    <div className='nav'>
            <img src={assets.logoSquare} alt="" className='logo'/>
            <img src={assets.logoText} alt="" className='logo2'/>
        <ul className="menu">
            <li>Home</li>
            <div className='services'>
              <li>Services</li>
              <img src={assets.dropdown_darkmode} alt="" />
            </div>
            
            <li>DevSec Special</li>
            <li>About Us</li>
            <hr />
            <img src={assets.light} alt=""  className='mode' />
            <button>Contact</button>

        </ul>
    </div>
    <hr className='separate'/>
    </>
  )
}

export default Nav
