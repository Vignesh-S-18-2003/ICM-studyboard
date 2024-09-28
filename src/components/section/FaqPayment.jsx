export default function FaqPayment() {
  return (
    <>
      <div className="ui-content">
        <h2 className="title">Frequently asked Questions ?</h2>
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
                  How can I open a local bank account after arriving?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                You can open a local bank account by visiting a nearby bank branch with your passport, visa, proof of address, and enrollment confirmation (if you're a student). Many banks also offer student-friendly accounts with minimal fees, so be sure to inquire about available options. Some banks may allow online applications, but a branch visit is often required to finalize the process.
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
                  What should I do if I need medical assistance?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                If you require medical assistance, first check your health insurance coverage and locate nearby hospitals or clinics. Many universities and institutions provide student health services, and you can access these for minor medical needs. In case of an emergency, dial the local emergency number or visit the nearest hospital. It's essential to keep a list of emergency contacts and healthcare providers handy.
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
                  What should I do if I face issues with my accommodation?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                If you encounter problems with your accommodation, such as maintenance issues, noise disturbances, or safety concerns, first contact your landlord or property manager to report the problem. Keep a record of all communications and any issues you’ve faced. If the problem isn’t resolved, check if your contract outlines a formal complaint process. For students, many universities offer housing support services that can provide advice or mediate with landlords. In severe cases, local housing authorities or legal aid may assist.
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
                  Where can I get student discounts for transportation?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                You can often get student discounts for transportation by applying for a student travel card or pass. Many public transportation systems, such as buses, trains, and metros, offer discounted fares for students with valid student IDs. You can inquire at local transit offices, visit their websites, or check with your school’s student services for partnerships with transport providers. Some cities also offer regional travel cards that bundle multiple transportation modes at a reduced price for students.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
