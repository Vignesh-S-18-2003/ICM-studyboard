import React from 'react';

const ScholarshipTable = () => {
  const scholarships = [
    {
      id: 1,
      name: 'Fulbright U.S. Student Program',
      description: 'Provides funding for individually designed study/research projects or for English Teaching Assistant Programs. Covers living costs, tuition, and travel.',
    },
    {
      id: 2,
      name: 'Gates Millennium Scholars Program',
      description: 'Provides outstanding minority students with an opportunity to complete an undergraduate degree in any discipline area of interest. Covers tuition, fees, and living expenses.',
    },
    {
      id: 3,
      name: 'National Merit Scholarship Program',
      description: 'Awards merit-based scholarships to high school students based on PSAT scores and academic achievements. The award varies from $2,500 to full scholarships depending on the college.',
    },
    {
      id: 4,
      name: 'Rhodes Scholarship',
      description: 'One of the oldest and most prestigious international scholarships, providing funding to pursue a degree at the University of Oxford in the UK for students from the U.S.',
    },
    {
      id: 5,
      name: 'The Pell Grant',
      description: 'Federal grant awarded to undergraduate students based on financial need. The maximum amount for the 2024–2025 award year is $7,395.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Scholarship Programs in the USA</h2>
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
