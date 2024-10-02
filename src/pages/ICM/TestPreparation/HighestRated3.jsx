import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import the card component
import HeighestRetedCard3 from "./HighestRatedCard3";

// Updated example data for 3 mentors (all using the same image)
const mentors = [
  {
    name: "John Doe",
    image: "/images/Visa/v4.jpg", // Updated image path
    designation: "Senior Developer",
  },
  {
    name: "Jane Smith",
    image: "/images/Visa/v5.jpg", // Updated image path
    designation: "Project Manager",
  },
  {
    name: "Michael Johnson",
    image: "/images/Visa/v6.jpg", // Updated image path
    designation: "UI/UX Designer",
  },
];

export default function HighestRated3() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Our Mentors</h2>
                <p className="paragraph">
                  Meet our expert mentors who are here to guide you.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link
                  className="ud-btn btn-white2 double-border bdrs60"
                  to="/mentors"
                >
                  All Mentors
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="navi_pagi_bottom_center slider-3-grid">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__016",
                      nextEl: ".btn__next__016",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__016",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      992: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                      1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                      },
                    }}
                  >
                    {mentors.map((mentor, index) => (
                      <SwiperSlide key={index}>
                        <HeighestRetedCard3 data={mentor} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__016">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__016"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__016">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
