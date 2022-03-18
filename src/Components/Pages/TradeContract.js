import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
function TradeContract() {
  return (
    <div>
        <Container fluid className='trade-container-bg'>
            <Container className='trade-container'>
      
              <Row>
                  <Col sm={6}>
                    <Card >
                    <Card.Img variant="top" src="images/valve.jfif" />
                    <Card.Body>
                        <Card.Title>MECHANICAL VALVE</Card.Title>
                        
                    </Card.Body>
                    </Card>
                      </Col>
                      <Col sm={6}>
                      <Card >
                    <Card.Img variant="top" src="images/pump.jfif" />
                    <Card.Body>
                        <Card.Title>MECHANICAL PUMPS</Card.Title>
                        
                    </Card.Body>
                    </Card>
                    
                      </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                    <Card >
                    <Card.Img variant="top" src="images/instrument.jfif" />
                    <Card.Body>
                        <Card.Title>INSTRUMENTATION</Card.Title>
                        
                    </Card.Body>
                    </Card>
                      </Col>
                      <Col sm={6}>
                      <Card >
                    <Card.Img variant="top" src="images/electric.jfif" />
                    <Card.Body>
                        <Card.Title>ELECTRICAL</Card.Title>
                        
                    </Card.Body>
                    </Card>
                    
                      </Col>
              </Row>
              
            </Container>
        </Container>
        <Footer />
    </div>
  )
}

export default TradeContract