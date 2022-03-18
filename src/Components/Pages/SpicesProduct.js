import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function MideastProduct() {
  return (
    <div className='mideast-container-bg'>
        <Container className='mideast-container'>
          <h1>Spices Products</h1>
        <Row>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/19.-Pickle.png" />
                <Card.Body>
                    <Card.Title>Pickle Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/Rasam.png" />
                <Card.Body>
                    <Card.Title>Rasam Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/Dried-red-chilli.png" />
                <Card.Body>
                    <Card.Title>Red Dried Chilli</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/red-round-chilly.png" />
                <Card.Body>
                    <Card.Title>Red Round Chilli</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/tamarind-flower-1kg.jpg" />
                <Card.Body>
                    <Card.Title>Tamarind Flower 1kg</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
              <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/tamarind-1kg-seeded.jpg" />
                <Card.Body>
                    <Card.Title>Tamarind Seeded 1kg</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Spices</h4>
                <Card.Img variant="top" src="images/mideast/ASAFOETIDA.jpeg"  style={{height:'40vh'}}/>
                <Card.Body>
                    <Card.Title>ASAFOETIDA Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
        <Footer />
    </div>
    
  )
}

export default MideastProduct