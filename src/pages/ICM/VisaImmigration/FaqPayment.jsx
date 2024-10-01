export default function FaqPayment() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}>
          <u>Frequently Asked Questions About Visa Process</u>
        </h2>
        <div className="accordion-style1 faq-page mb90">
          <div className="accordion" id="accordionExample">
            {/* FAQ 1: How long does the visa process take? */}
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
                  How long does the visa process take?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The visa process timeline varies depending on the country and type of visa. On average, it can take anywhere from a few weeks to a few months. It's recommended to apply for your visa at least 3 to 6 months before your planned departure.
                </div>
              </div>
            </div>

            {/* FAQ 2: What happens if my visa application is rejected? */}
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
                  What happens if my visa application is rejected?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  If your visa application is rejected, you will typically be given the reason for rejection. You may be able to appeal the decision, correct the issues with your application, or reapply after addressing the concerns. It's important to carefully review the rejection notice and consult with an immigration advisor.
                </div>
              </div>
            </div>

            {/* FAQ 3: Can I work with a student visa? */}
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
                  Can I work with a student visa?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, many countries allow international students to work while studying. However, there are restrictions on the number of hours you can work per week. Most student visas allow for part-time work during the academic term and full-time work during holidays. Be sure to check the specific work rights for your visa.
                </div>
              </div>
            </div>

            {/* FAQ 4: How long does the visa process take? (duplicate) */}
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
                  How long does the visa process take?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The visa process can take several weeks to a few months, depending on your country of application and the type of visa you are applying for. It is advised to apply well in advance to avoid any delays.
                </div>
              </div>
            </div>

            {/* FAQ 5: What happens if my visa application is rejected? (duplicate) */}
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
                  What happens if my visa application is rejected?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  In case of a visa rejection, you will need to understand the reasons behind it. Depending on the situation, you may be able to appeal or reapply after making the necessary changes or providing additional documentation.
                </div>
              </div>
            </div>

            {/* FAQ 6: Can I work with a student visa? (duplicate) */}
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
                  Can I work with a student visa?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  International students are usually permitted to work part-time while studying. The number of hours and work conditions may vary depending on the country. Be sure to understand the regulations for your specific student visa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
