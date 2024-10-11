import React from 'react';

const ScholarshipTable = () => {
  const scholarships = [
    {
      id: 1,
      name: 'Vanier Canada Graduate Scholarships',
      description: 'Provides funding for doctoral students, aimed at attracting and retaining world-class doctoral students and supporting the pursuit of advanced studies at Canadian universities. Covers $50,000 per year for three years.',
    },
    {
      id: 2,
      name: 'Canadian Commonwealth Scholarship Program',
      description: 'Provides funding to students from Commonwealth countries to study in Canada. The scholarship covers travel costs, living expenses, and tuition fees.',
    },
    {
      id: 3,
      name: 'Lester B. Pearson International Scholarship',
      description: 'Awarded to international students who demonstrate exceptional academic achievement and creativity, allowing them to pursue undergraduate studies at the University of Toronto.',
    },
    {
      id: 4,
      name: 'Banting Postdoctoral Fellowships',
      description: 'Provides funding to attract and retain top-tier postdoctoral talent, promoting the best research in Canada. The award is worth $70,000 per year for two years.',
    },
    {
      id: 5,
      name: 'Ontario Graduate Scholarship (OGS)',
      description: 'Offers scholarships for graduate students in all disciplines. The award amount is $15,000 for one academic year and is available to students studying at participating Ontario universities.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Scholarship Programs in Canada</h2>
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
