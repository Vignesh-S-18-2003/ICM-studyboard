import React from 'react'

function Pattern() {
  return (
    <div className='exam-patern'>
        
      <h1>Pattern</h1>
        <table>
          <tr>
            <th>Section Name</th>
            <th>Total Questions</th>
            <th>Sectional Time</th>
          </tr>
          <tr>
            <td>Listening</td>
            <td>40 Questions</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td>Reading     </td>
            <td>40 Questions</td>
            <td>60 mins</td>
          </tr>
          <tr>
            <td>Writing</td>
            <td>2 Tasks</td>
            <td>60 mins</td>
          </tr>
          <tr>
            <td>Speaking</td>
            <td>2 Tasks</td>
            <td>11-14 mins</td>
          </tr>
        </table>
      </div>
  )
}

export default Pattern

