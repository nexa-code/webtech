// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/results">View Results</Link></li>
          <li><Link to="/add-result">Add Result</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
