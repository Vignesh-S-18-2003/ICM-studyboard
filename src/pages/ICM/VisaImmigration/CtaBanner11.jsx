import { Link } from "react-router-dom";
import React from "react";

export default function CtaBanner11() {
  return (
    <section className="home11-cta-2 bdrs12 mx-auto maxw1700 pb70 pb30-md">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div className="cta-style mb30-md">
              <h2 className="cta-title mb35" style={{ color: "orange" }}>
                Step by Step <br className="d-none d-xl-block" />
                Visa Process
              </h2>
              <p className="text mb55 mb30-md" style={{ color: "black" }}>
                Our expert guidance ensures a smooth and successful visa process
                for your dream destination.
              </p>
              <Link
                to="/contact"
                className="ud-btn btn-thm4 bdrs12"
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "darkorange")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "orange")}
              >
                Get Started <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="row">
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-cv" style={{ color: "orange" }}></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3" style={{ color: "black" }}>
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>1</span> Initial Consultation
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Personalized consultation to understand{" "}
                      <br className="d-none d-xxl-block" /> the specific visa requirements of your destination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-web-design" style={{ color: "orange" }}></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3" style={{ color: "black" }}>
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>2</span> Document Preparation
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Assistance with gathering and preparing all{" "}
                      <br className="d-none d-xxl-block" /> necessary documents, such as financial statements, identification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-secure" style={{ color: "orange" }}></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3" style={{ color: "black" }}>
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>3</span> Application Submission
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Guidance on filling out and submitting visa applications{" "}
                      <br className="d-none d-xxl-block" /> accurately and on time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-customer-service" style={{ color: "orange" }}></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3" style={{ color: "black" }}>
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>4</span> Visa Interview Preparation
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Tips and mock interviews to prepare for{" "}
                      <br className="d-none d-xxl-block" /> embassy interviews, including best practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-secure" style={{ color: "orange" }}></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3" style={{ color: "black" }}>
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>5</span> Post-Visa Support
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Information on next steps after visa approval,{" "}
                      <br className="d-none d-xxl-block" /> including travel plans, immigration clearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
