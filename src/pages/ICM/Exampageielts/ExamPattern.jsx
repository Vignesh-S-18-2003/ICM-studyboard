import React from 'react';

function ExamPattern() {
  const sections = [
    { name: 'Listening', questions: 40, time: '30 minutes' },
    { name: 'Reading', questions: 40, time: '60 minutes' },
    { name: 'Writing', questions: 2, time: '60 minutes' },
    { name: 'Speaking', questions: 2, time: '11-14 minutes' }
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center">Test Sections Overview</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Section Name</th>
            <th>Total Questions</th>
            <th>Sectional Time</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index}>
              <td>{section.name}</td>
              <td>{section.questions}</td>
              <td>{section.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamPattern;
