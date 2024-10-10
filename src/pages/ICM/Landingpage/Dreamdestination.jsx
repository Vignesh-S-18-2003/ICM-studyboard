const aboutImages = [
  { src: "/images/landingpage/image1.png", country: "Dubai" },
  { src: "/images/landingpage/image5.png", country: "Canada" },
  { src: "/images/landingpage/image2.png", country: "New Zealand" },
  { src: "/images/landingpage/image3.png", country: "United States" },
  
 // Added a new image and country
];




export default function Dreamdestination() {
  return (
    <>
      <section className="our-about pb90 wow fadeInUp">
        <div className="container text-center">
          <h1 className="pb90">Dream Destinations</h1>
          <div className="row align-items-center">
            {aboutImages.map((item, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="position-relative mb30">
                  <img
                    className="w-100 h-100 object-fit-cover rounded"
                    src={item.src}
                    alt={`About ${item.country}`}
                  />
                  <div className="country-name position-absolute bottom-0 start-0 p-2 text-white">
                    {item.country} 
                    <i className="fas fa-plane ms-1"></i> {/* Airplane icon */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .country-name {
          font-size: 1.2rem; /* Adjust the font size as needed */
        }
      `}</style>
    </>
  );
}
