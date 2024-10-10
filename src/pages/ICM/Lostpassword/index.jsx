import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LostPassword() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const navigate = useNavigate();

  // Function to handle email form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true); // Show OTP form after email is submitted
  };

  // Function to handle OTP form submission
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setOtpSubmitted(true); // Show new password form after OTP is verified
  };

  // Function to handle password form submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordChanged(true); // Show success message after password is changed
    setTimeout(() => {
      navigate("/login"); // Redirect to login page after 2 seconds
    }, 2000);
  };

  return (
    <>
      <section className="our-lost-password">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Reset Your Password</h2>
                <p className="paragraph">
                  {!emailSubmitted
                    ? "Enter your email address to receive the reset code."
                    : !otpSubmitted
                    ? "Enter the 6-digit code sent to your email to reset your password."
                    : passwordChanged
                    ? "Your password has been changed! Redirecting to login..."
                    : "Enter your new password to complete the reset."}
                </p>
              </div>
            </div>
          </div>

          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">

                {/* Step 1: Email Input */}
                {!emailSubmitted && (
                  <form onSubmit={handleEmailSubmit}>
                    <div className="mb30">
                      <h4>Enter your email</h4>
                    </div>
                    <div className="mb25">
                      <label className="form-label fw500 dark-color">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="d-grid mb20">
                      <button className="ud-btn btn-thm" type="submit">
                        Send Code <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 2: OTP Input */}
                {emailSubmitted && !otpSubmitted && (
                  <form onSubmit={handleOtpSubmit}>
                    <div className="mb30">
                      <h4>Enter the 6-digit code</h4>
                      <p className="text mt20">
                        Didn't receive the code?{" "}
                        <Link to="/resend-code" className="text-thm">
                          Resend Code
                        </Link>
                      </p>
                    </div>
                    <div className="mb25">
                      <label className="form-label fw500 dark-color">Code</label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength="6"
                        placeholder="Enter 6-digit code"
                        required
                      />
                    </div>
                    <div className="d-grid mb20">
                      <button className="ud-btn btn-thm" type="submit">
                        Verify Code <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 3: New Password Input */}
                {otpSubmitted && !passwordChanged && (
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="mb30">
                      <h4>Set Your New Password</h4>
                    </div>
                    <div className="mb25">
                      <label className="form-label fw500 dark-color">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter new password"
                        required
                      />
                    </div>
                    <div className="mb25">
                      <label className="form-label fw500 dark-color">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm new password"
                        required
                      />
                    </div>
                    <div className="d-grid mb20">
                      <button className="ud-btn btn-thm" type="submit">
                        Reset Password <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 4: Success message */}
                {passwordChanged && (
                  <div className="text-center">
                    <h4>Your password has been changed!</h4>
                    <p>Redirecting to login...</p>
                  </div>
                )}

                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>

                <div className="d-grid mb20">
                  <Link to="/login" className="ud-btn btn-thm">
                    Back to Log In <i className="fal fa-arrow-left-long" />
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
