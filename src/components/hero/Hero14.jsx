import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const role = ["City, state, or zip", "Miami", "New York"];

export default function Hero14() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };
  const navigate = useNavigate();

  // search handler
  const searchHandler = () => {
    navigate("/project-1");
  };
  return (
    <section className="hero-home14 pt60 pb60 overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="home14-hero-content">
              <h1 className="title animate-up-1 mb25">
              Accomodation<span> Setup,</span>
                <br className="d-none d-xl-block" />
              </h1>
              <p className="text animate-up-2">
              Support with settling into pre-arranged
accommodations, including detailed
guidance on understanding rental
agreements, local housing regulations,
and assistance in navigating the area
to find nearby amenities like grocery
stores, public transportation, and
essential services. We ensure students
feel comfortable and informed as they
adjust to their new living environment. <br className="d-none d-lg-block" />
              </p>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home13-hero-img position-relative">
              <div className="position-relative">
                <div className="d-flex align-items-center justify-content-end">
                  <div>
                    <img
                      className="img-1 spin-right"
                      src="/images/about/element-13.png" 
                      alt=" image " 
                    />
                    <img
                      className="mb10 wow fadeInLeft"
                      src="ICM-studyboard\public\images\home\happy-hipster-young-woman-carry-backpack-travel-tourist-woman-with-backpack-outdoors-holidays-women-lifestyle-concept.jpg" width="240" height="438"
                      alt=" image "
                    />
                    <div
                      style={{
                        background: "#f7f7f7",
                        borderRadius: "30px 0 0 30px",
                      }}
                      className="funfact_one at-home14-hero-1 mb20-sm py-5 pl35 wow fadeInRight"
                    >
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex justify-content-start">
                          <li>
                            <div className="timer">58</div>
                          </li>
                          <li>
                            <span></span>
                          </li>
                          <li>
                            <span>+</span>
                          </li>
                        </ul>
                        <p className="text mb-0">Partner Universities</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml10">
                    <div className="funfact_one at-home14-hero-2 mb20 py-5 pl35 wow fadeInLeft">
                      <span className="icon flaticon-rocket"></span>
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex justify-content-start">
                          <li>
                            <span></span>
                          </li>
                          <li>
                            <div className="timer">24/ </div>
                          </li>
                          <li>
                            <span>7 </span>
                          </li>
                        </ul>
                        <p className="text mb-0">Support</p>
                      </div>
                    </div>
                    <img
                      style={{ height: "fit-content" }}
                      className="wow fadeInRight"
                      src="ICM-studyboard\public\images\home\young-joyful-woman-with-coffee-go-walking-sunny-cold-day-big-city-pretty-woman-wearing-warm-winter-wollen-sweater-modern-sunglasses-speaking-phone-trvelling-with-camera-bag-happy.jpg" width="240" height="368"
                      alt=" image "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
