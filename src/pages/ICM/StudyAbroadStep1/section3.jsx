export default function Section3() {
    return (
      <>
        <div className="ui-content">
          <h2 className="title" style={{ color: 'orange' }}> Top Reasons to Study Abroad</h2>
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
                    <span className="accordion-number">1.</span> Academic Excellence and Diverse Learning Environments
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Set up your profile to discover tailored recommendations, expedited application processes, and a wealth of resources for your overseas education journey.
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
                    <span className="accordion-number">2.</span> Global Exposure and Cultural Immersion
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Live and learn in a new culture, improve language skills, and gain a deeper understanding of global perspectives.
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
                    <span className="accordion-number">3.</span> Career Advantages
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Gain valuable skills and experiences that enhance your employability in a competitive job market.
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
                    <span className="accordion-number">4.</span> Personal Growth and Independence
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Develop self-confidence, resilience, and adaptability by navigating new environments and overcoming challenges.
                  </div>
                </div>
              </div>
              <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
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
                    <span className="accordion-number">5.</span> Travel and Exploration
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Explore new cities, countries, and cultures while making lifelong memories and friendships.
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
