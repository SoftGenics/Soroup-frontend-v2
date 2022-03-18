import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function MideastProduct() {
  return (
    <div className='mideast-container-bg'>
        <Container className='mideast-container'>
          <h1>Masala Products</h1>
        <Row>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/1chicken.png" />
                <Card.Body>
                    <Card.Title>Chicken Masala</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/2.-Fish.png" />
                <Card.Body>
                    <Card.Title>Fish Masala</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/3.-Meat.png" />
                <Card.Body>
                    <Card.Title>Meat Masala</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/4.-Sambar.png" />
                <Card.Body>
                    <Card.Title>Sambar Masala</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/5.-Mutton.png" />
                <Card.Body>
                    <Card.Title>Mutton Masala</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
              <h4>Masala</h4>
                <Card.Img variant="top" src="images/mideast/6.-Biriani.png" />
                <Card.Body>
                    <Card.Title>Biriani Masala</Card.Title>
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