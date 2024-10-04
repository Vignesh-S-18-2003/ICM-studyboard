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
                      Broaden Your Horizons, Expertise, <br className="d-none d-xl-block" /> and Career Opportunities
                    </h2>

                    <p className="mt-3">
                      ICM guides students in choosing the ideal time and destination for their study abroad journey. 
                      It covers factors like academic fit, cost of living, and cultural preferences while offering personalized recommendations and key deadlines. 
                      This helps students make informed decisions tailored to their goals and timelines.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">World-Class Education</h4>
                      <p className="text mb-0 fz15">
                        Gain access to top-tier academic institutions and programs that <br className="d-none d-lg-block" /> enhance your learning experience.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Global Exposure</h4>
                      <p className="text mb-0 fz15">
                        Immerse yourself in diverse cultures and environments, broadening <br className="d-none d-lg-block" /> your worldview and fostering international connections.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Valuable Skills for Career Enhancement</h4>
                      <p className="text mb-0 fz15">
                        Develop essential skills and competencies that boost your employability and prepare you for a global job market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft object-fit-cover"
            src="public/images/StudyAbroadstep2/sa2.png"
            alt="cta banner 3"
            style={{ height: '880px' }} // Adjust the height here
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
