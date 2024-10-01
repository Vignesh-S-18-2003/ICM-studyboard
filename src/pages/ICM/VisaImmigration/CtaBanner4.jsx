import { useLocation } from "react-router-dom";

export default function CtaBanner4() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="cta-banner-about2 mx-auto maxw1700 position-relative mx20-lg pt60-lg pb60-lg">
      <img
  className="cta-about2-img d-none d-xl-block h-100 object-fit-contain"
  src={
    pathname === "/about-2"
      ? "/images/Visa/v3.jpg"
      : pathname === "/VisaImmigration" && "public/images/Visa/v3.jpg"
  }
  alt="about"
/>

        <div className="container">
          <div className="row">
            <div className="col-md-11 wow fadeInUp" data-wow-delay="200ms">
              <div className="main-title">
                <h2 className="title text-capitalize">
                  <span style={{ borderBottom: "3px solid orange" }}>
                    Types Of Visa
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Add d-flex and align-items-stretch to the row */}
          <div className="row wow fadeInDown d-flex align-items-stretch" data-wow-delay="400ms">
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30 flex-grow-1">
                <span className="icon fz40 flaticon-cv" />
                <h4 className="iconbox-title mt20">Student Visa</h4>
                <p className="text mb-0">
                  Overview of student visas, including eligibility, validity
                  periods, and renewal processes.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30 flex-grow-1">
                <span className="icon fz40 flaticon-web-design" />
                <h4 className="iconbox-title mt20">Dependent Visa</h4>
                <p className="text mb-0">
                  Information on visas for family members or dependents.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30 flex-grow-1">
                <span className="icon fz40 flaticon-secure" />
                <h4 className="iconbox-title mt20">Work Rights During Study</h4>
                <p className="text mb-0">
                  Work permits and conditions for working while studying in
                  different countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
