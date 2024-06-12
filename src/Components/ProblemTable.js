import React from 'react';
import '../Components_CSS/ProblemTable.css';

function ProblemTable() {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Discipline</th>
            <th>Language</th>
            <th>Difficulty</th>
            <th>Solved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Find Mean</td> 
            <td>Stats</td>
            <td>Python</td>
            <td>Easy</td>
            <td>Not Yet!</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
            <td>Row 3, Cell 4</td>
            <td>Row 3, Cell 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProblemTable;