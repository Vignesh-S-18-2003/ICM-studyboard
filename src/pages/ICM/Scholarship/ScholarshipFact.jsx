import React from 'react'
import { Link } from 'react-router-dom'

function ScholarshipFact() {
  return (
    <div
    className="col-12 wow fadeInRight mt-2 pt90 "
    data-wow-delay="100ms"
  >
    <div className="cta-style6 text-center mb100">
      <h1 className=" mb25">
      Let’s Register And     <br className="d-none d-lg-block" />
      <span className='text-danger'>Subscribe For Scholarship </span>
      </h1>
      {/* <p className="text-thm2  fz15 mb25">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
        <br className="d-none d-md-block" /> do eiusmod tempor incididunt.
      </p> */}
      <Link to="/contact" className='bgc-thm2 text-light  p10 rounded'>
      Subscribe Now
      </Link>
    </div>
  </div>
  
  )
}

export default ScholarshipFact
