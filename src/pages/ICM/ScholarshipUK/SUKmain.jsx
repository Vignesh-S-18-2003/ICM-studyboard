import { Link } from "react-router-dom";
import React from "react";

export default function SUk() {
  return (
    <section className="hero-home13 at-home17 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="home17-hero-content">
              <h1 className="banner-title animate-up-1 mb25">
              Succeed with <br className="d-none d-xl-block" />
              UK Scholarships

              </h1>
              <p className="text-white text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="d-sm-flex align-items-center mt30 animate-up-3">
                <Link to="/job-1" className="ud-btn btn-1 me-3 bdrs120 btn-1">
                  Find Work
                </Link>
                <Link
                  to="/freelancer-1"
                  className="ud-btn btn-2 bdr1 bdrs120"
                >
                  Find Talent
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
  <div className="home17-hero-img text-center animate-up-1">
    {/* Flex container to center and align the images */}
    <div className="d-flex align-items-center justify-content-center">
      {/* First Image */}
      <div className="mb30 ml40">
        <img
          src="/images/ScholarshipAustralia/sa-1.png"
          className="img-fluid"
          alt=" image "
          style={{ maxWidth: "100%", height: "auto" }} // Ensure it fits properly
        />
      </div>
    </div>
    {/* Second Image */}
    <div className="mt-3">
      <img
        src="/images/ScholarshipAustralia/sa-2.png"
        className="img-fluid"
        alt=" image "
        style={{ maxWidth: "100%", height: "auto" }} // Ensure it fits properly
      />
    </div>
    {/* Iconbox Section */}
    {/* <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-y mt-3">
      <span className="icon flaticon-badge"></span>
      <div className="details pl20">
        <h6 className="mb-1 text-white">Proof of quality</h6>
        <p className="text fz13 mb-0 text-white">Lorem Ipsum Dolar Amet</p>
      </div>
    </div> */}
    {/* Final Image */}
    {/* <img
      className="img-1 bounce-x mt-3"
      src="/images/about/happy-client-2.png"
      alt=" image "
      style={{ maxWidth: "100%", height: "auto" }} // Ensure it fits properly
    /> */}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
