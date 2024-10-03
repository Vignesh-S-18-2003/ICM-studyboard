import { Link } from "react-router-dom";
import React from "react";

export default function ScholarshipTypes() {
  return (
    <section className="pb90 pb20-md pt-0 text-center">
        <h1 className="pb100">Types of Scholarships</h1>
        <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-md-4">
            <div className="find-work bgc-thm3 pb50 pt60 px20 bdrs24 text-center mb30">
            
              <h2 className="title mb30">Government</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence.              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/job-1">
              Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm7 pb50 pt60 px20 bdrs24 text-center mb30">
              
              <h2 className="title mb30">Private</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence.
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
              Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm3 pb50 pt60 px20 bdrs24 text-center mb30">
            
              <h2 className="title mb30">International</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence.
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-md-4">
            <div className="find-work bgc-thm7 pb50 pt60 px20 bdrs24 text-center mb30">
           
              <h2 className="title mb30">Aided</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence.
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/job-1">
                Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm3 pb50 pt60 px20 bdrs24 text-center mb30">
              
              <h2 className="title mb30">Organization</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence.
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="find-work bgc-thm7 pb50 pt60 px20 bdrs24 text-center mb30">
            
              <h2 className="title mb30">Award</h2>
              <p className="text mb30">
              Government scholarships offer financial support to help you achieve your academic goals and study abroad with confidence. 
              </p>
              <Link className="ud-btn btn-dark bdrs60" to="/freelancer-1">
                Explore More <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
