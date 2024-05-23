// src/pages/AddResult.js
import React, { useState } from 'react';
import { addResult } from '../services/resultService';
import { useNavigate } from 'react-router-dom';

const AddResult = () => {
  const [prn, setPrn] = useState('');
  const [studentName, setStudentName] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [subject4, setSubject4] = useState('');
  const [subject5, setSubject5] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      prn,
      studentName,
      subject1: parseInt(subject1),
      subject2: parseInt(subject2),
      subject3: parseInt(subject3),
      subject4: parseInt(subject4),
      subject5: parseInt(subject5)
    };
    try {
      await addResult(result);
      navigate('/results');
    } catch (error) {
      console.error('Error adding result', error);
    }
  };

  return (
    <div>
      <h1>Add New Result</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>PRN:</label>
          <input
            type="text"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject 1:</label>
          <input
            type="number"
            value={subject1}
            onChange={(e) => setSubject1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject 2:</label>
          <input
            type="number"
            value={subject2}
            onChange={(e) => setSubject2(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject 3:</label>
          <input
            type="number"
            value={subject3}
            onChange={(e) => setSubject3(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject 4:</label>
          <input
            type="number"
            value={subject4}
            onChange={(e) => setSubject4(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject 5:</label>
          <input
            type="number"
            value={subject5}
            onChange={(e) => setSubject5(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddResult;
