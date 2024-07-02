import React, { useState } from 'react';


//Components:

//CSS
import '../Components_CSS/ProblemTable.css';

//JSON 
import { problem_info } from '../Problems/ProblemInfo';
import { Link } from 'react-router-dom';



function ProblemTable({problems}) {

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') {
      return '#04FF1B';
    } else if (difficulty === 'Medium') {
      return '#FFC500';
    } 
    else if (difficulty === 'Trivial') {
      return '#FC95FF ';
    } 
    else {
      return 'white'; // Default or handle other cases
    }
  };


 

 

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

            {problems.map((problem) => 
                <tr key={problem.problem_name}>

                    
                      <td className='problem-name'> 
                        <Link  to="/solveproblem"  state={{ problemName: problem.problem_name }} className="problem-link"  > 
                            {problem.problem_name} 
                        </Link> 
                    </td>
                    

                    <td> {problem.discipline} </td>
                    <td> {problem.language} </td>
                    <td style={{ color: getDifficultyColor(problem.difficulty) }}>{problem.difficulty}</td>
                    <td> {problem.solved} </td>
                    
                </tr>)}
        </tbody>

      </table>
    </div>
  );
}

export default ProblemTable;