import React from 'react';

function PopularCourse() {
  return (
    <section>
      <div className='text-center pb-100'>
        <div>
          <h1 className="text-left" style={{ color: 'orange' }}>Search by Countries</h1>
        </div>
        <br />
        <div className="container-fluid d-flex justify-content-center mb-5" style={{ width: '80vw' }}>
          <div className="row w-100">
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-canada-tab"
                data-bs-toggle="pill"
                href="#pills-canada"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Canada <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-australia-tab"
                data-bs-toggle="pill"
                href="#pills-australia"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Australia <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-us-tab"
                data-bs-toggle="pill"
                href="#pills-us"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    United States <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-ireland-tab"
                data-bs-toggle="pill"
                href="#pills-ireland"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    Ireland <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-uk-tab"
                data-bs-toggle="pill"
                href="#pills-uk"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    United Kingdom <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                className="nav-link"
                id="pills-nz-tab"
                data-bs-toggle="pill"
                href="#pills-nz"
              >
                <div className="p-3 border bg-light">
                  <h3 className="text-black">
                    New Zealand <span style={{ color: 'orange' }}>&gt;</span>
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

export default PopularCourse;
