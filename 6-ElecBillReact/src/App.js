import React, { useState } from 'react';
import { calculateBill } from './utils/calculateBill';
import './App.css';

const App = () => {
  const [units, setUnits] = useState('');
  const [billDetails, setBillDetails] = useState(null);

  const handleCalculate = () => {
    const unitInt = parseInt(units, 10);
    if (!isNaN(unitInt) && unitInt > 0) {
      setBillDetails(calculateBill(unitInt));
    } else {
      setBillDetails(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Electricity Bill Calculator</h1>
        <div className="input-container">
          <label>
            Enter units consumed:
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
          </label>
          <button onClick={handleCalculate}>Calculate</button>
        </div>
        {billDetails && (
          <div className="table-container">
            <h2>Total Bill: ₹{billDetails.total.toFixed(2)}</h2>
            <table>
              <thead>
                <tr>
                  <th>Range</th>
                  <th>Units</th>
                  <th>Rate (₹/unit)</th>
                  <th>Cost (₹)</th>
                </tr>
              </thead>
              <tbody>
                {billDetails.details
                  .filter(detail => detail.units > 0)
                  .map((detail, index) => (
                    <tr key={index}>
                      <td>{detail.range}</td>
                      <td>{detail.units}</td>
                      <td>{detail.rate.toFixed(2)}</td>
                      <td>{detail.cost.toFixed(2)}</td>
                    </tr>
                  ))}
                <tr>
                  <td colSpan="3"><strong>Total</strong></td>
                  <td><strong>₹{billDetails.total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;



