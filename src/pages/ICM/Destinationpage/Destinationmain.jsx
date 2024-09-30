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
                <h1>Australia</h1>267[=]- =/7
                p9-.
                =<picture>
                    <source media="(
                    
                    0
                \]
                
                ' srcset="" />
                    <img src="" alt="" />
                </picture>               {/* <span className="text-thm">TS</span> */}
                </div>
                <div className="h2 error_title">
                Explore and Experience World-Class Education!
                </div>
                <p className="text fz15 mb20">
                Embark on a journey to Australia, where top-ranked universities and vibrant cultural experiences await. Enhance your skills with world-class education and open doors to global opportunities.                </p>
                {/* <Link to="/" className="ud-btn btn-thm">
                  Book Now
                  <i className="fal fa-arrow-right-long" />
                </Link> */}
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  > MBA in Australia
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  > MS in Australia
                  </button>
                  <button className="ud-btn btn-google fz14 fw400" type="button">
                  UG in Australia
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
