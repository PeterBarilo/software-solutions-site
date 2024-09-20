import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='head'>
        <div className="content">
        <p className='sub'> Our SOFTWARE SOLUTIONS are</p>

            <h2>SLEEK. SCALABLE. SECURE. </h2>
            <p className='desc'>Never worry about excessive admin overhead or downed websites in crucial moments again. Focus on building your business and let us focus on making sure it your brand in discoverable, attractive, and safe from attacks.</p>
            <div>
              <button className='start'>Get Started</button>
              <button className='learn'>Learn More</button>
            </div>
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="lines-horizontal">
          <div className="line-horizontal"></div>
          <div className="line-horizontal"></div>
          <div className="line-horizontal"></div>
          <div className="line-horizontal"></div>
          <div className="line-horizontal"></div>
        </div>
    </div>
  )
}

export default Header
