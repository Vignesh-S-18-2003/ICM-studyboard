import React from 'react';

function AccomodationBenefit4() {
  const benefits = [
    {
      title: "1. It may be far from your campus or public transportation, which can increase your travel time and costs."
    },
    {
      title: "2. It may require you to do deals with landlords, contracts, bills, maintenance issues and other responsibilities from renting a house or apartment."
    },
    {
      title: "3. It may not provide you with the same level of safety or support as on-campus housing."
    },
  ];

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4">  off-campus housing also has some drawbacks, such as:</h2>
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

export default AccomodationBenefit4;
