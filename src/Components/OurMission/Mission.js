import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Mission.css'
function Mission() {
  return (
    <div>
    <Container style={{marginTop:'5rem', textAlign:'center'}} className='msn-vsn-container'>
        <h1 className='mb-5'>Mission AND <span style={{color:'red'}}>VISION</span></h1>
        <p>Formed in the year 1990, continuing to expand its marketing capabilities to become the leading importer & distributor of FMCG & non food products in the Kingdom of Saudi Arabia.</p>
        <p><span style={{fontSize:'40px', fontWeight:'700', color:'red'}}>S</span>oroup trading will be focussed on delivering services tailored to
            meet the needs of Individual industries, End Users & Importers.
            Our mission is to deliver value-added services which exceed our
            clients’ expectations. We shall achieve this through the effective
            and efficient use of our dedicated resources in addition to our
            meticulously selected high-quality subcontractors, vendors,
            and suppliers, and by utilizing our highly qualified employees to
            approach the Trading & Contracting process with utmost integrity
            and honesty.</p>
            <br></br>
            <p>Our aim is to make the procurement process simpler & more
                efficient for our clients by being the single source provider for all
                Industrial Equipment & Materials.</p>

            <br></br>
            <Image src='images/mission.jpg' fluid style={{width:'100%'}}/>
    </Container>
    </div>
  )
}

export default Mission