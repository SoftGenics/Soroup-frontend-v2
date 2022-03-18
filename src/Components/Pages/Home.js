import React from 'react'
import Hero from '../Hero/Hero';
import Mission from '../OurMission/Mission'
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import About from '../About/About';
import Spices from '../Spices/Spices';
import Footer from '../Footer/Footer';
import Brands from '../Brands/Brand'
function Home() {
  return (
    <div>
    <Hero />
      <Mission />
      <WhoWeAre />
      <About />
      <Spices />
      <Brands />
      <Footer />
    </div>
  )
}

export default Home