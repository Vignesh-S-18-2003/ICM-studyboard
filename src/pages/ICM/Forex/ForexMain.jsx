import { partners } from "@/data/partners";

import { Link } from "react-router-dom";
import React from "react";

export default function ForexMain() {
  return (
    <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              <h2 className="title animate-up-2">
              Forex
              </h2>
              <br />
              <h4>Get easy and secure foreign exchange services tailored for students.</h4>
              <p className="text animate-up-3">
              Ensure smooth financial transactions abroad with our student-friendly foreign exchange services, offering competitive rates and secure transfers. Manage your expenses easily while focusing on your higher education journey.
              </p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
  <Link
    to="/contact"
    className="ud-btn me-3 bdrs12"
    style={{ backgroundColor: "orange", color: "white" }}
  ><i className="fas fa-plane" style={{ marginLeft: "8px" }}></i>
    Enquire NOW 
  </Link>
</div>

          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              <img
                style={{ height: "fit-content" }}
                className="bdrs20 w-100"
                src="\images\simCard\image5.jpg"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
