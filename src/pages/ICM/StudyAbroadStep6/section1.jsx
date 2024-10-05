import { useLocation } from "react-router-dom";

export default function Section1() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden ${
            pathname === "/" || pathname === "/about-1"
              ? "bgc-light-yellow"
              : pathname === "/become-seller"
              ? "bgc-thm4"
              : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title" style={{ color: 'orange' }}>
                      Arrive and Thrive: <br className="d-none d-xl-block" /> Embrace Your New Journey
                    </h2>

                    <p className="mt-3">
                      ICM is dedicated to helping students thrive in their new environment with tailored support and resources. From local insights to networking opportunities, we ensure you have everything you need to adapt and excel.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      1
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Cultural Orientation</h4>
                      <p className="text mb-0 fz15">
                        Engage in sessions that provide insights into local customs, etiquette, and cultural practices to help you feel at home.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      2
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Local Resources</h4>
                      <p className="text mb-0 fz15">
                        Discover essential local services, including healthcare, transportation, and community centers to support your transition.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      3
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Networking Opportunities</h4>
                      <p className="text mb-0 fz15">
                        Connect with fellow students and locals through organized events and activities to build a supportive community abroad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft object-fit-cover"
            src="/images/StudyAbroadStep2/sa2.png"
            alt="cta banner 3"
            style={{ height: '880px' }} // Adjust the height here
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
