import React from 'react'
import './About.css'
const About = () => {
    return (
       
        <div className='about'>
            <div className="aboutUs">
                <h3>About Us</h3>
                <h2>WELCOME TO <br /> MAESTRO PIZINNI</h2>
                <p>Lorem ipsum dolor sit amet consectetur eveniet nulla <br />
                    elit. Asperiores obcaecati hic hic eveniet nulla <br />
                    a enim ehic eveniet null aeveniet nulla.</p>
                <button>Delivery Now</button>
            </div>
            <div className="aboutImg">
                <img src="/img/pizza.jpg" alt="" />
            </div>
        </div>
       
    )
}

export default About