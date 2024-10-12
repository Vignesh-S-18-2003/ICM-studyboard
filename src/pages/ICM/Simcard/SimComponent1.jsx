import React from 'react';

const SimComponent1 = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1>Australia</h1>
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/simCard/image1.png" // Replace with your image path
            alt="SIM Card"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side - Content List */}
        <div className="col-md-6">
          <h3 className="mb-4 wow fadeInUp">SIM Card Features</h3>
          <ul className="list-unstyled wow fadeInUp">
            <li className="mb-2">✓ UNLIMITED Australia-wide Calling</li>
            <li className="mb-2">✓ UNLIMITED worldwide text messaging from Australia</li>
            <li className="mb-2">✓ 1000 long-distance calling minutes from Australia per month</li>
            <li className="mb-2">✓ 4G LTE Data speeds</li>
            <li className="mb-2">✓ Call display & voicemail</li>
            <li className="mb-2">✓ Member Benefits</li>
            <li className="mb-2">✓ No long-term contracts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimComponent1;
