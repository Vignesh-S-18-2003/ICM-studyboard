const partners = [
    "/images/destinationimage/d-spon1.png",
    "/images/destinationimage/d-spon2.png",
    "/images/destinationimage/d-spon3.png",
    "/images/destinationimage/d-spon4.png",
    "/images/destinationimage/d-spon5.png",
    "/images/destinationimage/d-spon6.png",
    "/images/destinationimage/d-spon7.png",
    "/images/destinationimage/d-spon8.png",
  ];
  
  export default function ScholarshipSponsors() {
    return (
      <>
        <section className="our-partners bgc-thm4 pt70 pb40 cta-home5-style ml30 ml0-lg">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-12">
                <div className="main-title text-center">
                  <h2 className="text-dark">Partnered Universites</h2>
                </div>
              </div>
            </div>
            <div className="row text-center justify-content-center">
  {partners.map((item, index) => (
    <div key={index} className="col-12 col-md-1">
      <div className="partner_item text-center mb30">
        <img
          className="w-100 h-auto"
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
  