// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage'; // Import the LoginPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Use the LoginPage component */}
      </Routes>
    </Router>
  );
}

export default App;
