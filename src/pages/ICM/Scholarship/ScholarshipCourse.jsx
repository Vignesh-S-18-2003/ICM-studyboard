import React from 'react'

function ScholarshipCourse() {
  return (
    <div className='text-center pb-100'>
        <div >
        <h1 >By Study Levels </h1>
        </div>
      <ul className="nav justify-content-center pt90" id="pills-tab2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      href="#pills-home"
                    >
                      <div className="thumb d-flex align-items-center">
                        
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        School
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#pills-profile"
                    >
                      <div className="thumb d-flex align-items-center">
                        
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        Under Graduate
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      href="#pills-contact"
                    >
                      <div className="thumb d-flex align-items-center">
                        
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        Foundation
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="nav justify-content-center pt90" id="pills-tab2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      href="#pills-home"
                    >
                      <div className="thumb d-flex align-items-center">
                         
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        Post Graduate
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#pills-profile"
                    >
                      <div className="thumb d-flex align-items-center">
                        
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        Doctorate
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      href="#pills-contact"
                    >
                      <div className="thumb d-flex align-items-center">
                        
                        <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                        Pre Degree & Vocational
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
    </div>
  )
}

export default ScholarshipCourse
