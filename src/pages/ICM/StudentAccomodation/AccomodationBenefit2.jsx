import React from 'react';

function AccomodationBenefit2() {
  const benefits = [
    {
      title: "1. It may be more expensive than other types of accommodation, depending on the room’s location, size, and quality."
    },
    {
      title: "2. It may have limited availability or high demand, especially in popular destinations."
    },
    {
      title: "3. It may have strict rules or contracts, such as curfews, meal plans or roommates."
    },
    {
      title: "4. It may offer less privacy or independence than other types of accommodation."
    }
  ];

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4"> on-campus housing also has some drawbacks, such as:</h2>
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

export default AccomodationBenefit2;
