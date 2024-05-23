// src/pages/StudentResults.js
import React, { useState, useEffect } from 'react';
import { getResults } from '../services/resultService';
import './StudentResults.css';

const StudentResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getResults();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results', error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="results-container">
      <h2>Student Results</h2>
      {results.length > 0 ? (
        <div>
          {results.map((result, index) => (
            <div className="result-card" key={index}>
              <h3>Student Name: {result.studentName}</h3>
              <p>PRN: {result.prn}</p>
              <p>Subject 1: {result.subject1}</p>
              <p>Subject 2: {result.subject2}</p>
              <p>Subject 3: {result.subject3}</p>
              <p>Subject 4: {result.subject4}</p>
              <p>Subject 5: {result.subject5}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
};

export default StudentResults;
