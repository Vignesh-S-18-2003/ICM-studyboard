import { Link } from "react-router-dom";

export default function Examain() {
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
                    src="/images/IeltsExam/image.png"
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
                  IEL<span className="text-thm">TS</span>
                </div>
                <div className="h2 error_title">
                  Discover Everything You Need to Know About IELTS Today!
                </div>
                <p className="text fz15 mb20">
                IELTS is the world's leading English language test, trusted by over 10,000 organizations globally. Whether for education, work, or migration, let IELTS open doors to your future <br className="d-none d-lg-block" />
                </p>
                <Link to="/" className="ud-btn btn-thm">
                  Book Now
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
