import { Link } from "react-router-dom";
import React from "react";

export default function IeltsResource() {
  return (
    <section className="pb90 pb20-md pt-0 text-center">
        <h1 className="pb100">Free IELTS Resources</h1>
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-md-4">
            <div className="find-work bgc-thm5 pb50 pt60 px20 bdrs24 text-center mb30">
            <img
                className="mb30 w-100 h-100"
                src="/images/IeltsExam/exam1.png"
                alt=" image "
              />
              <h2 className="title mb30">IELTS Syllabus</h2>
              <p className="text mb30">
              Download the IELTS Syllabus PDF to find out what’s inside the IELTS reading, writing, speaking and listening sections.
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/job-1">
                Download <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm4 pb50 pt60 px20 bdrs24 text-center mb30">
              <img
                className="mb30 w-100 h-100"
                src="/images/IeltsExam/exam2.png"
                alt=" image "
              />
              <h2 className="title mb30">IELTS Mock Test</h2>
              <p className="text mb30">
              Take this mock IELTS practice test to find your strengths, weaknesses and areas you need to improve for your IELTS exam prep.</p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Take a Mock <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm5 pb50 pt60 px20 bdrs24 text-center mb30">
            <img
                className="mb30 w-100 h-100"
                src="/images/IeltsExam/exam3.png"
                alt=" image "
              />
              <h2 className="title mb30">Study Plan</h2>
              <p className="text mb30">
              We’ve made a 4-week IELTS study plan so you don’t have to! Download and customize it for your target IELTS test date.
              
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Download <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
