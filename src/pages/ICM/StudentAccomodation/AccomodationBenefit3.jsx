import React from 'react';

function AccomodationBenefit3() {
  const benefits = [
    {
      title: "1. It gives you more choices and control over your living space, such as the location, size, facilities, amenities and style of the apartment or house."
    },
    {
      title: "2. It allows you to live with your friends or find new roommates who share your interests and preferences."
    },
    {
      title: "3. It enables you to experience the local culture and lifestyle more authentically."
    },
    {
      title: "4. It allows you to participate in various campus activities, events, clubs, and organizations, which can enrich your student experienceIt may be cheaper than on-campus housing if you share rent and utilities with your roommates."
    }
  ];

  return (
    <div className="container mt-5 ">
      {/* <h2 className="mb-4">Forex Card Benefits</h2> */}
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

export default AccomodationBenefit3;
