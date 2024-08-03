import React, { useRef, useEffect, useState } from 'react';
import './ProductGallery.css';
import ProductCard from './ProductCard'; // Pretpostavljam da je ProductCard.js u istom folderu


const ProductGallery = ({data}) => {

    console.log(data);
    const containerRef = useRef(null);
    const [showButtons, setShowButtons] = useState(false);

    const updateButtonVisibility = () => {
        if (containerRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
            const canScrollLeft = scrollLeft > 0;
            const canScrollRight = scrollWidth > clientWidth && scrollLeft < (scrollWidth - clientWidth);

            setShowButtons(canScrollLeft || canScrollRight);
        }
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        updateButtonVisibility();
        window.addEventListener('resize', updateButtonVisibility);
        return () => window.removeEventListener('resize', updateButtonVisibility);
    }, []);

    useEffect(() => {
        updateButtonVisibility();
    }, [containerRef.current?.scrollWidth, containerRef.current?.clientWidth]);

    return (

        <div class="container-wrapper">


        <div class="parent-product-container">
        
        <div className="product-gallery">
            {showButtons && (
                <>
                    <button className="nav-button prev" onClick={scrollLeft}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>                    

                    </button>
                    
                    <button className="nav-button next" onClick={scrollRight}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>

                    </button>

                    
                </>
            )}
            <div className="product-carousel">
                <div className="product-container" ref={containerRef}>
                {data.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
                </div>
            </div>
        </div>

        </div>
        </div>
    );
};

export default ProductGallery;
