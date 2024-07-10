import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numberId, setNumberId] = useState('p');
  const [data, setData] = useState({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Simulating fetching data based on numberId
      let fetchedData = {};

      switch (numberId) {
        case 'p':
          fetchedData = {
            windowPrevState: [],
            windowCurrState: [],
            numbers: [2, 3, 5, 7, 11],
            avg: 5.6,
          };
          break;
        case 'f':
          fetchedData = {
            windowPrevState: [],
            windowCurrState: [],
            numbers: [1, 1, 2, 3, 5, 8, 13],
            avg: 4.71,
          };
          break;
        case 'e':
          fetchedData = {
            windowPrevState: [],
            windowCurrState: [],
            numbers: [2, 4, 6, 8, 10],
            avg: 6,
          };
          break;
        case 'r':
          fetchedData = {
            windowPrevState: [],
            windowCurrState: [],
            numbers: [5, 7, 9, 2, 6],
            avg: 5.8,
          };
          break;
        default:
          throw new Error('Invalid number type');
      }

      setData(fetchedData);
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [numberId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <div className="select-button-container">
          <label>Select Number Type: </label>
          <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
            <option value="p">Prime</option>
            <option value="f">Fibonacci</option>
            <option value="e">Even</option>
            <option value="r">Random</option>
          </select>
          <button onClick={fetchData} disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Numbers'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="data-container">
          <h2>Numbers Fetched</h2>
          <p>{data.numbers.join(', ')}</p>
          <h2>Average</h2>
          <p>{data.avg}</p>
        </div>
      </header>
    </div>
  );
}

export default App;