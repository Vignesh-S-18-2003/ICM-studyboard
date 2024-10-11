import { Link } from "react-router-dom";
import React from "react";

export default function USA() {
  return (
    <section className="hero-home13 at-home17 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="home17-hero-content">
              <h1 className="banner-title animate-up-1 mb25">
                Achieve with <br className="d-none d-xl-block" />
                USA Scholarships
              </h1>
              <h4 className="text-white text animate-up-2">
                Unlock the best educational opportunities in the USA with
                affordable programs tailored for your success.
              </h4>
              <p>We help you find and select colleges and scholarships for your studying and get free scholarship for every level of educations. Get free scholarships for every level of education.</p>
              <div className="d-sm-flex align-items-center mt30 animate-up-3">
                <Link to="/job-1" className="ud-btn btn-1 me-3 bdrs120 btn-1">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home17-hero-img text-center animate-up-1">
              <div className="d-flex align-items-center justify-content-center">
                {/* Existing Image */}
                <div className="mb30 ml40">
                  <img
                    src="/images/ScholarshipAustralia/sa-1.png"
                    className="img-fluid"
                    alt="Scholarship"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              {/* Existing Image */}
              <div className="mt-3">
                <img
                  src="/images/ScholarshipAustralia/sa-2.png"
                  className="img-fluid"
                  alt="Scholarship"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
