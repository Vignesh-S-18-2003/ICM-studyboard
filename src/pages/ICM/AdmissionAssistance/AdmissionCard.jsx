export default function AdmissionCard() {
    return (
      <>
        <div className="testimonial-style1 default-box-shadow1 position-relative mb60 bdrs8">
          <div className="testimonial-content">
            {/* <h4 className="title text-thm">Great Work</h4> */}
            <span className="icon fas fa-quote-left" />
            <h4 className="t_content">
              “Placerat vestibulum adipiscing urna nec ultrices id mattis orci est. Dolor venenatis varius pellentesque tristique pulvinar quisque risus id”
            </h4>
          </div>
          <div className="thumb d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="wa object-fit-contain rounded "
                src="/images/AdmissionAssistance/image.png"
                alt="testimonial"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-0">John Doe</h6>
              <p className="fz14 mb-0">University Of Dubblin,Ireland</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  