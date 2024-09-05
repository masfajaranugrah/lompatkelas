
import Home from './Layouts/Home'

 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/keunggulan" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/visi-and-misi" element={<Home />} />
        <Route path="/team" element={<Home />} />
        <Route path="/layanan" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        {/* Tambahkan rute lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;
