import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'

function Products() {
  return (
    <div>
    <Container style={{marginTop:'10rem'}}>
        <section className='spices-masala'>
    <br></br>
<h1 style={{color:'black'}}>OUR PRODUCTS</h1>
<h2>MIDEAST PRODUCTS</h2>
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/spicecard.png" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						SPICES
					</h5>
					<Link to="/Spices-Products" className="btn btn-light">VIEW</Link>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/masala.jpg" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						MASALA
					</h5>
          <Link to="/Masala-Products"className="btn btn-light">VIEW</Link>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/others.jpg" alt="..." />
					<h5 className="card-title text-light">
                    OTHER GROCERIES
					</h5>
					<Link to="/Groceries-Products" className="btn btn-light">VIEW</Link>
				</div>
			</div>
		</div>
	</div>
</section>
<section>
<Container className='trade-container'>
<h2 style={{textAlign:'center', marginBottom:'3rem', textDecoration:'underline red'}}>TRADING AND CONTRACTING</h2>
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
</section>
</Container>
<Footer />
    </div>
  )
}

export default Products
