import { partners } from "@/data/partners";

import { Link } from "react-router-dom";
import React from "react";

export default function SimcardMain() {
  return (
    <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              <h2 className="title animate-up-2 wow fadeInUp">
              SIM Card
              </h2>
              <br />
              <h4 className="wow fadeInUp">Enjoy seamless communication and affordable plans to keep in touch!</h4>
              <p className="text animate-up-3">
              Stay connected from day one with an international SIM card, specially designed for students studying abroad. Enjoy seamless communication and affordable plans to keep in touch with family and friends wherever you go.
              </p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
  {/* <Link
    to="/contact"
    className="ud-btn me-3 bdrs12"
    style={{ backgroundColor: "orange", color: "white" }}
  ><i className="fas fa-plane" style={{ marginLeft: "8px" }}></i>
    APPLY NOW 
  </Link> */}
</div>

          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              <img
                style={{ height: "fit-content" }}
                className="bdrs20"
                src="\images\simCard\s1.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
