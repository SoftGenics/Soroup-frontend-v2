import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
function Spices() {
  return (
    <div>
        <Container>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/images/spices.jfif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SPICES</h3>
      <p>Formed in the year 1990</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="images/clients.jfif"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>CLIENTS</h3>
      <p>LCity Flowers, Mercure , AL Madina.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/logistic.jfif"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>LOGISTICS</h3>
      <p>Route Map of Logistics</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    </div>
  )
}

export default Spices