// src/App.js
import React from 'react';
import './App.css'; // Add your custom styles (if needed)
import { Button } from '@mui/material'; // Import Material-UI Button component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Analytics Dashboard</h1>
        <Button variant="contained" color="primary" size="large">
          Create Report
        </Button>
        <p>
          Manage your task reports, view performance, and more!
        </p>
      </header>
    </div>
  );
}

export default App;
