import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddBook from './pages/AddBooks';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddBook />} />
    </Routes>
  </BrowserRouter>
);