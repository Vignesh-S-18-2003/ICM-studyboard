import { partners } from "@/data/partners";

import { Link } from "react-router-dom";
import React from "react";

export default function Hero11() {
  return (
    <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              <h2 className="title animate-up-2">
              Educational Loan
              </h2>
              <br />
              <h4>Secure Your Future with Educational Loans for Studying Abroad!</h4>
              <p className="text animate-up-3">
              Achieve your academic ambitions with an educational loan designed to make studying abroad more accessible. From tuition to living expenses, secure the financial support you need for a brighter future.
              </p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
  <Link
    to="/contact"
    className="ud-btn me-3 bdrs12"
    style={{ backgroundColor: "orange", color: "white" }}
  ><i className="fas fa-plane" style={{ marginLeft: "8px" }}></i>
    APPLY NOW 
  </Link>
</div>

          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              <img
                style={{ height: "fit-content" }}
                className="bdrs20"
                src="\images\EducationalLoan\e1.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
