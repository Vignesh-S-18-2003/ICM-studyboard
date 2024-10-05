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
                      Preparing to Depart: <br className="d-none d-xl-block" /> Your Journey Starts Here
                    </h2>

                    <p className="mt-3">
                      ICM ensures students are fully prepared for their departure with comprehensive guidance on essential steps like visa applications, travel arrangements, and pre-departure planning. 
                      We provide checklists and resources to make the transition smooth, covering everything from packing to settling in.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      1
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Visa and Documentation</h4>
                      <p className="text mb-0 fz15">
                        Get expert assistance with your visa application process and <br className="d-none d-lg-block" /> ensure all documentation is ready for a seamless travel experience.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      2
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Travel Arrangements</h4>
                      <p className="text mb-0 fz15">
                        Learn about flight bookings, accommodation, and transit options <br className="d-none d-lg-block" /> tailored to your destination and budget.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="rounded-number" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50%', padding: '10px 15px', marginRight: '10px' }}>
                      3
                    </span>
                    <div className="list-content flex-grow-1">
                      <h4 className="mb-1">Packing and Essentials</h4>
                      <p className="text mb-0 fz15">
                        Receive detailed packing lists and recommendations on what to bring <br className="d-none d-lg-block" /> for your new life abroad.
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
