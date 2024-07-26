import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx'; 
import BlogPage from './pages/BlogPage.jsx'; 

function App() {
  return (
    <Router>
      <div className='flex flex-col items-center'>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<BlogPage />} />
        </Routes>
        <div className='w-[70%]'>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
