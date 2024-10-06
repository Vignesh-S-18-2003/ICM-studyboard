import React from 'react';

function AccomodationWhat1() {
  return (
    <div>
      <div className="container">
        <div className="roww wow fadeInUp" data-wow-delay="500ms">
          <div className="col-xl-12">
            <div className="ui-content mt45 mb100">
                <h1 className='text-center' style={{ marginBottom: '10vh' }}>Types of Housing!</h1>
              <h2 className="text-center" style={{ marginBottom: '10px' }}> {/* Changed margin to -43px */}
                {/* <i className="fas fa-plane-departure" style={{ color: 'orange', marginRight: '10px' }}></i> */}
                On Campus Housing
              </h2>
              <br />
              <br />
              <h3 className="mb25 ff-heading text text-justify">
              On-campus housing provides students with the convenience of living close to academic facilities and the opportunity to engage in campus life. It's a great option for those seeking a supportive and structured environment, often offering included amenities and fostering community connections among peers.            
              </h3>
              {/* <h5 className="mb25 ff-heading text">
                <i className="fas fa-hand-holding-usd" style={{ color: 'orange', marginRight: '10px' }}></i>
                Explore various loan providers, interest rates, and flexible repayment plans tailored to your needs. With the right loan, you can focus on your studies without worrying about finances.
              </h5>
              <h5 className="mb25 ff-heading text">
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

export default AccomodationWhat1;
