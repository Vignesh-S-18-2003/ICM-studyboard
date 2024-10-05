export default function Section3() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}> Top Steps After Receiving an Offer Letter</h2>
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
                  <span className="accordion-number">1.</span> Accept the Offer
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Confirm your acceptance of the offer by the provided deadline. Make sure you understand any conditions that may apply, such as submitting final transcripts or other documents. 
                </div>
              </div>
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
                  <span className="accordion-number">2.</span> Arrange Finances and Scholarships
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Ensure you have adequate funds to cover tuition fees, living expenses, and other costs. Explore scholarships and finalize any financial aid or sponsorships.
                </div>
              </div>
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">3.</span> Apply for Your Student Visa
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Begin your visa application process as soon as possible. Make sure you gather all required documents, including your offer letter, proof of finances, and other required information.
                </div>
              </div>
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">4.</span> Secure Accommodation
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Whether you plan to live on-campus or off-campus, securing accommodation before arrival is key. Research and book your housing as early as possible to ensure a smooth transition.
                </div>
              </div>
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                  <span className="accordion-number">5.</span> Prepare for Your Departure
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Make a checklist of tasks, including booking flights, attending pre-departure orientations, and packing essential items for your study abroad journey.
                </div>
              </div>
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
