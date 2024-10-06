import React from 'react'
import { Link } from 'react-router-dom'

function AccomodationFact() {
  return (
    <div
    className="col-12 wow fadeInRight mb-5"
    data-wow-delay="100ms"
  >
    <div className="cta-style6 text-center mb100">
      <h1 className=" mb25">
      Fill out the form  <br className="d-none d-lg-block" />
      <span className='text-danger'> to Book your Rooms </span>
      </h1>
      {/* <p className="text-thm2  fz15 mb25">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
        <br className="d-none d-md-block" /> do eiusmod tempor incididunt.
      </p> */}
      <h1><Link to="/contact" className='bgc-thm2 text-light p10 pl20 pr20 rounded'>
      Book Now 
      </Link></h1>
    </div>
  </div>
  
  )
}

export default AccomodationFact;
