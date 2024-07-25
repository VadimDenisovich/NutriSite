import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Body from "./components/body/Body";
import BMR from "./components/basal_metabolism_calc/BMR";

function App() {
  return (
    <Router>
      <Body>
        <Routes>
            <Route path="/" element={<Navigate to="/bmr" />} />
            <Route path="/bmr" element={<BMR />} />
            <Route path="/food" element={<div>food calculator</div>} />
            <Route path="/reviews" element={<div>review section</div>} />
            <Route path="/author" element={<div>info about author</div>} />
        </Routes>
      </Body>
    </Router>
  );
}

export default App;
