import React from 'react';

const ScholarshipTable = () => {
  const scholarships = [
    {
      id: 1,
      name: 'DAAD Scholarship for International Students',
      description: 'Offers scholarships to international students for postgraduate studies at German universities. Covers tuition fees and living expenses.',
    },
    {
      id: 2,
      name: 'Heinrich Böll Foundation Scholarships',
      description: 'Provides funding for international students pursuing a degree in Germany. Covers tuition fees and provides a monthly stipend.',
    },
    {
      id: 3,
      name: 'Konrad-Adenauer-Stiftung Scholarships',
      description: 'Awards scholarships to international students for master’s and doctoral programs in Germany. Provides financial support for living costs and tuition fees.',
    },
    {
      id: 4,
      name: 'Friedrich Ebert Foundation Scholarships',
      description: 'Offers scholarships for international students to study in Germany. Provides a monthly stipend and coverage of health insurance.',
    },
    {
      id: 5,
      name: 'German Academic Exchange Service (DAAD) Research Grants',
      description: 'Awards research grants to international students and scientists for research projects in Germany. Covers living expenses and travel costs.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Scholarship Programs in Germany</h2>
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
