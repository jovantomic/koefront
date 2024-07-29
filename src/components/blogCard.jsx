import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'; // Uvezi CSS datoteku

export default function BlogCard({ item }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const sortedImages = item.images.sort((a, b) => a.priority - b.priority);

    const handleMouseEnter = () => {
        if (sortedImages.length > 1) {
            setCurrentImageIndex(1);
        }
    };

    const handleMouseLeave = () => {
        setCurrentImageIndex(0);
    };

    return (
        <Link to={`/post/${item.id}`}>
            <div 
                className="flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[70vh] w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="h-[70%] relative">
                    {sortedImages.map((image, index) => (
                        <img
                            key={image.id}
                            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            src={image.url}
                            alt={item.title}
                        />
                    ))}
                </div>
                <div className="h-[30%] p-4 text-center flex flex-col justify-center">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {item.title}
                    </h5>
                    <p className="text-base text-neutral-600">
                        {item.short_content}
                    </p>
                </div>
            </div>
        </Link>
    );
}
