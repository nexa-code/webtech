// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchResultByPrn } from '../services/resultService';
import './Home.css';

const Home = () => {
  const [prn, setPrn] = useState('');
  const [searchedResult, setSearchedResult] = useState(null);

  const handleSearch = async () => {
    try {
      const result = await searchResultByPrn(prn);
      setSearchedResult(result);
    } catch (error) {
      console.error('Error searching result', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to the College Results App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter PRN"
          value={prn}
          onChange={(e) => setPrn(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {searchedResult ? (
        <div className="result-container">
          <h2>Result for PRN: {searchedResult.prn}</h2>
          <p>Student Name: {searchedResult.studentName}</p>
          <p>Subject 1: {searchedResult.subject1}</p>
          <p>Subject 2: {searchedResult.subject2}</p>
          <p>Subject 3: {searchedResult.subject3}</p>
          <p>Subject 4: {searchedResult.subject4}</p>
          <p>Subject 5: {searchedResult.subject5}</p>
          <Link to="/results" className="view-results-link">View All Results</Link>
        </div>
      ) : (
        <div className="home-nav">
          <ul>
            <li><Link to="/results" className="home-link">View All Results</Link></li>
            <li><Link to="/add-result" className="home-link">Add Result</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
