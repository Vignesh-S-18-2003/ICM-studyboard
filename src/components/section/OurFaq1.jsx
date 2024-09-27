import { useLocation } from "react-router-dom";

export default function OurFaq1() {
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
                <h2 className="title">Study Abroad Steps</h2>
                
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
                        >Why Study abroad ?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
                        >Where and what to study ?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
                        >How do I apply ?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
                        >After receiving an offer 
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
                        >Prepare to depart
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
                        >Arrive and thrive
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordionExample"
                      >
                        {/* <div className="accordion-body">
                          Cras vitae ac nunc orci. Purus amet tortor non at
                          phasellus ultricies hendrerit. Eget a, sit morbi nunc
                          sit id massa. Metus, scelerisque volutpat nec sit vel
                          donec. Sagittis, id volutpat erat vel.
                        </div> */}
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
