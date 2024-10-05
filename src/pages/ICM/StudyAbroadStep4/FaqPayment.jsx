export default function FaqPayment() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}><u>Frequently Asked Questions</u></h2>
        <div className="accordion-style1 faq-page mb90">
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
                >
                  How do I start my application process for studying abroad?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Begin by researching programs and universities that align with your academic and career goals. Once you have selected a few, review their application requirements and deadlines carefully.
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
                >
                  What documents do I need to prepare for my application?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Most applications will require academic transcripts, letters of recommendation, a personal statement, a resume/CV, proof of language proficiency (like TOEFL or IELTS), and sometimes a portfolio or work samples for certain programs.
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
                >
                  How do I submit my application?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Applications are typically submitted online through the university’s website or application portal. Make sure to upload all required documents and pay the application fee, if applicable, before the deadline.
                </div>
              </div>
            </div>
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
                  How long does it take to receive a response?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Processing times vary by institution, but you can expect to receive a response within a few weeks to a few months after submitting your application. Be sure to check the status of your application regularly.
                </div>
              </div>
            </div>
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
                  What should I do after receiving an offer letter?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  After receiving an offer letter, it's important to carefully review the offer details, including any conditions attached. Here are the steps to follow:
                  <ul>
                    <li><strong>Confirm Your Acceptance:</strong> Follow the university's instructions to formally accept the offer, and if required, pay a deposit to secure your spot.</li>
                    <li><strong>Apply for a Student Visa:</strong> Begin the visa application process using your offer letter and other necessary documents like proof of funds, academic records, and language proficiency test results.</li>
                    <li><strong>Organize Accommodation:</strong> Start looking for accommodation options, whether on-campus or off-campus. Many universities provide housing assistance for international students.</li>
                    <li><strong>Arrange Finances:</strong> Plan your budget, including tuition, living expenses, travel, and health insurance. Explore scholarships, grants, or financial aid options.</li>
                    <li><strong>Book Travel:</strong> Once your visa is confirmed, book your flights and plan your arrival, ensuring you have transportation from the airport to your accommodation.</li>
                    <li><strong>Prepare for Enrollment:</strong> Keep track of any pre-enrollment tasks, such as attending orientation sessions or completing paperwork.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
