import React from 'react';

const ScholarshipTable = () => {
  const scholarships = [
    {
      id: 1,
      name: 'Government of Ireland International Education Scholarship',
      description: 'Offers scholarships to non-EU students to pursue a full-time study program in Irish universities. Covers tuition fees, stipend, and accommodation.',
    },
    {
      id: 2,
      name: 'Irish Research Council Postgraduate Scholarship Programme',
      description: 'Provides funding to both EU and non-EU students pursuing research at postgraduate level in any discipline. Covers tuition fees and living expenses.',
    },
    {
      id: 3,
      name: 'Trinity College Dublin Global Excellence Undergraduate Scholarships',
      description: 'Awards scholarships to high-achieving international students to study an undergraduate program at Trinity College Dublin. Covers partial tuition fees.',
    },
    {
      id: 4,
      name: 'NUI Galway International Student Scholarships',
      description: 'Offers merit-based scholarships to international students pursuing full-time undergraduate and postgraduate programs at NUI Galway.',
    },
    {
      id: 5,
      name: 'UCD Global Graduate Scholarships',
      description: 'Awards partial tuition scholarships to high-achieving international students pursuing postgraduate studies at University College Dublin.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Scholarship Programs in Ireland</h2>
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
