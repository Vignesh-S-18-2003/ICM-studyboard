import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <img
                className="h-100 w-100 mb30-md object-fit-contain"
                src="public\images\StudyAbroadstep\sa3.jpg"
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
                    <h4 className="mb-1">Set up your profile to discover tailored recommendations,
                        expedited application processes, and a wealth of resources for your
                        overseas education journey</h4>
                        <br /><br /> <br />
                        <Link to="/contact" className="ud-btn btn-thm2">
                  Get Started <i className="fal fa-arrow-right-long" />
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
