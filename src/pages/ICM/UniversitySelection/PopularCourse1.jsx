import React from 'react';

function PopularCourse1() {
  return (
    <section>
      <div className='text-center pb-100'>
        <div>
          <h1 className="text-left" style={{ color: 'orange' }}>Search by Courses</h1>
        </div>
        <br />
        <div className="container-fluid d-flex justify-content-center mb-5" style={{ width: '80vw' }}>
          <div className="row w-100">
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-engineering-tab"
                data-bs-toggle="pill"
                href="#pills-engineering"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Engineering <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-pharmacy-tab"
                data-bs-toggle="pill"
                href="#pills-pharmacy"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Pharmacy <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-social-science-tab"
                data-bs-toggle="pill"
                href="#pills-social-science"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Social Science <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-accounting-tab"
                data-bs-toggle="pill"
                href="#pills-accounting"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Accounting <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-computer-science-tab"
                data-bs-toggle="pill"
                href="#pills-computer-science"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Computer Science <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-art-design-tab"
                data-bs-toggle="pill"
                href="#pills-art-design"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
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
