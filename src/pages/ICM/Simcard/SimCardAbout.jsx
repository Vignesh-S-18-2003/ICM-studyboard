import React from 'react';

function SimcardAbout() {
  return (
    <div>
      <div className="container">
        <div className="roww wow fadeInUp" data-wow-delay="500ms">
          <div className="col-xl-12">
            <div className="ui-content mt45 mb100">
              <h1 className="text-center" style={{ marginBottom: '10px' }}> {/* Changed margin to -43px */}
                <i className="fas fa-plane-departure" style={{ color: 'orange', marginRight: '10px' }}></i>
                International SIM Card
              </h1>
              <br />
              <br />
              <h5 className="mb25 ff-heading text">
              Preparing to study abroad includes arranging for a SIM card service before you depart, ensuring seamless connectivity without costly roaming charges. An international SIM card is the most cost-effective and convenient way to stay connected while studying overseas. Before finalizing your study abroad checklist, make sure you’ve got the right details on international SIM cards, roaming packs, and local/global SIM options. It’s recommended to carry a prepaid international SIM card from India, offering cheaper call rates and free India calling in many plans. 
              </h5>
              <h5 className="mb25 ff-heading text">
              With ICM, you can receive your SIM card in advance, either at a branch or delivered to your home, ensuring smooth communication from the moment you arrive.
              </h5>
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

export default SimcardAbout;
