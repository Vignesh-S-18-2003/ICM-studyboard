import React from 'react';

function ForexBenefitsList1() {
  const benefits = [
    {
      title: "Most recommended form of carrying currency abroad, Convenient and widely accepted for international transactions."
    },
    {
      title: "Available at competitive exchange rates, Enjoy better rates compared to traditional currency exchange."
    },
    {
      title: "80% - 90% of your forex in card is more economical, a forex card is cost-effective for most of your expenses abroad."
    },
    {
      title: "Cards are PIN-protected for security. Ensures safe transactions with an additional layer of security."
    },
    {
      title: "Fully replaceable in case of loss or theft. Get a replacement card with minimal hassle in case your card is lost or stolen."
    }
  ];

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4">Forex Card Benefits</h2>
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

export default ForexBenefitsList1;
