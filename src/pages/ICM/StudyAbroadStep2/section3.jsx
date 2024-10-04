export default function Section3() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}> How to Choose the Right Country</h2>
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
                  <span className="accordion-number">1.</span> Academic Fit
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Explore countries renowned for excellence in specific fields like engineering, business, or the arts. Choose a destination that aligns with your academic and career goals.
                </div>
              </div>
              {/* Orange line after the first point */}
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">2.</span> Cultural Preferences
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Consider the language, lifestyle, and cultural norms of each country to ensure you feel comfortable and thrive in your new environment.
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">3.</span> Cost of Living and Tuition Fees
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Understand the average living expenses and tuition fees in top study abroad destinations to plan your budget effectively.
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">4.</span> Visa and Work Opportunities
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Get details on student visa requirements, part-time job options, and post-study work permits to help you stay and work after graduation.
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
