import { Link } from "react-router-dom";

export default function ScholarshipSection() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <img
                className="h-100 w-100 mb30-md object-fit-contain"
                src="/images/Scholarship/sec-image.png"
                alt="about"
              />
            </div>
            <div className="col-lg-5">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title" style={{ color: 'orange' }}>
                  A Single Account for All Your 
                    <br className="d-none d-xl-block" />
                    Study Abroad Essentials
                  </h2>
                </div>
              </div>
              <div className="why-chose-list at-home5">
                <div className="list-one d-flex align-items-start mb30">
                  <div className="list-content flex-grow-1 ml30">
                    <h4 className="mb-1">We help you find and select colleges and scholarships for your studying and get free scholarship for every level of educations. Get free scholarships for every level of education.</h4>
                        <br /><br /> <br />
                        <Link to="/contact" className="ud-btn btn-thm2">
                        Learn More <i className="fal fa-arrow-right-long" />
                </Link>
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
