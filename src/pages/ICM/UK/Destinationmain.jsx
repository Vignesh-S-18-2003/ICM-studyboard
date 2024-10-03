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
                    alt="uk-page-img"
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
                  <h1>United Kingdom</h1>
                </div>
                <div className="h2 error_title">
                  Unlock World-Class Education in the UK!
                </div>
                <p className="text fz15 mb20">
                  Discover the UK's prestigious universities, rich history, and vibrant cultural scene. From global research opportunities to diverse career prospects, studying in the UK offers a pathway to achieving academic excellence in a dynamic environment.
                </p>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    MBA in the UK
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    MS in the UK
                  </button>
                  <button className="ud-btn btn-google fz14 fw400" type="button">
                    UG in the UK
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
