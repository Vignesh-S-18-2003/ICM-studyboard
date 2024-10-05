import { useLocation } from "react-router-dom";

export default function Section1() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden ${
            pathname === "/" || pathname === "/about-1"
              ? "bgc-light-yellow"
              : pathname === "/become-seller"
              ? "bgc-thm4"
              : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title" style={{ color: 'orange' }}>
                      Steps After Receiving an Offer
                      <br className="d-none d-xl-block" /> Prepare for Your Journey
                    </h2>
                    <p className="mt-3">
                      Congratulations on receiving your offer! Now that you've secured your place, follow these key steps to make sure you're ready for the next stage of your study abroad adventure.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 1 with Adjusted Styling */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '50px',  // Increased width
                        height: '50px', // Increased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px', // Adjusted font size
                        fontWeight: 'bold', // Bold font for better visibility
                        marginRight: '15px' // Increased margin for balance
                      }}
                    >
                      1
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Accept the Offer</h4>
                      <p className="text mb-0 fz15">
                        Confirm your acceptance of the offer by the deadline. Make sure to understand any conditions attached to your offer, such as submission of final transcripts or other documents.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 2 with Adjusted Styling */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '50px',  // Increased width
                        height: '50px', // Increased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px', // Adjusted font size
                        fontWeight: 'bold', // Bold font for better visibility
                        marginRight: '15px' // Increased margin for balance
                      }}
                    >
                      2
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Arrange Finances and Scholarships</h4>
                      <p className="text mb-0 fz15">
                        Make sure you have enough funds to cover your tuition fees, living expenses, and other costs. Explore scholarship opportunities and finalize any financial aid.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 3 with Adjusted Styling */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '50px',  // Increased width
                        height: '50px', // Increased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px', // Adjusted font size
                        fontWeight: 'bold', // Bold font for better visibility
                        marginRight: '15px' // Increased margin for balance
                      }}
                    >
                      3
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Apply for Your Student Visa</h4>
                      <p className="text mb-0 fz15">
                        Start the visa application process as soon as you have accepted your offer. Ensure that all required documents, such as your acceptance letter and financial proof, are in order.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 4 with Adjusted Styling */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '50px',  // Increased width
                        height: '50px', // Increased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px', // Adjusted font size
                        fontWeight: 'bold', // Bold font for better visibility
                        marginRight: '15px' // Increased margin for balance
                      }}
                    >
                      4
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Book Accommodation</h4>
                      <p className="text mb-0 fz15">
                        Look into housing options, whether it's university dorms or off-campus living. Secure your accommodation before your arrival to ensure a smooth transition.
                      </p>
                    </div>
                  </div>

                  <div className="list-one d-flex align-items-start mb30">
                    {/* Step Number 5 with Adjusted Styling */}
                    <div
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        borderRadius: '50%',
                        width: '50px',  // Increased width
                        height: '50px', // Increased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px', // Adjusted font size
                        fontWeight: 'bold', // Bold font for better visibility
                        marginRight: '15px' // Increased margin for balance
                      }}
                    >
                      5
                    </div>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Prepare for Departure</h4>
                      <p className="text mb-0 fz15">
                        Make a checklist of things to do before departure, including booking flights, attending pre-departure orientations, and packing your essentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft object-fit-cover"
            src="/images/StudyAbroadStep3/s2.png"
            alt="cta banner 3"
            style={{ height: '1200px' }} // Adjust the height here
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
