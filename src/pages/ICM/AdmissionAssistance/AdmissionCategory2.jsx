import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function AdmissionCategory2() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    setShowSwiper(true);
  }, []);

  const newCategories = [
    {
      title: "Interview Preparation",
      description:
        "Practice mock interviews and receive feedback to boost your confidence and improve your interview skills",
      iconClass: "icon-uni-help", // Placeholder for an icon class
    },
    {
      title: "Document Compilation",
      description:
        "Assistance with organizing and preparing all required documents for a complete and timely application submission",
      iconClass: "icon-academic-strength", // Placeholder for an icon class
    },
  ];

  return (
    <section
      className="pb40-md pb90"
      style={{ padding: "40px 0", backgroundColor: "#f9f9f9" }}
    >
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="col-lg-9">
            {/* <div className="main-title2">
              <h2 className="title" style={{ fontSize: "24px", color: "#333" }}>
                How We Help You Choose the Right University?
              </h2>
            </div> */}
          </div>
        </div>

        {/* Desktop Version */}
        <div className="row d-none d-lg-flex wow fadeInUp">
          {newCategories.map((item, i) => (
            <div key={i} className="col-md-6">
              <div
                className="iconbox-style1 at-home12-v2"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "200px", // Uniform height
                }}
              >
                <div
                  className="details mt20"
                  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <h4
                    className="title"
                    style={{ fontSize: "18px", fontWeight: "bold", minHeight: "55px" }}
                  >
                    <Link
                      to="/service-1"
                      style={{ color: "#ff8c00", textDecoration: "none" }}
                    >
                      {item.title}
                    </Link>
                  </h4>
                  <p
                    className="mb-0"
                    style={{
                      color: "#666",
                      minHeight: "120px", // Ensures equal height for descriptions
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Version with Swiper */}
        <div className="row d-block d-lg-none">
          <div className="col-lg-12">
            <div className="ui-browser wow fadeInUp">
              {showSwiper && (
                <Swiper
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".btn__prev__001",
                    nextEl: ".btn__next__001",
                  }}
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__001",
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    540: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {newCategories.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <div
                          className="iconbox-style1 bdr1"
                          style={{
                            border: "1px solid #ddd",
                            borderRadius: "15px",
                            padding: "20px",
                            backgroundColor: "#fff",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "330px", // Consistent height for mobile cards
                          }}
                        >
                          <div className="icon">
                            <span
                              className={item.iconClass}
                              style={{ fontSize: "40px", color: "#ff8c00" }}
                            ></span>
                          </div>
                          <div
                            className="details mt20"
                            style={{
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <h4
                              className="title"
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              <Link
                                to="/service-1"
                                style={{
                                  color: "#ff8c00",
                                  textDecoration: "none",
                                }}
                              >
                                {item.title}
                              </Link>
                            </h4>
                            <p
                              className="mb-0"
                              style={{ color: "#666" }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-auto">
                <button
                  className="swiper__btn btn__prev__001"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px", // Increased size for better visibility
                    color: "#ff8c00", // Matching color with the theme
                  }}
                >
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              <div className="col-auto">
                <div className="swiper__pagination swiper__pagination__001"></div>
              </div>
              <div className="col-auto">
                <button
                  className="swiper__btn btn__next__001"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px", // Increased size for better visibility
                    color: "#ff8c00", // Matching color with the theme
                  }}
                >
                  <i className="far fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
