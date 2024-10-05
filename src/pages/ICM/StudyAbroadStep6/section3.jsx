export default function Section3() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}> Arrive and Thrive</h2>
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
                  <span className="accordion-number">1.</span> Settling In
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Learn about your new environment, including local customs, transportation options, and essential services to help you feel at home quickly.
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
                  <span className="accordion-number">2.</span> Building a Support Network
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Connect with local communities, fellow students, and cultural organizations to establish a supportive network that enhances your experience abroad.
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
                  <span className="accordion-number">3.</span> Understanding Local Services
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Familiarize yourself with local healthcare, transportation, and other essential services to ensure a smooth transition into your new life.
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
                  <span className="accordion-number">4.</span> Cultural Engagement
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Participate in local events, workshops, and cultural activities to enrich your experience and foster connections with the community.
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
