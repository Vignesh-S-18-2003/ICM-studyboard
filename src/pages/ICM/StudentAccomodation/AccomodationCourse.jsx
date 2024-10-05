import React from 'react'

function AccomodationCourse() {
  return (
    <section>
      <div className='text-center pb-100'>
        <div>
          <h1 className="text-left" style={{ color: 'orange' }}>Search by Countries</h1>
        </div>
        <br />
        <div className="container">
          <div className="row">
            {/* First Row with 3 Countries */}
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-canada-tab"
                data-bs-toggle="pill"
                href="#pills-canada"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Canada <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-australia-tab"
                data-bs-toggle="pill"
                href="#pills-australia"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Australia <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-us-tab"
                data-bs-toggle="pill"
                href="#pills-us"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    United States <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
          </div>

          {/* Second Row with 3 Countries */}
          <div className="row mt-4">
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-ireland-tab"
                data-bs-toggle="pill"
                href="#pills-ireland"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    Ireland <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-uk-tab"
                data-bs-toggle="pill"
                href="#pills-uk"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
                    United Kingdom <span style={{ color: 'orange' }}>&gt;</span>
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="nav-link"
                id="pills-nz-tab"
                data-bs-toggle="pill"
                href="#pills-nz"
              >
                <div className="thumb d-flex align-items-center" style={{ border: '1px solid #ccc', padding: '20px' }}>
                  <h3 className="title ml30 ml15-xl mb-0 text-black">
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

export default AccomodationCourse;
