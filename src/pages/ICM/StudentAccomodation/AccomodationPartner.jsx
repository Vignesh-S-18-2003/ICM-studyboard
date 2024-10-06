import { useLocation } from "react-router-dom";

const partners = [
  "/images/EducationalLoan/e10.png",
  "/images/EducationalLoan/e11.png",
  "/images/EducationalLoan/e12.png",
  "/images/EducationalLoan/e13.png",
  "/images/EducationalLoan/e14.png",
  "/images/EducationalLoan/e15.png",
];

export default function AccomodationPartner() {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={`our-partners ${
          pathname === "/" ||
          pathname === "/home-3" ||
          pathname === "/about-2" ||
          pathname === "/home-15" ||
          pathname === "/home-6"
            ? "pt0"
            : ""
        } ${pathname === "/home-8" ? "pt0 pb0" : ""} ${
          pathname === "/home-14" ? "bdrt1 pt55 pb55" : ""
        } 
        ${pathname === "/home-16" ? "pt55 pb55" : ""}
        ${pathname === "/home-13" ? "pt55 pb55" : ""}
        `}
      >
        <div className="container">
          <div className="row">
            {pathname === "/home-14" ? (
              ""
            ) : (
              <div className="col-lg-12 wow fadeInUp">
                <div className="main-title text-center">
                  <h2>Accommodation Partners</h2>
                </div>
              </div>
            )}
          </div>
          <div className="row">
            {partners.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-xl-2">
                <div className="partner_item text-center mb30-lg">
                  <img
                    className="wa m-auto w-100 h-100 object-fit-contain"
                    src={item}
                    alt={`Partner ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
