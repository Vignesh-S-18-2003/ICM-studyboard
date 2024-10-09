import { useLocation } from "react-router-dom";

export default function DestinationFaqs() {
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
                <h2 className="title"> FAQs Related to Australia</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8 mx-auto">
              <div className="ui-content">
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <div className="accordion" id="accordionExample">
                    {/* Accordion Item 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How much can earn in Australia as a student ?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          As an international student in Australia, you can work
                          up to 40 hours per fortnight during semesters and
                          unlimited hours during breaks. Earnings typically
                          range from AUD 20 to AUD 30 per hour, depending on
                          the job type and location. Retail and hospitality
                          roles generally pay lower, while specialized jobs can
                          offer higher wages.
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How much Australian student visa cost ?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The cost of an Australian student visa (subclass 500)
                          is typically AUD 650. However, additional costs may
                          apply, including health insurance, which is mandatory
                          for international students. Fees may vary based on
                          factors such as the duration of your studies and any
                          additional services. It's advisable to check the
                          official Department of Home Affairs website for the
                          most current information and potential changes in
                          fees.
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Is Australia costly for Indian students ?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Australia can be considered relatively costly for
                          Indian students due to high tuition fees and living
                          expenses. Tuition fees range from AUD 20,000 to AUD
                          45,000 per year, depending on the course and
                          institution. Living expenses, including accommodation,
                          food, transportation, and health insurance, can add
                          another AUD 15,000 to AUD 25,000 annually. However,
                          many students find that the quality of education and
                          potential job opportunities justify the investment.
                          It’s essential to budget wisely and explore
                          scholarships to help manage costs.
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What is 485 post study work in Australia ?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The 485 Temporary Graduate visa in Australia allows
                          international students who have recently graduated
                          from an Australian institution to work in Australia
                          for up to 18 months to 4 years, depending on their
                          qualification. This visa aims to provide graduates
                          with practical work experience in their field of
                          study, enhancing their skills and employability.
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What is the GTE to study in Australia ?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The Genuine Temporary Entrant (GTE) requirement is a
                          crucial part of the student visa application process
                          for Australia. It assesses whether applicants
                          genuinely intend to stay in Australia temporarily for
                          study purposes. To meet the GTE requirement, you must
                          provide a statement addressing your intentions,
                          outlining your study plans, and demonstrating that you
                          will return to your home country after your studies.
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
