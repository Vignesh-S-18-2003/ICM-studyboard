import { Link } from "react-router-dom";
import React from "react";

export default function ScholarshipResource() {
  return (
    <section className="pb90 pb20-md pt-0 text-center">
        <h1 className="pb100">Scholarship Benefits </h1>
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-md-4">
            <div className="find-work bgc-thm5 pb50 pt60 px20 bdrs24 text-center mb30">
            {/* <img
                className="mb30 w-100 h-auto"
                src="/images/IeltsExam/IELTS-Logo.jpg"
                alt=" image "
              /> */}
              <h2 className="title mb30">Full College Cost</h2>
              <h4 className="text mb30">
              Comprehensive fees for students during the course of study</h4>
              {/* <Link className="ud-btn btn-dark bdrs60" to="/job-1">
                Download <i className="fal fa-arrow-right-long"></i>
              </Link> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm4 pb50 pt60 px20 bdrs24 text-center mb30">
              {/* <img
                className="mb30 w-100 h-auto"
                src="/images/IeltsExam/IELTS-Logo.jpg"
                alt=" image "
              /> */}
              <h2 className="title mb30">Transportation Cost</h2>
              <h4 className="text mb30">
              Comprehensive fees for students during the course of study
              </h4>
              {/* <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Take a Mock <i className="fal fa-arrow-right-long"></i>
              </Link> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm5 pb50 pt60 px20 bdrs24 text-center mb30">
            {/* <img
                className="mb30 w-100 h-auto"
                src="/images/IeltsExam/IELTS-Logo.jpg"
                alt=" image "
              /> */}
              <h2 className="title mb30">Learning Equipment</h2>
              <h4 className="text mb30">
              Comprehensive fees for students during the course of study              
              </h4>
              {/* <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Download <i className="fal fa-arrow-right-long"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
