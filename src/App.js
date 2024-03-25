import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage'; // Import the Homepage component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Homepage /> {/* Render the Homepage component */}
      </header>
    </div>
  );
}

export default App;
