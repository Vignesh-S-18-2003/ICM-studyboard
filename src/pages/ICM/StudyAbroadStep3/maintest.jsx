import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import Test1 from "./test1";
import Test2 from "./test2";

export default function Maintest() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  // Array of components to be rendered in each slide
  const components = [<Test1 />, <Test2 />];

  return (
    <>
      <section>
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12 position-relative">
              {showSwiper && (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={{
                    prevEl: ".btn__prev__008",
                    nextEl: ".btn__next__008",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__008",
                    clickable: true,
                  }}
                >
                  {components.map((Component, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">{Component}</div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="testimonial__3">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button className="swiper__btn btn__prev__008">
                      <i className="far fa-arrow-left-long" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <div className="swiper__pagination swiper__pagination__008"></div>
                  </div>
                  <div className="col-auto">
                    <button className="swiper__btn btn__next__008">
                      <i className="far fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
