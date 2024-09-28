const aboutImages = [
    "/images/landingpage/image1.png",
    "/images/landingpage/image5.png",
    "/images/landingpage/image2.png",
    "/images/landingpage/image3.png",
  ];
  
  export default function Dreamdestination() {
    return (
      <>
        <section className="our-about pb90">
          <div className="container text-center">
            <h2 className="pb90">Dream Destinations</h2>
            <div className="row align-items-center ">
              {aboutImages.map((item, index) => (
                <div key={index} className="col-6 col-md-3">
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
  