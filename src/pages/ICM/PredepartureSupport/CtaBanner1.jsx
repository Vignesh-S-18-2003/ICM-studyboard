import { useLocation } from "react-router-dom";

export default function PreDepartureChecklist() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden ${
            pathname === "/" || pathname === "/about-1"
              ? "bgc-light-yellow"
              : pathname === "/pre-departure"
              ? "bgc-thm4"
              : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">Pre-Departure Support Checklist</h2>
                    <p className="text mb-0 fz15">
                      Prepare for your journey with essential steps to ensure
                      everything is ready for your move abroad.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span
                      className="list-icon flex-shrink-0"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "15px",
                      }}
                    >
                      ✔
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Visa and Documentation</h4>
                      <p className="text mb-0 fz15">
                        Ensure your visa is approved, and you have all the
                        necessary documents such as admission letters, passport,
                        and financial proof ready.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span
                      className="list-icon flex-shrink-0"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "15px",
                      }}
                    >
                      ✔
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Accommodation Arrangements</h4>
                      <p className="text mb-0 fz15">
                        Finalize your accommodation arrangements, whether
                        on-campus housing or private rentals.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span
                      className="list-icon flex-shrink-0"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "15px",
                      }}
                    >
                      ✔
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Health and Travel Insurance</h4>
                      <p className="text mb-0 fz15">
                        Purchase comprehensive health and travel insurance for
                        coverage during your time abroad.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span
                      className="list-icon flex-shrink-0"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "15px",
                      }}
                    >
                      ✔
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Packing Essentials</h4>
                      <p className="text mb-0 fz15">
                        Prepare a packing checklist to ensure you have
                        everything from clothing to important documents.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span
                      className="list-icon flex-shrink-0"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "15px",
                      }}
                    >
                      ✔
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Flight and Travel Arrangements</h4>
                      <p className="text mb-0 fz15">
                        Book your flights and ensure all travel arrangements,
                        such as airport transfers, are in place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="cta-banner3-img wow fadeInLeft h-100 object-fit-cover"
            src="/images/PredepartureSupport/p2.png"
            alt="Pre-Departure Checklist"
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
