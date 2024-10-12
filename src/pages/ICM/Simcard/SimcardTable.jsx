import React from 'react';

const SimCardTable = () => {
  const simCards = [
    { id: 1, productName: 'Price', plan1: 'Rs 1499', plan2: 'Rs 1999', plan3: 'Rs 2999' },
    { id: 2, productName: 'Incoming Calls', plan1: 'Free', plan2: 'Free', plan3: 'Free' },
    { id: 7, productName: 'Free Local Calls', plan1: 'Unlimited', plan2: 'Unlimited', plan3: 'Unlimited' },
    { id: 3, productName: 'Free Calls to India', plan1: '500 mins', plan2: 'Unlimited', plan3: 'Unlimited' },
    { id: 4, productName: 'Free Data Usage',plan1: '5 GB', plan2: '10GB Data', plan3: '20GB Data'  },
    { id: 5, productName: 'Free Text - Local', plan1: 'Unlimited', plan2: 'Unlimited', plan3: 'Unlimited' },
    { id: 6, productName: 'Validity', plan1: '28 days', plan2: '28 days', plan3: '28 days' },
    // { id: 8, productName: 'Provider H', plan1: '25GB Data', plan2: '50GB Data', plan3: '75GB Data' },
  ];

  return (
    <div className="container mt-5 mb-5">
      {/* <h2 className="text-center mb-4">SIM Card Product Plans</h2> */}
      <div className="table-responsive ">
        <table className="table table-bordered table-striped wow fadeInUp">
          <thead className="bg-primary text-white wow fadeInUp ">
            <tr>
              <th>Product Name</th>
              <th>Plan 1</th>
              <th>Plan 2</th>
              <th>Plan 3</th>
            </tr>
          </thead>
          <tbody>
            {simCards.map((sim, index) => (
              <tr
                key={sim.id}
                className={index % 2 === 0 ? 'bg-light' : 'bg-secondary text-white'}
              >
                <td>{sim.productName}</td>
                <td>{sim.plan1}</td>
                <td>{sim.plan2}</td>
                <td>{sim.plan3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimCardTable;
