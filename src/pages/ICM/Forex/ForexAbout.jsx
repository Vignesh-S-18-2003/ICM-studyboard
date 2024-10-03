import React from 'react';

function ForexAbout() {
  return (
    <div>
      <div className="container">
        <div className="roww wow fadeInUp" data-wow-delay="500ms">
          <div className="col-xl-12">
            <div className="ui-content mt45 mb100">
              <h1 className="text-center" style={{ marginBottom: '10px' }}> {/* Changed margin to -43px */}
                <i className="fas fa-plane-departure" style={{ color: 'orange', marginRight: '10px' }}></i>
                Forex - An Overview
              </h1>
              <br />
              <br />
              <h5 className="mb25 ff-heading text">
              Forex, short for foreign exchange, refers to the process of converting one currency into another for various purposes such as travel, international education, or business. For students studying abroad, forex services help manage expenses by providing competitive currency exchange rates and easy transfers. It ensures that students have access to local currency, whether for tuition fees, accommodation, or daily living expenses, while offering safe and convenient options for managing their finances globally. With forex, students can avoid high conversion fees and navigate their new surroundings without financial worries
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

export default ForexAbout;
