import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

export default function ScholarshipStudy() {
  return (
    <>
      <div className="col-lg-9 mx-auto pt90">
        <div className="main-title text-center mb30">
          <h1>Study with USA!</h1>
          <h5 className="paragraph">
            Follow the steps below to start your U.S. education journey
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
                  U.S. education institutions offer courses across a broad spectrum of disciplines. Whatever your career or learning goal, there’s a program to support your journey. Engineering and Technology Health Sciences Business, management, and finance
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
                  Every student dreams of studying in a specific country and university. We help you understand the chances of admission to the U.S. universities on your list and guide you through the process.
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
                  Effectively plan your budget for studying in the USA with our expert guidance. We assist you in navigating tuition fees, living expenses, and available scholarships, ensuring a financially secure study experience.
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
                  Simplify your U.S. student visa process with our professional guidance. We assist you in meeting all visa requirements, ensuring a smooth and quick application process.
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
