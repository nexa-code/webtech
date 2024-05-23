// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentResults from './pages/StudentResults';
import AddResult from './pages/AddResult';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<StudentResults />} />
        <Route path="/add-result" element={<AddResult />} />
      </Routes>
    </Router>
  );
}

export default App;
