import React from 'react'
import './Part2.css'
import pizza from '../img/pizza.jpg'

const Part2 = () => {
  return (
    <div className='chicago'>
        <div className="chicagoImg">
            <img src={pizza} alt="" />
        </div>
        <div className="chicagoText">
            <h3>The Pizza Menu</h3>
            <h2>CHICAGO <br /> THIN CRUST</h2>
            <p>Lorem ipsum dolor sit  consectetur elit <br />
             adipisicing Laudantium odio, nemo <br />
              fugiat minima recusandae atque. <br /> </p>
              <button>View More</button>
        </div>
    </div>
  )
}

export default Part2