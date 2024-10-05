export default function Section3() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}> Preparing to Depart</h2>
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
                  <span className="accordion-number">1.</span> Finalizing Travel Arrangements
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Ensure that your flights are booked, accommodations are confirmed, and you have a clear travel itinerary to follow before your departure.
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
                  <span className="accordion-number">2.</span> Understanding Visa Requirements
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Familiarize yourself with the student visa application process and required documents to ensure a smooth entry into your host country.
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
                  <span className="accordion-number">3.</span> Packing Essentials
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Create a packing list that includes essentials such as clothing, documents, and personal items tailored to your destination's climate and culture.
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
                  <span className="accordion-number">4.</span> Financial Preparation
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Organize your finances, including setting up a local bank account, understanding currency exchange, and budgeting for your initial expenses.
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
