import React from 'react'
import './App.css';
import LineChart from './LineChart'
import EEG_Data from './EEG_Data'
import table1 from './Table';

const App = () => {
  return <div className='rowA'>
    <h1>Smart Bed System</h1>
    <LineChart />
    <EEG_Data />
    <table1 />
  </div>
}

export default App;
