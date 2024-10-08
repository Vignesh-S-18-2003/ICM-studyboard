import { Link } from "react-router-dom";

export default function DestinationMain() {
  return (
    <>
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <img
                    className="w-100"
                    src="/images/destinationimage/destination-logo.png"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="error_page_content text-center text-xl-start">
                <div className="erro_code">
                  <h1>Switzerland</h1>
                </div>
                <div className="h2 error_title">
                  Study in the Heart of the Alps!
                </div>
                <p className="text fz15 mb20">
                  Discover Switzerland, a country known for its world-renowned
                  education system, cutting-edge research, and breathtaking
                  landscapes. Elevate your studies in one of the most innovative
                  and scenic countries in Europe.
                </p>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    MBA in Switzerland
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    MS in Switzerland
                  </button>
                  <button className="ud-btn btn-google fz14 fw400" type="button">
                    UG in Switzerland
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
