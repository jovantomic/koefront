
import React, { useState, useEffect } from 'react';
import ProductIcon from './ProductIcon'; // Importovanje ProductIcon komponente
import './styles.css';

const ShowProduct = ({ products }) => {

    const [scrolled, setScrolled] = useState(false);
    const [showIndicator, setShowIndicator] = useState(false);

    console.log(products);
    
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
                

                   setShowIndicator(productCount > 3  );
                
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
        container.scrollBy({ left: 400, behavior: 'smooth' });
    };

    const scrollLeft = () => {
        const container = document.querySelector('.scroll-container');
        container.scrollBy({ left: -200, behavior: 'smooth' });
    };
    return (
        <div>
                 {/* Scroll container za veće ekrane */}
                 <div className={`scroll-container m-4 ${scrolled ? 'scrolled' : ''} ${showIndicator ? 'show-indicator' : ''} hidden md:flex`}>
                    <div className="scroll-indicator left cursor-pointer" onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>

                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 1" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 2" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 3" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 4" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 5" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 5" />
                    </div>
                    <div className="product-icon w-full mb-4 md:mb-0 md:mr-2.5">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 5" />
                    </div>
                    {/* Dodaj još proizvoda po potrebi */}

                    <div className="scroll-indicator right cursor-pointer" onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Blok elemenata za manje ekrane */}
                <div className="block md:hidden">
                    <div className="product-icon w-full mb-4">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 1" />
                    </div>
                    <div className="product-icon w-full mb-4">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 2" />
                    </div>
                    <div className="product-icon w-full mb-4">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 3" />
                    </div>
                    <div className="product-icon w-full mb-4">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 4" />
                    </div>
                    <div className="product-icon w-full mb-4">
                        <ProductIcon imageSrc="zena2.jpg" text="Product 5" />
                    </div>
                    {/* Dodaj još proizvoda po potrebi */}
                </div>
        </div>
    );
};

export default ShowProduct;
