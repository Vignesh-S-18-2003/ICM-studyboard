const aboutImages1 = [
    "/images/landingpage/cir-img1.png",
    "/images/landingpage/cir-img2.png",
    "/images/landingpage/cir-img3.png",
    "/images/landingpage/cir-img4.png",
  ];
  const aboutImages2 = [
    "/images/landingpage/cir-img5.png",
    "/images/landingpage/cir-img6.png",
    "/images/landingpage/cir-img7.png",
    "/images/landingpage/cir-img8.png",
  ];
  
  export default function LandingExam() {
    return (
      <>
        <section className="our-about pb90">
          <div className="container text-center">
            <h2 className="pb90 ">Exams</h2>
            <div className="row align-items-center justify-content-start">
              {aboutImages1.map((item, index) => (
                <div key={index} className="col-8 col-md-2">
                  <div className="position-relative mb30">
                    <img
                      className="w100 w-100 h-100 object-fit-contain rounded"
                      src={item}
                      alt="about img"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="row align-items-center justify-content-end">
              {aboutImages2.map((item, index) => (
                <div key={index} className="col-8 col-md-2">
                  <div className="position-relative mb30">
                    <img
                      className="w100 w-100 h-100 object-fit-contain rounded"
                      src={item}
                      alt="about img"
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
  