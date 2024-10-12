import React from 'react';

const ScholarshipTable = () => {
  const scholarships = [
    {
      id: 1,
      name: 'Australian Government Research and Training Program',
      description: 'Funded by the Australian Government, it covers a student’s tuition fee and health insurance for up to three years. Supports a student’s (local and international) Research Doctorate and Research master’s degree. Value is $34,000 per annum made fortnightly',
    },
    {
      id: 2,
      name: 'Australian Government Research and Training Program',
      description: 'Funded by the Australian Government, it covers a student’s tuition fee and health insurance for up to three years.Supports a student’s (local and international) Research Doctorate and Research master’s degree. Value is $34,000 per annum made fortnightly.',
    },
    {
      id: 3,
      name: 'Australian Government Research and Training Program',
      description: 'Funded by the Australian Government, it covers a student’s tuition fee and health insurance for up to three years.Supports a student’s (local and international) Research Doctorate and Research master’s degree. Value is $34,000 per annum made fortnightly',
    },
    {
      id: 4,
      name: 'Australian Government Research and Training Program',
      description: 'Funded by the Australian Government, it covers a student’s tuition fee and health insurance for up to three years.Supports a student’s (local and international) Research Doctorate and Research master’s degree. Value is $34,000 per annum made fortnightly.',
    },
    {
      id: 5,
      name: 'International Study Fund',
      description: 'Grant for students studying abroad to gain global exposure.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Scholarship Program </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>S.No</th>
              <th>Scholarship Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr
                key={scholarship.id}
                className={index % 2 === 0 ? 'bg-light' : 'bg-secondary text-white'}
              >
                <td>{scholarship.id}</td>
                <td>{scholarship.name}</td>
                <td>{scholarship.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScholarshipTable;
