import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();
    return (
        <div id="about">
        <Container className=' about-container' data-aos='zoom-in' data-aos-duration='2000' data-aos-once='false'>
            <Row>
                <Col md={4} className="about-img-container">
                <Image src='/images/logo2.png' style={{width:'350px',height:'200px'}}/>
                </Col>
                <Col md={8}> 
                <h1>About</h1>
                <p>Formed in the year 1990, Soroup Trading has continued to expand
                    its capabilities to become one among the leading Importer &
                    Dsitributor for FMCG & Non-Food Products in the Kingdom of
                    Saudi Arabia.</p>
                    <p>In line with its dynamic growth, Soroup trading has decided to
                        diverisfy its portfolio and enter the Industrial Trading & Contracting
                        sector. Using our portfolio of brands to differentiate our services
                        and consumer products, we seek to develop the most innovative
                        and profitable experiennce to out clients.</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default About