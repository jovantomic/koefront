import React from 'react';

const ProductIcon = ({ imageSrc, text }) => {
    return (
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="relative" style={{ width: '10rem', height: '12rem' }}>
                <img
                    className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-70"
                    src='zena2.jpg'
                    alt={text}
                />
            </div>
            <p className="text-xs md:text-sm text-neutral-600 mt-2">{text}</p>
        </div>
    );
};

export default ProductIcon;
