import React from 'react'
import { partners } from "@/data/partners";
import { Link } from "react-router-dom";

function AccomodationMain() {
  return (
    <div>
      <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              <h2 className="title animate-up-2">
              Accommodation
              </h2>
              <br />
              <h4>Find your home away from home – secure accommodation for international students!</h4>
              <p className="text animate-up-3">
              Student accommodation ensures a safe and comfortable living environment while studying abroad, allowing students to focus on their academic and personal growth. It provides the perfect blend of convenience, community, and support.
                            </p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
  <Link
    to="/contact"
    className="ud-btn me-3 bdrs12"
    style={{ backgroundColor: "orange", color: "white" }}
  ><i className="fas fa-plane" style={{ marginLeft: "8px" }}></i>
    Book NOW 
  </Link>
</div>

          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              {/* <img
                style={{ height: "fit-content" }}
                className="bdrs20"
                src="\images\EducationalLoan\e1.png"
                alt=" image "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AccomodationMain
