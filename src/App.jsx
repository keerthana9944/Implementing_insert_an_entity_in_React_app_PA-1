// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import AddBook from './pages/AddBooks';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addBook" element={<AddBook/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
