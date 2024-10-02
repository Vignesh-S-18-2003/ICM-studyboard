export default function FaqPayment() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title" style={{ color: 'orange' }}>
          <u>Frequently Asked Questions</u>
        </h2>
        <div className="accordion-style1 faq-page mb90">
          <div className="accordion" id="accordionExample">
            {/* FAQ 1: What are the documents required for applying for an education loan to study abroad? */}
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
                  What are the documents required for applying for an education loan to study abroad?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To apply for an education loan for studying abroad, you typically need to provide documents such as proof of admission, academic transcripts, financial statements, identification proof, and collateral documents if required by the bank.
                </div>
              </div>
            </div>

            {/* FAQ 2: Education Loans for Studies Abroad? */}
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
                  Education Loans for Studies Abroad?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Education loans for studies abroad are financial products designed to help students fund their education in foreign countries. These loans typically cover tuition fees, accommodation, travel, and other related expenses. Interest rates and repayment terms may vary by bank and country.
                </div>
              </div>
            </div>

            {/* FAQ 3: Which bank is best for a study abroad loan? */}
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
                  Which bank is best for a study abroad loan?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The best bank for a study abroad loan depends on various factors such as interest rates, repayment options, customer service, and eligibility criteria. It's advisable to compare offers from multiple banks, including nationalized banks, private banks, and financial institutions, to find the most suitable option for your needs.
                </div>
              </div>
            </div>

            {/* FAQ 4: How do I apply for the Educational Loan? */}
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
                  How do I apply for the Educational Loan?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To apply for an educational loan, you need to visit the bank's website or branch, fill out the loan application form, and submit the required documents. Some banks also offer online applications, allowing you to upload your documents digitally. It's important to check the bank's specific application process.
                </div>
              </div>
            </div>

            {/* FAQ 5: How do I contact the experts? */}
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
                  How do I contact the experts?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You can contact experts by visiting financial advisory websites, attending education fairs, or reaching out to financial institutions that specialize in educational loans. Many banks have dedicated customer service teams for loan inquiries, and you can also find contact details on their official websites.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
