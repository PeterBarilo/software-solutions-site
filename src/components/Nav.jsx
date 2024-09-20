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
              <hr className='dropdownhr'/>
              <div className="dropdown-content">
                <a href="#">Web Development</a>
                <a href="#">App Development</a>
                <a href="#">Cloud Architecture/Migration</a>
                <a href="#">Cybersecurity </a>
                <a href="#">SEO Services</a>
                <a href="#">Advertisement Services</a>
              </div>
            </div>
            
            <li>DevSec Special</li>
            <li>About Us</li>
            <hr className='menuhr'/>
            <img src={assets.light} alt=""  className='mode' />
            <button>Contact</button>

        </ul>
    </div>
    <hr className='separate'/>
    </>
  )
}

export default Nav
