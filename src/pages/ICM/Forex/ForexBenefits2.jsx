import React from 'react';

function ForexBenefitsList2() {
  const benefits = [
    {
      title: "1. Valid for 5 years"
    },
    {
      title: "2. Multicurrency prepaid Visa Forex Card with 16 different currency wallets"
    },
    {
      title: "3. Login ID to track the statements"
    },
    {
      title: "4. Transaction notifications"
    },
    {
      title: "5. 24-hour access to your money"
    },
    {
      title:"6. 24×7 Customer Care Service"
    }
  ];

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4 pt100">Features!</h2>
      <ul className="mt-5 styled bgc-thm5 pt50 pb50">
        {benefits.map((benefit, index) => (
          <li key={index} className="list-group-item">
            <p className="mb-2">{benefit.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForexBenefitsList2;
