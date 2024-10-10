import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Register",
};

export default function Register() {
  <MetaComponent meta={metadata} />;
  return (
    <>
      <section className="our-register">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            ></div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            {/* Left Column for Image */}
            <div className="col-lg-6">
              <div className="main-title text-center">
                <h2 className="title">Create an account</h2>
                <p className="paragraph">
                  it's easy! just take a minute and provide the details
                </p>
              </div>
              <div className="register-image">
                <img
                  src="/images/r1.png"
                  alt="Register"
                  style={{ width: "89%", borderRadius: "12px" }}
                />
              </div>
            </div>

            {/* Right Column for Register Form */}
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30 text-center">
                  <h4>Let's create your account!</h4>
                  <p className="text mt20">
                    Already have an account?{" "}
                    <Link to="/login" className="text-thm">
                      Log In!
                    </Link>
                  </p>
                </div>

                <div className="mb25">
                  <label className="form-label fw500 dark-color">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ali"
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="93792929"
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="*******"
                  />
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="mb20 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    style={{
                      appearance: "none",
                      width: "20px",
                      height: "20px",
                      border: "2px solid #FFA500",
                      borderRadius: "4px",
                      position: "relative",
                      cursor: "pointer",
                      outline: "none",
                      marginRight: "8px",
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="termsCheck"
                    style={{ cursor: "pointer" }}
                  >
                    Yes, I understand and agree to{" "}
                    <Link to="/terms-and-conditions" className="text-thm">
                      ICM terms and conditions
                    </Link>
                    .
                  </label>
                </div>

                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm default-box-shadow2"
                    type="button"
                  >
                    Create Account <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10" /> Continue Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google" /> Continue Google
                  </button>
                  <button
                    className="ud-btn btn-apple fz14 fw400"
                    type="button"
                  >
                    <i className="fab fa-apple" /> Continue Apple
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
