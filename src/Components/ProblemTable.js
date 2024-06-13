import React from 'react';


//Components:

//CSS
import '../Components_CSS/ProblemTable.css';

//JSON 
import { problem_info } from '../Problems/ProblemInfo';
import { Link } from 'react-router-dom';



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
            {problem_info.map((problem) => 
                <tr key={problem.problem_name}>

                    <td className='problem-name'> 
                        <Link  to="/solveproblem"  state={{ problemName: problem.problem_name }} className="problem-link"  > 
                            {problem.problem_name} 
                        </Link> 
                    </td>
                    <td> {problem.discipline} </td>
                    <td> {problem.language} </td>
                    <td> {problem.difficulty} </td>
                    <td> {problem.solved} </td>
                    
                </tr>)}
        </tbody>

      </table>
    </div>
  );
}

export default ProblemTable;