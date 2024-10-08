import { useLocation } from "react-router-dom";

export default function IeltsFaqs() {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={`our-faqs pb50 ${
          pathname === "/become-seller"
            ? "pt-0"
            : pathname === "/contact"
            ? "pb70"
            : ""
        }`}
      >
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2 className="title">IELTS FAQs</h2>
                
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8 mx-auto">
              <div className="ui-content">
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item active">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >How to register for IELTS exam ?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          
To register for the IELTS exam, visit the official IELTS website to check available dates and locations. Choose between the Academic or General Training test types, gather required documents (like a passport), and complete the online application. After payment, you’ll receive a confirmation email with your test details.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >How many times can I take the IELTS ?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        You can take the IELTS exam as many times as you wish. There are no restrictions on the number of attempts, so you can retake the test whenever you feel ready to improve your score. However, it's a good idea to allow time for preparation and practice between attempts to achieve better results. Always check with your intended institution or immigration authority for their specific score requirements and validity periods, as some may consider only your most recent score or require a certain score threshold.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >What is the validity of IELTS exam ?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        The validity of the IELTS exam is typically two years from the date of your test. After this period, most institutions and organizations may not accept your IELTS scores, as they consider language proficiency to be a reflection of your current skills. Always check with the specific institution or organization to confirm their score validity requirements, as some may have different policies.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >How do I pass score to college ?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        To send your IELTS scores to a college, check the minimum score requirements on their website. During registration, select up to five institutions to receive your scores for free. If needed later, request additional copies of your Test Report Form (TRF) through the IELTS website, ensuring timely submission before deadlines.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >How soon do I get my score ?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        You typically receive your IELTS scores within 13 days after taking the test. The scores are released online on the official IELTS website, and you will also receive a hard copy of your Test Report Form (TRF) by mail. For the Computer-based IELTS, results may be available even sooner, usually within 5 to 7 days. Always check with your specific test center for exact timelines, as they may vary slightly.
                        </div>
                      </div>
                    </div>
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
