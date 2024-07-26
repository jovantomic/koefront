import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(hero.jpg)" }}>
            <div className="flex items-center justify-center w-full h-full">
                <h1 className="text-white text-2xl md:text-4xl">KODÉ</h1>
            </div>
            <div className="absolute bottom-4 w-full text-center">
                <div className="flex justify-center items-center">
                    <span className="text-white mr-2 text-2xl">Scroll down</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
