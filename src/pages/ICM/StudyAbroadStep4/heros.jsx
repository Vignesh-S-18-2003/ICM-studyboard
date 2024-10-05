import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper";
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

const popular = [];

const hero = ["/images/StudyAbroadStep4/s1.jpg", "/images/StudyAbroadStep4/s1.jpg"];

export default function Heros() {
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
      <section className="home-one p-0 space-maintain-1 postarrivalback">
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
                  <div className="carousel-btn-block banner-carousel-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content">
          <div className="container">
            <div className="row  ">
              <div className="col-xxl-12">
                <div className="position-relative pt200 pr0 mr0">
                  <h1 className="banner-title animate-up-2 ">
                    After Receiving an Offer{" "}
                  </h1>
                  <h3 className="banner-text text-white ff-heading mb25 mr25 animate-up-3 p15">
                    Steps to follow once you’ve received an offer for your international studies
                  </h3>
                  <p className="banner-text text-white ff-heading mb25 animate-up-4">
                    Secure your spot, organize your visa, and prepare for an exciting journey ahead!
                  </p>
                  <div className="d-none d-md-flex mt30 banner-text animate-up-5">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
