import React from 'react';
import HeroSection from './header.jsx';
import Naslov from './naslovk.jsx';
import BlogCard from './blogCard.jsx';
import Footer from './footer.jsx';
import useFetch from '../utils/useFetch'; // Putanja do useFetch

const MainPage = () => {
    /*const url = 'http://192.168.2.105:8084/blogs/all'; // Zamenite sa vašim URL-om
    const { data, loading, error } = useFetch(url);

    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
        */
    
    return (
        <>
            <HeroSection />
            <div className='pt-12'>
            <Naslov />
            </div>
            <div className="pt-8 w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 mb-3">
                {/* Renderujte BlogCard komponente sa podacima */}
                
            </div>
            <div className='w-[70%]'>
                <Footer />
            </div>
        </>
    );
};

export default MainPage;
