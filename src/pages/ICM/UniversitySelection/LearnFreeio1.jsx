import LearnFreeioCard from "./LearnFreeioCard"; // Ensure this component is designed for testimonials
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { learnFreeio1 } from "@/data/project"; // Importing learnFreeio1 for testimonials
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";

export default function LearnFreeio1() {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={`
                ${pathname === "/home-9" ? "bgc-light-yellow" : "bgc-thm3"}
                ${pathname === "/home-14" ? "bgc-violet" : "bgc-thm3"}
                `}
      >
        <div className="container">
          <div className="row align-items-md-center">
            <div
              className="col-md-6 col-lg-8 mb30-md wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-title">
                <h2 className="title">What People Are Saying About Us</h2>
                <p className="paragraph">
                  Discover why our users love our services.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="funfact_one">
                    <div className="details">
                      <ul className="ps-0 d-flex mb-0">
                        <li>
                          <div className="timer">
                            <CountUp
                              decimals={1}
                              end={4.9}
                              duration={2.75}
                              enableScrollSpy
                            />
                          </div>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <div className="timer">
                            <CountUp end={5} duration={5} enableScrollSpy />
                          </div>
                        </li>
                      </ul>
                      <p className="text mb-0">
                        Clients rate our services highly
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="funfact_one">
                    <div className="details">
                      <ul className="ps-0 d-flex mb-0">
                        <li>
                          <div className="timer">
                            <CountUp end={99} duration={2.75} enableScrollSpy />
                          </div>
                        </li>
                        <li>
                          <span>%</span>
                        </li>
                      </ul>
                      <p className="text mb-0">
                        95% of customers are satisfied <br /> with our services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="funfact_one">
                    <div className="details">
                      <h2>Award-winning</h2>
                      <p className="text mb-0">Recognized for excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div
                className="ui-hightest-rated mb15 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={{
                    prevEl: ".btn__prev__003",
                    nextEl: ".btn__next__003",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__003",
                    clickable: true,
                  }}
                >
                  {learnFreeio1.map((item, index) => (
                    <SwiperSlide key={index}>
                      <LearnFreeioCard data={item} /> {/* Using learnFreeio1 for testimonials */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__003">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__003"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__003">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
