import React from 'react'
import './Footer.css'
import logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
    <div className='footer'>
        <img src={logo} alt="" />
        <h2>@CopyrightMAESTROPIZINNI</h2>
    </div>
    </footer>
    
  )
}

export default Footer