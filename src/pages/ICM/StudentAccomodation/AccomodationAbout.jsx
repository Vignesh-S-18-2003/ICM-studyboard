import React from 'react';

function AccomodationAbout() {
  return (
    <div>
      <div className="container">
        <div className="roww wow fadeInUp" data-wow-delay="500ms">
          <div className="col-xl-12">
            <div className="ui-content mt45 mb100">
              <h1 className="text-center" style={{ marginBottom: '10px' }}> {/* Changed margin to -43px */}
                <i className="fas fa-plane-departure" style={{ color: 'orange', marginRight: '10px' }}></i>
                Student Accommodation
              </h1>
              <br />
              <br />
              <h5 className="mb25 ff-heading text">
              Selecting the right accommodation is a vital step in enhancing your study abroad experience, ensuring a blend of safety, affordability, and comfort. International students can choose from various housing options, such as on-campus residences, private rentals, homestays, or hostels, each offering unique benefits to meet diverse needs and preferences.
              </h5>
              {/* <h5 className="mb25 ff-heading text">
                
With ICM, you can receive your SIM card in advance, either at a branch or delivered to your home, ensuring smooth communication from the moment you arrive.              </h5> */}
              {/* <h5 className="mb25 ff-heading text">
                <i className="fas fa-graduation-cap" style={{ color: 'orange', marginRight: '10px' }}></i>
                Start your journey to global education with confidence and make informed decisions about financing your study abroad experience.
              </h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccomodationAbout;
