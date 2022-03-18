import React from 'react'
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link } from 'react-router-dom';
const Hero = () => {
  AOS.init();
    return (

   <div className='hero-container'>
       <h3>Since <br></br>1990</h3>
      <h1 data-aos='fade-up' data-aos-duration='1000'>SOROUP</h1>
      <p data-aos='fade-up' data-aos-duration='2000'>OUR BUSINESS <br></br>IMPORT AND EXPORT
      <br></br>TRADING AND CONTRACTING</p>
      
      <div className='hero-btns'>
        <button className='product-btn' data-aos='fade-up' data-aos-duration='2000' data-aos-once='true' ><Link to="/Products" style={{textDecoration:"none", color:'white'}}>OUR SERVICES</Link></button>
        <button data-aos='fade-up' data-aos-duration='2000' data-aos-once='true'><a href='#contact' style={{textDecoration:'none', color:'white'}}>CONTACT US</a></button>
      </div>
      
        </div>
    )
}

export default Hero