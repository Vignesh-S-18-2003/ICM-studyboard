import React from 'react';

function ForexBenefitsList2() {
  const benefits = [
    {
      title: "Valid for 5 years"
    },
    {
      title: "Multicurrency prepaid Visa Forex Card with 16 different currency wallets"
    },
    {
      title: "Login ID to track the statements"
    },
    {
      title: "Transaction notifications"
    },
    {
      title: "24-hour access to your money"
    },
    {
      title:"24×7 Customer Care Service"
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
