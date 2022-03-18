import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  AOS.init();
  return (
  <div className='footer-container-bg' id="contact">
    <div className='footer-container'>
    <section className='footer-subscription'>
      <img src='images/logo2.png' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' alt='logo'></img>
      <br></br>
        <p data-aos='fade-up' data-aos-duration='1000'  className='footer-subscription-heading'>
          SOROUP TRADING COMPANY LTD
          <br></br>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className='footer-subscription-heading'></p>
          Soroup tarding Co. Ltd
          <br></br>
          <i data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className="fas fa-map-marked-alt"/>
          <p  data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' style={{ fontSize:'20px'}}>P.O. BOX 41233, Riyadh 11521<br></br>Kingdom soudi Arabia</p>
        </p>
        <br></br>
        <i data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className="fas fa-mouse "  style={{color:'blue', fontSize:'30px'}}/>
        <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'  className='footer-subscription-heading'>info@soroup.com  |  soroup@gmail.com  <br></br> www.soroup.com</p>
        </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper' data-aos='fade-up' data-aos-once='true' data-aos-duration='1000' >
          <div className='footer-link-items' data-aos='fade-up' data-aos-once='true' data-aos-duration='1000' >
          <h2>HEAD QUARTER</h2>
          <p>CENTERAL REGION, RIYADH</p>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
          <div className='footer-link-items' data-aos='fade-up' data-aos-duration='1000'data-aos-once='true' >
          <h2>WESTERN REGION</h2>
          <p>JEDDAH BRANCH OFFICE</p>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
        </div>
        <div className='footer-link-wrapper' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
          <div className='footer-link-items'>
          <h2>EASTERN REGION</h2>
          <p>DAMMANM BRANCH OFFICE</p>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
          <div className='footer-link-items'>
            <h2>NOTHERN REGION</h2>
            <p>HAIL BRANCH OFFICE</p>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
        </div>
      </div>
      <section >
          <div className='social-icons' data-aos-duration='1000' data-aos-once='true'>
          <small className='website-rights'>Web Design & SEO By <a href='https://www.softgenics.com' style={{textDecoration:'none', color:'blue',fontWeight:'700'}}>Sofgtenics</a></small>
          </div>
        
      </section>
    </div>
  </div>
  );
}

export default Footer;
