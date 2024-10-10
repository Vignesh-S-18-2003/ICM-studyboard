import React from 'react';// Optional: For additional custom styles

export default function IeltsWays() {
  const images = [
    { src: '/images/IeltsExam/way1.png', name: 'Listening' },
    { src: '/images/IeltsExam/way2.png', name: 'Writing' },
    { src: '/images/IeltsExam/way3.png', name: 'Reading' },
    { src: '/images/IeltsExam/way4.png', name: 'Speaking' },
    
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10" style={{ width: '60vw' }}>
          <div className="row wow fadeInUp">
            {images.map((image, index) => (
              <div className="col-md-6 mb-4 d-flex align-items-center" key={index}>
                <div className="img-container">
                  <img src={image.src} alt={image.name} className="img-fluid" />
                </div>
                <div className="ml-3 pl90">
                  <h5 className="image-name">{image.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
