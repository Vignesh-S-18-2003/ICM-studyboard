import { Link } from "react-router-dom";

export default function ScholarshipMain() {
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
                <h1>Scholarships</h1>   {/* <span className="text-thm">TS</span> */}
                </div>
                <div className="h2 error_title">
                Find an affordable path to a college degree!
                </div>
                <p className="text fz15 mb20">
                We help you find and select colleges and scholarships for your studying and get free scholarship for every level of educations. Get free scholarships for every level of education.     </p>
                {/* <Link to="/" className="ud-btn btn-thm">
                  Book Now
                  <i className="fal fa-arrow-right-long" />
                </Link> */}
                <div className="d-md-flex justify-content-between">
                  {/* <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  > MBA in Australia
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  > MS in Australia
                  </button> */}
                  <button className="ud-btn btn-google fz14 fw400" type="button">
                  Need Of Scholarships
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
