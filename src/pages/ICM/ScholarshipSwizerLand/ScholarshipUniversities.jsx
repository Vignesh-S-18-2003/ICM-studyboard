import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { freelancer1, hightedRated1 } from "@/data/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeighestRetedCard2 from "@/components/card/HighestRatedCard2";
import SSwitzerLandCard from "./SSwizCard";
import { Scholarshipfreelancer } from "./ScholarshipFreelancer";

export default function ScholarshipUniversities() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Top Universites in SwitzerLand!</h2>
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" to="/freelancer-1">
                  Browse All
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="navi_pagi_bottom_center">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__013",
                      nextEl: ".btn__next__013",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__013",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                      992: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                      },
                    }}
                  >
                    {Scholarshipfreelancer.map((item, index) => (
                      <SwiperSlide key={index}>
                        <SSwitzerLandCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__013">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__013"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__013">
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
