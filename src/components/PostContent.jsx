import React, { useState, useEffect } from 'react';
import './styles.css'; // Importovanje CSS fajla
import ProductGallery from './ProductGallery';
import ImagePopup from './ImagePopUp';

const PostContent = ({data}) => {

    const [popupSrc, setPopupSrc] = useState(null);
    const openPopup = (src) => setPopupSrc(src);
    const closePopup = () => setPopupSrc(null);

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

    return (
        <div className="flex flex-col md:flex-row w-full h-auto p-8 bg-white shadow-lg">

<div className="slideshow-container w-full md:w-1/3 h-auto" style={{ position: 'relative', margin: 'auto' }}>
  {sortedImages.map((image, index) => (
    <div className={`mySlides fade ${index + 1 === slideIndex ? '' : 'hidden'}`} key={image.id} style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}>
      <img
        className="w-full h-full object-cover blog-big-image"
        src={image.url}
        alt={data.title}
        
        onClick={() => openPopup(image.url)}
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

       
              <div style={{display: 'flex', flexDirection: 'column', gap: 20, padding: 20}}>

              <div>
                <p className="p-content-style text-base md:text-lg text-neutral-600 mb-6">
                  {data.long_content}
                </p>
              </div>
                
                
                <ProductGallery data={data.products}></ProductGallery>
                

              </div>

                {popupSrc && (
                  <ImagePopup src={popupSrc} onClose={closePopup} />
                )}

            </div>
        </div>
    );
};

export default PostContent;
