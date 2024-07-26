import React, { useState, useEffect } from 'react';
import './styles.css'; // Importovanje CSS fajla
import ProductIcon from './ProductIcon'; // Importovanje ProductIcon komponente


const PostContent = ({data}) => {

    const sortedImages = data.images.sort((a, b) => a.priority - b.priority);

    const [scrolled, setScrolled] = useState(false);
    const [showIndicator, setShowIndicator] = useState(false);

    const handleScroll = (e) => {
        if (e.target.scrollLeft > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateShowIndicator = () => {
            const container = document.querySelector('.scroll-container');
            if (container) {
                const productCount = container.querySelectorAll('.product-icon').length;
                const isMobile = window.innerWidth < 768;

                if (isMobile) {
                    setShowIndicator(productCount > 2);
                } else {
                    setShowIndicator(productCount > 4);
                }
            }
        };

        updateShowIndicator(); // Initial check

        window.addEventListener('resize', updateShowIndicator);
        return () => {
            window.removeEventListener('resize', updateShowIndicator);
        };
    }, []);

    const scrollRight = () => {
        const container = document.querySelector('.scroll-container');
        container.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-auto p-8 bg-white shadow-lg">
            <div className="w-full md:w-1/3 h-auto">
            {sortedImages.map((image, index) => (
                        <img
                            key={image.id}
                            className={`w-full h-full object-cover ${index > 0 ? 'hidden' : ''}`}
                            src={image.url}
                            alt={data.title}
                        />
                    ))}
            </div>
            <div className="w-full md:w-2/3 flex flex-col p-4 md:p-8">

            <h4 className="font-lora font-extralight text-black text-3xl md:text-5xl mb-4">
                 {data.title}
            </h4>
                <p className="text-base md:text-lg text-neutral-600 mb-6">
                {data.long_content}
                </p>
                <div className={`scroll-container m-4 ${scrolled ? 'scrolled' : ''} ${showIndicator ? 'show-indicator' : ''}`}>
                    <div className="product-icon">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 1" />
                    </div>
                    <div className="product-icon">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 2" />
                    </div>
                    <div className="product-icon">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 3" />
                    </div>
                    <div className="product-icon">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 4" />
                    </div>
                    <div className="product-icon">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 5" />
                    </div>
                    {/* Dodaj još proizvoda po potrebi */}
                    <div className="scroll-indicator" onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default PostContent;
