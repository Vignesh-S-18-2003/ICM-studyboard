import { useState } from "react";
import CountUp from "react-countup";
import HeroSearch1 from "../element/HeroSearch1";

import { useNavigate } from "react-router-dom";

const role = [
  "Choose Category",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

export default function Hero2() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // choose a category
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const navigate = useNavigate();

  // search handler
  const searchHandler = () => {
    navigate("/service-1");
  };

  return (
    <>
      <section className="hero-home2 pb100-xs">
        <div className="container">
          <div className="row mb60 mb0-xl">
            <div className="col-xl-7">
              <div className="pr30 pr0-lg mb30-md position-relative">
                <h1 className="animate-up-1 mb25 text-white">
                  Unlock your door to your {" "}
                  <br className="d-none d-xl-block" />
                  Study Abroad dreams with ICM
                </h1>
                <p className="text-white animate-up-2">
                At International Campus Masters, we tailor courses, offer a warm
                welcome, <br className="d-none d-lg-block" /> and provide unwavering support to make your dreams real.
                </p>
                <div className="advance-search-tab bgc-white p10 bdrs4-sm bdrs60 banner-btn position-relative zi1 animate-up-3 mt30">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 col-xl-6">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-3">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div className="dropdown bootstrap-select">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {getSelectedRole !== null
                                    ? getSelectedRole
                                    : "Choose Category"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="inner show">
                              <ul className="dropdown-menu inner show">
                                {role.map((item, index) => (
                                  <li
                                    onClick={() => roleHandler(item)}
                                    key={index}
                                    className="selected active"
                                  >
                                    <a
                                      className={`dropdown-item selected ${
                                        getSelectedRole === item ? "active" : ""
                                      }`}
                                    >
                                      <span className="text">{item}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-3">
                      <div className="text-center text-xl-start">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-thm w-100 bdrs60"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt20 animate-up-4">
                  <div className="col-xl-9">
                    <div className="row justify-content-between">
                      <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                        <div className="details">
                          <ul className="ps-0 mb-0 d-flex">
                            <li>
                              <div className="timer">
                                <CountUp end={834} duration={2.75} />
                              </div>
                            </li>
                            <li>
                              <span>M</span>
                            </li>
                          </ul>
                          <p className="text-white mb-0">Total Freelancer</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                        <div className="details">
                          <ul className="ps-0 mb-0 d-flex">
                            <li>
                              <div className="timer">
                                <CountUp end={732} duration={2.75} />
                              </div>
                            </li>
                            <li>
                              <span>M</span>
                            </li>
                          </ul>
                          <p className="text-white mb-0">Positive Review</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                        <div className="details">
                          <ul className="ps-0 mb-0 d-flex">
                            <li>
                              <div className="timer">
                                <CountUp end={90} duration={2.75} />
                              </div>
                            </li>
                            <li>
                              <span>M</span>
                            </li>
                          </ul>
                          <p className="text-white mb-0">Order recieved</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3 funfact_one at-home2-hero pe-0">
                        <div className="details">
                          <ul className="ps-0 mb-0 d-flex">
                            <li>
                              <div className="timer">
                                <CountUp end={236} duration={2.75} />
                              </div>
                            </li>
                            <li>
                              <span>M</span>
                            </li>
                          </ul>
                          <p className="text-white mb-0">Projects Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-none d-xl-block position-relative">
              <img
                style={{ height: "fit-content" }}
                src="/images/about/about-1.png"
                alt="hero"
                className="animate-up-1 main-img-home2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
