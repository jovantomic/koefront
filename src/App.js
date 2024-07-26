import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/header.jsx';
import Naslov from './components/naslovk.jsx';
import BlogCard from './components/blogCard.jsx';
import MainPage from './components/MainPage.jsx'; 
import BlogPage from './components/BlogPage.jsx'; 

function App() {
  return (
    <Router>
      <div className='flex flex-col items-center'>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<BlogPage />} />
        </Routes>
        <div className='w-[70%]'>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
