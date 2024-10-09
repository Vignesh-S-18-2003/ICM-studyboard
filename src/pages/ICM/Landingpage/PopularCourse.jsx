import React from 'react';

function PopularCourse() {
  return (
    <div className='text-center pb-100'>
      <div>
        <h1>Popular Courses</h1>
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
                Engineering
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
                Pharmacy
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
                Social Science
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
                Accounting
              </h3>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-business-management-tab"
            data-bs-toggle="pill"
            href="#pills-business-management"
          >
            <div className="thumb d-flex align-items-center">
              <h3 className="title ml30 ml15-xl mb-0 border p20 pl100 pr100 text-warning">
                Business Management
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
                Arts & Design
              </h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PopularCourse;
