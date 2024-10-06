import React from 'react';

function AccomodationBenefit1() {
  const benefits = [
    {
      title: "1. It is close to your classes, facilities, and services, which saves you time and transportation costs."
    },
    {
      title: "2. It provides a safe and secure environment, on-site staff, and a security system."
    },
    {
      title: "3. It helps you to meet and interact with other students from different backgrounds and cultures, enhancing your social life and academic support."
    },
    {
      title: "4. It allows you to participate in various campus activities, events, clubs, and organizations, which can enrich your student experience."
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

export default AccomodationBenefit1;
