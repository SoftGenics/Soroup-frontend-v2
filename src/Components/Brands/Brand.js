import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import './Brand.css'

function Brand() {
  return (
    <div>
        <Container fluid className='brand-container' id="brand">
            <h1 className='text-center mb-5 mt-5'>OUR <span style={{fontWeight:'700',color:'red'}}>BRANDS</span></h1>
        <Marquee gradient={false} speed={100} pauseOnHover>
        <Card>
            <Card.Img variant="top" src="/images/brand.png" />

            </Card>
            <Card>
            <Card.Img variant="top" src="/images/brand1.png" />

            </Card>
            <Card>
            <Card.Img variant="top" src="/images/brand2.png" />

            </Card>
            <Card>
            <Card.Img variant="top" src="/images/brand3.png" />

            </Card>
            <Card>
            <Card.Img variant="top" src="/images/brand4.png" />

            </Card>
            </Marquee>
            </Container>
    </div>
  )
}

export default Brand