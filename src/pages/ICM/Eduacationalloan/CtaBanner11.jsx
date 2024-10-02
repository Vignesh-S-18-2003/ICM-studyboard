import { Link } from "react-router-dom";
import React from "react";

export default function LoanProcess() {
  return (
    <section className="home11-cta-2 bdrs12 mx-auto maxw1700 pb70 pb30-md">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div className="cta-style mb30-md">
              <h2 className="cta-title mb35" style={{ color: "orange" }}>
                Loan Process! <br className="d-none d-xl-block" />
              </h2>
              <p className="text mb55 mb30-md" style={{ color: "black" }}>
                Follow the steps below to start your loan process.
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
                Register Here <i className="fal fa-arrow-right-long"></i>
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
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>1</span> Application Process
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Filling out your educational loan application is simple and straightforward with our step-by-step guidance. You'll need key documents like proof of admission, academic records, and financial details.
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
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>2</span> Application Review
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Once you submit your application and documents, our API integration instantly sends your digital file to the lender's database. With AI and Machine Learning, you'll receive a loan response within minutes or up to 48 hours.
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
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>3</span> Provisional Offers
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      We understand the excitement of receiving in-principal approval for your study abroad loan. Once approved, simply submit the required documents like KYC, financial records, and property details for final processing.
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
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>4</span> Documents Submission
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Submit your required documents, including KYC, financial records, and property details, to complete your educational loan application. Our streamlined process ensures quick and efficient document verification for fast approval.
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
                      <span style={{ backgroundColor: "orange", borderRadius: "50%", padding: "5px 10px", color: "white" }}>5</span> Loan Sanctioned
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      Once your educational loan is sanctioned, the funds will be allocated directly to cover your tuition and related expenses. With a quick and secure process, you'll be one step closer to your study abroad journey.
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
