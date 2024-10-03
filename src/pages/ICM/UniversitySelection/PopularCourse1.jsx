import React from 'react';

function PopularCourse1() {
  return (
    <section>
      <div className='text-center pb-100'>
        <div>
          <h1 className="text-left" style={{ color: 'orange' }}>Search by Courses</h1>
        </div>
        <br />
        <div className="container">
          <div className="row">
            {/* First Row with 3 Courses */}
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-engineering-tab"
                data-bs-toggle="pill"
                href="#pills-engineering"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Engineering <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-pharmacy-tab"
                data-bs-toggle="pill"
                href="#pills-pharmacy"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Pharmacy <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-social-science-tab"
                data-bs-toggle="pill"
                href="#pills-social-science"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Social Science <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
          </div>

          {/* Second Row with 3 Courses */}
          <div className="row mt-4">
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-accounting-tab"
                data-bs-toggle="pill"
                href="#pills-accounting"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Accounting <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-computer-science-tab"
                data-bs-toggle="pill"
                href="#pills-computer-science"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Computer Science <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-art-design-tab"
                data-bs-toggle="pill"
                href="#pills-art-design"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Art & Design <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCourse1;
