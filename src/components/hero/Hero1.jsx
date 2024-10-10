import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper";
import HeroSearch1 from "../element/HeroSearch1";
import { Link, useNavigate } from "react-router-dom";

const role = [
  "Select Role",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

const popular = [
];

const hero = ["/images/home/home-1.png", "/images/home/home-2.png"];

export default function Hero1() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const navigate = useNavigate();
  // search handler
  const searchHandler = () => {
    navigate("/freelancer-1");
  };
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="home-one p-0 space-maintain-1">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home1_style">
                <div className="ui-hero-slide">
                  {showSwiper && (
                    <Swiper
                      className="mySwiper"
                      loop={true}
                      effect={"fade"}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[EffectFade, Navigation]}
                      navigation={{
                        nextEl: ".right-btn",
                        prevEl: ".left-btn",
                      }}
                    >
                      {hero.map((item, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={item}
                            className="ui-hero-slide__img"
                            alt="Hero Banner"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="carousel-btn-block banner-carousel-btn">
                    {/* <span className="carousel-btn left-btn">
                      <i className="fas fa-chevron-left left" />
                    </span>
                    <span className="carousel-btn right-btn">
                      <i className="fas fa-chevron-right right" />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-xxl-7">
                <div className="position-relative">
                  <h1 className="banner-title animate-up-2">
                  Unlock the door to your{" "}
                  <br className="d-none d-lg-block" />
                    study abroad dreams{" "}
                    <br className="d-none d-lg-block" />
                  </h1>
                  <h3 className="banner-text text-white ff-heading mb25 animate-up-3">
                  At International Campus Masters, we tailor courses, offer a warm welcome, and provide unwavering support to make your dreams real.
                  </h3>
                  
                   <div className="d-none d-md-flex mt30 banner-text animate-up-5">
                    {/* <p className="hero-text fz15 me-2 text-white mb-0">
                      Popular Searches
                    </p> */}
                    {popular.map((elm, i) => (
                      <a
                        key={i}
                        className="text-white"
                        style={{ marginRight: "5px" }}
                      >
                        {`${elm}${i != popular.length - 1 ? "," : " "}`}
                      </a>
                    ))}
                  </div> 
                  <Link to="/contact" className="ud-btn btn-thm2">
                  Get Started <i className="fal fa-arrow-right-long" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
