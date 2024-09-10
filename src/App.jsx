import Home from './Layouts/Home';
  
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/keunggulan" element={<Home />} />
        {/* <Route path="/about" element={<Home />} /> */}
        <Route path="/profile-perusahaan" element={<Home />} />
        <Route path="/visi-and-misi" element={<Home />} />
        <Route path="/team" element={<Home />} />
        <Route path="/layanan" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/testimoni" element={<Home />} />
        <Route path="/profile-ceo" element={<Home />} />

      
      </Routes>
    </Router>
  );
}

export default App;