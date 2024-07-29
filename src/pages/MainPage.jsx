import React from 'react';
import Header from '../components/HeaderPage.jsx';
import Naslov from '../components/NaslovPage.jsx';
import BlogCard from '../components/blogCard.jsx';
import Footer from '../components/FooterPage.jsx';
import useFetch from '../utils/useFetch.js'; // Putanja do useFetch

const MainPage = () => {
    const url = 'http://localhost:8084/blogs/all'; // Zamenite sa vašim URL-om
    const { data, loading, error } = useFetch(url);

    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
        
    
    return (
        <>
            <Header />
            <div className='pt-12'>
            <Naslov />
            </div>
            <div className="pt-8 w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 mb-3">
            {data.map((item, index) => (
                    <BlogCard key={index} item={item} />
                ))}
                
            </div>
            <div className='w-[70%]'>
                <Footer />
            </div>
        </>
    );
};

export default MainPage;
