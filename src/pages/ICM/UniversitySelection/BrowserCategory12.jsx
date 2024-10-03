import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function BrowserCategory12() {
  const [showSwiper, setShowSwiper] = useState(false);
  
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  const newCategories = [
    {
      title: "How We Help You Choose the Right University?",
      description: "We ensure you select a university known for excellence in your chosen field, offering top-notch programs, experienced faculty, and research opportunities that align with your academic interests.",
      iconClass: "icon-uni-help" // Placeholder for an icon class
    },
    {
      title: "Academic Strengths and Course Offerings",
      description: "We provide insights into universities with strong industry connections, internship programs, and high employability rates, ensuring you have the best career prospects and networking opportunities after graduation.",
      iconClass: "icon-academic-strength" // Placeholder for an icon class
    },
    {
      title: "Budget and Financial Aid",
      description: "We help you find universities that fit your financial situation by considering tuition fees, living expenses, and financial aid opportunities, including scholarships and grants, so you can make a cost-effective choice.",
      iconClass: "icon-financial-aid" // Placeholder for an icon class
    },
    {
      title: "Location Preferences",
      description: "Whether you prefer an urban or rural setting, we match you with universities in locations that suit your lifestyle, cultural interests, and future plans, including safety, climate, and job markets.",
      iconClass: "icon-location-preferences" // Placeholder for an icon class
    }
  ];

  return (
    <section className="pb40-md pb90" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="row align-items-center wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title" style={{ fontSize: '24px', color: '#333' }}>How We Help You Choose the Right University ?</h2>
            </div>
          </div>
          <div className="col-lg-3">
          </div>
        </div>
        <div className="row d-none d-lg-flex wow fadeInUp">
          {newCategories.map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="iconbox-style1 at-home12-v2" style={{ border: '1px solid #ddd', borderRadius: '15px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '330px' }}>
                <div className="details mt20" style={{ flexGrow: 1 }}>
                  <h4 className="title" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    <Link to="/service-1" style={{ color: '#ff8c00', textDecoration: 'none' }}>{item.title}</Link>
                  </h4>
                  <br />
                  <p className="mb-0" style={{ color: '#666' }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
                        <div className="iconbox-style1 bdr1" style={{ border: '1px solid #ddd', borderRadius: '15px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '330px' }}>
                          <div className="icon">
                            <span className={item.iconClass} style={{ fontSize: '40px', color: '#ff8c00' }}></span>
                          </div>
                          <div className="details mt20" style={{ flexGrow: 1 }}>
                            <h4 className="title" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                              <Link to="/service-1" style={{ color: '#ff8c00', textDecoration: 'none' }}>{item.title}</Link>
                            </h4>
                            <p className="mb-0" style={{ color: '#666' }}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="row">
              <div className="col-auto">
                <button className="swiper__btn btn__prev__001" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              <div className="col-auto">
                <div className="swiper__pagination swiper__pagination__001"></div>
              </div>
              <div className="col-auto">
                <button className="swiper__btn btn__next__001" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
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
