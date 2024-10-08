import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const hero = ["/images/StudyAbroadStep6/s1.jpg", "/images/StudyAbroadStep6/s1.jpg"];

export default function Heros() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const navigate = useNavigate();

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
                  <div className="carousel-btn-block banner-carousel-btn">
                    {/* Uncomment if you want carousel buttons */}
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
              <div className="col-xxl-12">
                <div className="position-relative pt200 pr0 mr0">
                  <h1 className="banner-title animate-up-2">
                    Arrive and Thrive
                  </h1>
                  <h3 className="banner-text text-white ff-heading mb25 mr25 animate-up-3 p15">
                    Embrace your new environment and unlock opportunities for personal and academic growth. Connect with local resources, build a support network, and make the most of your study abroad experience.
                  </h3>
                  {/* Uncomment and modify if you want to add search functionality */}
                  {/* <div className="advance-search-tab bgc-white bgct-sm p10 p0-md bdrs4 banner-btn position-relative zi9 animate-up-4">
                    <div className="row">
                      <div className="col-md-5 col-lg-6 col-xl-10">
                        <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                          <HeroSearch1 />
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 ps-md-0">
                        <div className="text-center text-xl-end">
                          <button
                            onClick={searchHandler}
                            className="ud-btn btn-thm w-100 px-4"
                            type="button"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
