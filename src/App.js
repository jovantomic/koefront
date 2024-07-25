import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/header.jsx';
import Naslov from './components/naslovk.jsx';
import BlogCard from './components/blogCard.jsx';
import Footer from './components/footer.jsx';
import Post from './components/post.jsx'; // Nova komponenta za prikaz posta

function App() {
  return (
    <Router>
      <div className='flex flex-col items-center'>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Naslov />
              
              <div className=" pt-8 w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 mb-3">
                <BlogCard /> 
                <BlogCard /> 
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
               
              </div>
              <div className='w-[70%]'>
              <Footer />

                </div>
            </>
          } />
          <Route path="/post" element={<Post />} />
        </Routes>
        <div className='w-[70%]'>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
