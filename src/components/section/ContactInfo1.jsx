export default function ContactInfo1() {
  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-6">
              <div className="position-relative mt40">
                <div className="main-title">
                  <h4 className="form-title mb25">Keep In Touch With Us.</h4>
                  
                </div>
                {/* <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-tracking" />
                  </div>
                  <div className="details">
                    <h5 className="title">Address</h5>
                    <p className="mb-0 text">
                      328 Queensberry Street, North <br /> Melbourne VIC 3051,
                      Australia.
                    </p>
                  </div>
                </div> */}
                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-call" />
                  </div>
                  <div className="details">
                    <h5 className="title">Phone</h5>
                    <p className="mb-0 text">+91 - 9894420308</p>
                    
                    <p className="mb-0 text">+91 - 9894470308 </p>
                  </div>
                </div>
                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-mail" />
                  </div>
                  <div className="details">
                    <h5 className="title">Email</h5>
                    <p className="mb-0 text">info@icmstudyabroad.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
                {/* <h4 className="form-title mb25">Tell us about yourself</h4>
                <p className="text mb30">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </p> */}
                <form className="form-style1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                         First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Mobile No
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Email ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Id"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                        Preferred Study Destination*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Destination"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                        When do you plan to study*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Timing"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Messages
                        </label>
                        <textarea
                          cols={30}
                          rows={6}
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <button type="button" className="ud-btn btn-thm">
                          Send Messages
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
