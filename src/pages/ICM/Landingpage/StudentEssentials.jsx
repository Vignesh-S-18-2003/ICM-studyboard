import { Link, useLocation } from "react-router-dom";

export default function StudentEssentials() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="pt200">
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
                    <h2 className="title">
                    Student Essentials
                    </h2>
                    <h5>Comprehensive support to make your study abroad experience seamless and stress-free</h5>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">
                        <Link to="/forex">
                          Money Transfer</Link></h4>
                      {/* <p className="text mb-0 fz15">
                        Check any pro’s work samples, client reviews, and
                        identity <br className="d-none d-lg-block" />{" "}
                        verification.
                      </p> */}
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1"><Link to="/EducationalLoan">Loan Assistance</Link></h4>
                      {/* <p className="text mb-0 fz15">
                        Interview potential fits for your job, negotiate rates,
                        and only pay <br className="d-none d-lg-block" /> for
                        work you approve.
                      </p> */}
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1"><Link to="/StudentAccomodation">Accomodations</Link></h4>
                      {/* <p className="text mb-0 fz15">
                        Focus on your work knowing we help protect your data and
                        privacy. We’re here with 24/7 support if you need it.
                      </p> */}
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1"><Link to="/simcard"> Sim Cards </Link></h4>
                      {/* <p className="text mb-0 fz15">
                        Focus on your work knowing we help protect your data and
                        privacy. We’re here with 24/7 support if you need it.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft h-100 object-fit-cover rounded"
            src="/images/landingpage/sec-back.png"
            alt="cta banner 3"
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
