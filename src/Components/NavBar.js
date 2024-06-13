import React from 'react';
import '../Components_CSS/NavBar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/problems">Problems</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;