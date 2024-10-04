import { useLocation } from "react-router-dom";

export default function section1() {
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
                      Steps to Apply for Studying Abroad
                      <br className="d-none d-xl-block" /> Your Future Awaits
                    </h2>
                    <p className="mt-3">
                      Applying to study abroad requires careful planning and organization. Follow these simple steps to successfully navigate the process and secure your place at your desired institution.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 1 with Orange Background */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        marginRight: '10px'
                      }}
                    >
                      1.
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Research Programs and Universities</h4>
                      <p className="text mb-0 fz15">
                        Start by researching various programs and universities that align with your academic goals and career aspirations.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 2 with Orange Background */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        marginRight: '10px'
                      }}
                    >
                      2.
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Prepare Your Application</h4>
                      <p className="text mb-0 fz15">
                        Gather all necessary documents, including academic transcripts, recommendation letters, and personal statements.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 3 with Orange Background */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        marginRight: '10px'
                      }}
                    >
                      3.
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Submit and Follow Up</h4>
                      <p className="text mb-0 fz15">
                        Submit your application before the deadline and regularly check the status for any updates or additional requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft object-fit-cover"
            src="/images/StudyAbroadStep3/s2.png"
            alt="cta banner 3"
            style={{ height: '1200px' }} // Adjust the height here
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
