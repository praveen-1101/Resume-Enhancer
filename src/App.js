import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PreviewPage from './components/PreviewPage';
import Download from './components/Download';
import UploadPage from './components/UploadPage';

const App = () => {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <nav className='bg-blue-500 text-white p-4'>
          <ul className='flex flex-wrap justify-around'>
            <li><Link to="/upload" className='hover:underline'> Upload </Link></li>
            <li><Link to="/preview" className='hover:underline'> Preview </Link></li>
            <li><Link to="/Download" className='hover:underline'> Download </Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/preview" element={< PreviewPage />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => 
(
  <div className='p-8 text-center'>
    <h1 className='text-4xl font-bold'>Welcome to Dynamic Resume Enhancer</h1>
    <p className='text-lg mt-4'>Enhance your resume to match job descriptions effortlessly.</p>
    <p className='text-lg mt-2'>Use the navigation bar to upload your resume, preview the updates, and download the final version.</p>
  </div>
)

export default App;
