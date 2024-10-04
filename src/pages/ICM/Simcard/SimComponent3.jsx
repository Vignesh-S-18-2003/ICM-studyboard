import React from 'react';

const SimComponent3 = () => {
  return (
    <div className="container mt-5 mb-5">
        <h1>UK</h1>
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/simcard-image.jpg" // Replace with your image path
            alt="SIM Card"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side - Content List */}
        <div className="col-md-6">
          <h3 className="mb-4">SIM Card Features</h3>
          <ul className="list-unstyled">
            <li className="mb-2">✓ UNLIMITED UK-wide Calling</li>
            <li className="mb-2">✓ UNLIMITED worldwide text messaging from UK</li>
            <li className="mb-2">✓ 1000 long-distance calling minutes from UK per month</li>
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

export default SimComponent3;
