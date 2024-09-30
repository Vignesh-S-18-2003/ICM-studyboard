import { Link } from "react-router-dom";

export default function OurFunFact2() {
  return (
    <>
      <section className="pt150 pt60-lg pb60-lg pb30-md">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="home4-about-1 position-relative">
                <img
                  className="w-100 mb30-md h-100 object-fit-contain"
                  src="public\images\Visa\v2.png"
                  alt="about"
                />
                <img
                  src="/images/about/happy-client.png"
                  alt="about"
                  className="bounce-x img-1 default-box-shadow4 object-fit-contain"
                />
                <div className="iconbox-small1 d-none d-lg-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-lg-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">+12M</h6>
                    <p className="text fz13 mb-0">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="mb30">
                <div className="mb30">
                  <h2 className="title mb30">
                    Personalized Visa and Immigration {" "}
                    <br className="d-none d-xl-block" />
                    Support Tailored to Your Needs
                  </h2>
                  <p className="text">
                    Our team provides personalized guidance on the visa and immigration process, from preparing essential documents to navigating embassy appointments. We ensure a seamless experience from start to finish.
                  </p>
                </div>
                <div className="list-style2">
                  <ul className="mb25">
                    <li>
                      <i className="far fa-check" />
                      Expert support on visa documentation and applications
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Assistance with embassy appointments and interviews
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Comprehensive guidance tailored to your visa needs
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="ud-btn btn-thm-border">
                  Get Visa Support <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
