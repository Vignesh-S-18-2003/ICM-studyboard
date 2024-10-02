import { useState } from "react";

export default function Testimonial1() {
  const [getCurrentTestimonial, setCurrentTestimonial] = useState(null);

  // handler
  const testimonialHandler = (data) => {
    setCurrentTestimonial(data);
  };

  return (
    <>
      <section className="our-testimonial">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 style={{ color: 'orange'}}>Eligibility Criteria</h2>
                <h5 className="paragraph">
                  A student needs to be eligible for an education loan to study abroad, and here are the criteria you must follow:
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-8 m-auto wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="testimonial-style2">
                <div className="testi-content" style={{ textAlign: "left" }}>
                  <ul className="list-unstyled" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>1. Students are required to prove their admission to a particular university with a good previous academic record.</li>
                    <br />
                    <li>2. A student applying for a loan to study abroad should fall under the category of 18 to 35 years.</li><br />
                    <li>3. The parent or guardian has to be the co-applicant to prove the guarantee for loan repayment.</li><br />
                    <li>4. If your loan does not come under the limited loan borrowing capacity, then you should have some collateral like property, assets, or fixed deposits.</li>
                  </ul>
                </div>
                <div className="tab-list position-relative">
                  <ul className="nav nav-pills justify-content-md-center">
                    {/* Any additional logic for tabs can be added here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
