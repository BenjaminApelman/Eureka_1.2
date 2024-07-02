import React, { useState, useEffect } from 'react';

//Components
import "../ProblemTable"
import ProblemTable from "../ProblemTable";

//CSS
import './CSS/Search.css';

//JSON
import { problem_info } from '../../Problems/ProblemInfo';

export default function Search() {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [language, setLanguage] = useState('');

    const [searchResults, setSearchResults] = useState([]);



    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
    };

    const handleDisciplineChange = (event) => {
        const newDiscipline = event.target.value;
        setDiscipline(newDiscipline);
    };

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
    };

    const handleDifficultyChange = (event) => {
        const newDifficulty = event.target.value;
        setDifficulty(newDifficulty);
    };

    const handleSearch = () => {
        const search_results = problem_info.filter((problem) => {
            return(
              (name === '' || problem.problem_name.includes(name)) &&
              (discipline === ''  || problem.discipline === discipline) &&
              (language === ''    || problem.language === language) &&
              (difficulty === ''  || problem.difficulty === difficulty)
            );
          });
          setSearchResults(search_results);
    };

    useEffect(() => {
        // Call handleSearch once when the component mounts
        handleSearch();
    }, []); // Empty dependency array means this effect runs only once on mount




    return (
        <div>
            <div className="search-options">
                <div className="search-field">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Problem Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="search-field">
                    <select
                        className="search-select"
                        value={discipline}
                        onChange={handleDisciplineChange}
                    >
                        <option value="">Discipline</option>
                        <option value="Numerical Computation">Numerical Computation</option>
                        <option value="Stats">Stats</option>
                        <option value="Data Structures">Data Structures</option>
                    </select>
                </div>
                <div className="search-field">
                    <select
                        className="search-select"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="">Language</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                    </select>
                </div>
                <div className="search-field">
                    <select
                        className="search-select"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                    >
                        <option value="">Difficulty</option>
                        <option value="Trivial">Trivial</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="search-field">
                    <button className="search-button" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>

            <ProblemTable problems={searchResults}/>
       
        </div>
    );
}