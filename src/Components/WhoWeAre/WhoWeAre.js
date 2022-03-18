import React from 'react'
import './WhoWeAre.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhoWeAre() {
  AOS.init();
  return (
    <div>
        <div class="container  "style={{marginTop:'8rem'}}>
            <h1 ><span style={{color:'red'}}>WHO</span> WE ARE ?</h1>
<div class='row'>
  <div class="col-md-3 diagonal ">
        <div class="card border-0 pt-md-5 bg-transparent" data-aos='fade-right' data-aos-duration='1000'>
              <div class="card-body bg-transparent text-center">
                  <div className='card-text'>
                  Formed in the year 1990, Soroup Trading has continued to expand
                    its capabilities to become one among the leading Importer &
                    Dsitributor for FMCG & Non-Food Products in the Kingdom of
                    Saudi Arabia.
                  </div>
              </div>
        </div>
  </div>
  <div class="col-md-9  diagonal diagonal-image">
          <div class="diagonal-text text-white p-md-4" >
             <br></br>
                  <p>In line with its dynamic growth, Soroup trading has decided to
                    diverisfy its portfolio and enter the Industrial Trading & Contracting
                    sector. Using our portfolio of brands to differentiate our services
                    and consumer products, we seek to develop the most innovative
                    and profitable experiennce to out clients.</p>
          </div>
  </div>
</div>

</div>
    </div>
  )
}

export default WhoWeAre
