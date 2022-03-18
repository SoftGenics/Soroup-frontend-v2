import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function MideastProduct() {
  return (
    <div className='mideast-container-grocery'>
        <Container className='mideast-container'>
          <h1>Groceries Products</h1>
        <Row>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/CMP-1KG-product.jpg" />
                <Card.Body>
                    <Card.Title>Coconut Milk Powder 1kg</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/CMP-150G-PRODUCT.jpg" />
                <Card.Body>
                    <Card.Title>Coconut Milk Powder 150gm</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/CUBE-JAGGERY-new.png" />
                <Card.Body>
                    <Card.Title>Jaggery Cube</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/insta-kappi.png" />
                <Card.Body>
                    <Card.Title>Insta Kappi</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Azeema-10kg-product.jpeg" />
                <Card.Body>
                    <Card.Title>Azeema Rice 10kg</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
              <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/podiyari-1-kg.jpg" />
                <Card.Body>
                    <Card.Title>Broken Rice 1kg</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
              <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/rice--bags-2.jpg" />
                <Card.Body>
                    <Card.Title>Palakkadan Matta Rice 2 Bags </Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/palada-mix.jpeg" />
                <Card.Body>
                    <Card.Title>Palada Mix</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Pappad.png" />
                <Card.Body>
                    <Card.Title>Pappad</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Roasted-rava.png" />
                <Card.Body>
                    <Card.Title>Roasted Rava</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/semiya-mix.jpeg" />
                <Card.Body>
                    <Card.Title>Semiya Mix</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Soya-ball.png" />
                <Card.Body>
                    <Card.Title>Soya Balls</Card.Title>
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