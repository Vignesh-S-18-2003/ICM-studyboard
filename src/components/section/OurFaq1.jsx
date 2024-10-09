export default function Section3() {
  return (
      <>
          <div className="ui-content">
              <h1 className="title" style={{ color: 'orange' , textAlign: 'center'  }} > Study Abroad Steps</h1>
              <div className="accordion-style1 faq-page mb90">
                  <div className="accordion" id="accordionExample">
                      <div className="accordion-item active">
                          <h2 className="accordion-header" id="headingOne" >
                              <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                              >
                                  <span className="accordion-number">1.</span> Why Study Abroad?
                              </button>
                          </h2>
                          <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  Studying abroad offers a range of benefits that can positively impact both your personal and professional development.
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
                                  <span className="accordion-number">2.</span> Where and What to Study?
                              </button>
                          </h2>
                          <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  Choosing where and what to study abroad depends on several factors, such as your academic interests, career goals, budget, and personal preferences.
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
                                  <span className="accordion-number">3.</span> How Do I Apply?
                              </button>
                          </h2>
                          <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  The process of applying to study abroad varies depending on the country, university, and program you choose.
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
                                  <span className="accordion-number">4.</span> After Receiving an Offer
                              </button>
                          </h2>
                          <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  Once you’ve received an offer to study abroad, there are several important steps to take before you can begin your studies.
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
                                  <span className="accordion-number">5.</span> Prepare to Depart
                              </button>
                          </h2>
                          <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  After receiving your offer and completing the necessary steps like confirming the offer, applying for a visa, and securing accommodation, it’s time to prepare for your departure.
                              </div>
                          </div>
                          <div style={{ borderBottom: '2px solid orange', margin: '10px 0' }}></div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                              <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSix"
                                  aria-expanded="false"
                                  aria-controls="collapseSix"
                              >
                                  <span className="accordion-number">6.</span> Arrive and Thrive
                              </button>
                          </h2>
                          <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-parent="#accordionExample"
                          >
                              <div className="accordion-body">
                                  Once you’ve arrived in your study abroad destination, the next step is to settle in and ensure a smooth transition into your new environment.
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
