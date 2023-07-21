import React from 'react'
import './Price.css'
import pizza1 from '../img/pizza1.png';
import pizza2 from '../img/pizza2.png';
import pizza3 from '../img/pizza3.png';
import pizza4 from '../img/pizza4.png';
import pizza5 from '../img/pizza5.png';
import pizza6 from '../img/pizza6.png';


const Price = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'white',margin:"50px "}}>Lists of Pizza with Price</h1>
        <div className='Price'>
            <div className="carts">
                <div className="cart">
                    <img src={pizza1} alt="" />
                    <h2>Pizza Margeritta</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$39</h6>
                </div>
                <div className="cart">
                    <img src={pizza2} alt="" />
                    <h2>Beer Pizza Crust</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$25</h6>
                </div>
                <div className="cart">
                    <img src={pizza3} alt="" />
                    <h2>Pizza Biscuit Bake</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$49</h6>
                </div>
                <div className="cart">
                    <img src={pizza4} alt="" />
                    <h2>Pizza Prosicutto</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$25</h6>
                </div>
                <div className="cart">
                    <img src={pizza5} alt="" />
                    <h2>Crazy Crust Pizza</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$29</h6>
                </div>
                <div className="cart">
                    <img src={pizza6} alt="" />
                    <h2>Low Cub Pizza</h2>
                    <p>Lorem ipsum dolor sit amet  ad  ad  consectetur <br />
                        adipisicing elit. Impedit optio ipsa, ipsum sit <br />
                        autem ab doloremque  nisi laboriosam ad  <br />
                        iusto quis. Veniam asperiores quasab. <br />
                        Velit eos molestiae.</p>
                    <h6>$49</h6>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Price