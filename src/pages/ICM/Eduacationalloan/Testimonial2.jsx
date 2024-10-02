import { useState } from "react";

export default function Testimonial2() {
  const [getCurrentTestimonial, setCurrentTestimonial] = useState(null);

  // handler
  const testimonialHandler = (data) => {
    setCurrentTestimonial(data);
  };

  return (
    <>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 style={{ color: 'orange'}}>Documents Required</h2>
                <h5 className="paragraph">
                  You must submit some essential documents to secure an education loan to study abroad, here is a list of documents you must carry.
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
                    <li>1. Letter of admission for the university you are enrolled in.</li><br />
                    <li>2. Previous academic records with good scores.</li><br />
                    <li>3. Your personal identification documents like Voter ID, Passport, Aadhar Card.</li><br />
                    <li>4. Residential proof documents like rent agreements, telephone bills.</li><br />
                    <li>5. Bank statements, and income statements to prove financial stability.</li><br />
                    <li>6. Documents proving your collateral asset for an education loan to study abroad.</li>
                  </ul> <br />
                  <p>
                    Education abroad is a big investment on the part of the student and towards their future. Every individual desires to receive an education from an international university, a desire that can be realized when you acquire the right education loan to study abroad. Therefore, early research is important, make copies of the required documents, and go for the most appropriate loan.
                  </p>
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
    </>
  );
}
