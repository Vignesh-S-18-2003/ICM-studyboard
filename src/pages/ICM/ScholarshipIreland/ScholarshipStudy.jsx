import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

export default function ScholarshipStudy() {
  return (
    <>
      <div className="col-lg-9 mx-auto pt90">
        <div className="main-title text-center mb30">
          <h1>Study in Ireland!</h1>
          <h5 className="paragraph">
            Follow the steps below to start your education journey in Ireland.
          </h5>
        </div>
      </div>
      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt200 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-100 h-auto"
                  src="/images/Scholarship/study1.png"
                  alt="mobile-app"
                />
              </div>
            </div>
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb10">Choose Your Study</h2>
                <p className="cta-text mb40">
                  Irish education institutions offer courses across a broad spectrum of disciplines. Whether your goal is in technology, health, or business, there’s a program to support your journey. Explore options in fields like Engineering, Healthcare, and Business Management.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <Link to="/contact">
                        <button className="app-info mb-1 light-style d-flex align-items-center">
                          <h6 className="app-title mb-0 text-white fz15">Apply Here</h6>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt200 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb10">University and Country Options</h2>
                <p className="cta-text mb30">
                  Ireland is home to top-ranked universities. We help you understand the admission requirements and guide you through the application process, making it easier for you to achieve your study goals in Ireland.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <Link to="/contact">
                        <button className="app-info mb-1 light-style d-flex align-items-center">
                          <h6 className="app-title mb-0 text-white fz15">Register Here</h6>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-100 h-auto"
                  src="/images/Scholarship/study2.png"
                  alt="mobile-app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt200 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-100 h-auto"
                  src="/images/Scholarship/study3.png"
                  alt="mobile-app"
                />
              </div>
            </div>
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb15">Plan Your Budget</h2>
                <p className="cta-text mb60">
                  Budgeting for your education in Ireland is key. With our guidance, we help you estimate tuition fees, living costs, and potential scholarships, ensuring you have a smooth financial journey while studying in Ireland.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <Link to="/contact">
                        <button className="app-info mb-1 light-style d-flex align-items-center">
                          <h6 className="app-title mb-0 text-white fz15">Apply Here</h6>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt200 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb15">Prepare Your Student Visa</h2>
                <p className="cta-text mb60">
                  Navigating the Irish student visa process can be overwhelming. We simplify this process by guiding you through every step, ensuring your visa application is successful and stress-free.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <Link to="/contact">
                        <button className="app-info mb-1 light-style d-flex align-items-center">
                          <h6 className="app-title mb-0 text-white fz15">Submit</h6>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-100 h-auto"
                  src="/images/Scholarship/study4.png"
                  alt="mobile-app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
