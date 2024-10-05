import React from 'react';

function ForexBenefitsList3() {
  const benefits = [
    {
      title: "1. First and last page of the passport (Self-attested)"
    },
    {
      title: "2. University Offer Letter"
    },
    {
      title: "3. Student Visa"
    },
    {
      title: "4. Airline Ticket"
    },
    {
      title: "5. PAN card"
    },
    {
      title:"6. Aadhar Card"
    }
  ];

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4">Documents Required!</h2>
      <h4>You must submit some essential documents to apply forex card from a bank or travel agency, <br /> here is a list of documents you must carry.</h4>
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

export default ForexBenefitsList3;
