import React, { useState, useEffect } from 'react';
import './styles.css'; // Importovanje CSS fajla
import ProductIcon from './ProductIcon'; // Importovanje ProductIcon komponente


const PostContent = ({data}) => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + n;
        if (newIndex > sortedImages.length) newIndex = 1;
        if (newIndex < 1) newIndex = sortedImages.length;
        return newIndex;
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {setSlideIndex(1)}    
        if (n < 1) {setSlideIndex(slides.length)}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    };

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

<div className="slideshow-container w-full md:w-1/3 h-auto" style={{ position: 'relative', margin: 'auto' }}>
  {sortedImages.map((image, index) => (
    <div className={`mySlides fade ${index + 1 === slideIndex ? '' : 'hidden'}`} key={image.id} style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}>
      <img
        className="w-full h-full object-cover"
        src={image.url}
        alt={data.title}
        style={{ width: '100%', height: '800px', objectFit: 'cover' }}
      />
    </div>
  ))}

  <a
    className="prev"
    onClick={() => plusSlides(-1)}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)'}
    style={{
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      width: 'auto',
      padding: '7px',
      paddingTop: '18px',
      paddingBottom: '18px',
      marginTop: '-22px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      transition: '0.6s ease',
      borderRadius: '0 3px 3px 0',
      userSelect: 'none',
      left: '0',
      backgroundColor: 'rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateY(-50%)',
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </a>

  <a
    className="next"
    onClick={() => plusSlides(1)}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)'}
    style={{
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      width: 'auto',
      padding: '7px',
      paddingTop: '18px',
      paddingBottom: '18px',
      marginTop: '-22px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      transition: '0.6s ease',
      borderRadius: '3px 0 0 3px',
      userSelect: 'none',
      right: '0',
      backgroundColor: 'rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateY(-50%)',
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </a>

  <div style={{ textAlign: 'center' }}>
    {sortedImages.map((_, index) => (
      <span
        key={index}
        className={`dot ${index + 1 === slideIndex ? 'active' : ''}`}
        onClick={() => currentSlide(index + 1)}
        style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: index + 1 === slideIndex ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}
      ></span>
    ))}
  </div>
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
