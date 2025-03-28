import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js'
import './App.css';
import Predictor from './components/Predictor.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;