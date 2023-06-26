import React, { useState } from 'react'
import './Navbar.css'
import {HiMenu} from 'react-icons/hi'
import './Header.css'

const Navbar = () => {
const [showNav,setShowNav]=useState(false);

  return (
    
    <div  >
        <nav className="navbar">
          <div className="logoImg">
            <img src="/img/logo.png" alt="" />
            </div>
            <div className="navlist">
              <ul className={showNav ? "ul active" : "ul"}>
                  <li>Home</li>
                  <li>Menu</li>
                  <li>About</li>
                  <li>Shop</li>
                  <li>Contact</li>
              </ul>
            </div>
            <span>
            <HiMenu onClick={()=>setShowNav(!showNav)} />
            </span>
        </nav>
        <div className="banner-content">
          <div className='contianer'>
              <h3>Pizza Delivery</h3>
              <h1>MAESTRO <br /> PIZINNI</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br /> 
               elit. Asperiores obcaecati hic hic <br />
                a enim ehic eveniet nulla.</p>
          <button>Delivery Now</button>
          </div>
          </div>
    </div>
    )
}

export default Navbar