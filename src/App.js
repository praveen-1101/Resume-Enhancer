import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PreviewPage from './pages/PreviewPage';
import DownloadPage from './pages/DownloadPage';
import UploadPage from './pages/UploadPage';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/preview" element={< PreviewPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
