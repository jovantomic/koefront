import React, { useState } from 'react';
import './ProductCard.css';
import ImagePopup from './ImagePopUp';

const ProductCard = ({ item }) => {

    const [popupSrc, setPopupSrc] = useState(null);
    const openPopup = (src) => setPopupSrc(src);
    const closePopup = () => setPopupSrc(null);

    const sortedImages = item.images.sort((a, b) => a.priority - b.priority);
    
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={sortedImages[0].url}
                     alt="Product"
                     className="product-image" 
                     onClick={() => openPopup(sortedImages[0].url)}/>
            </div>
            <div className="product-info">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">${item.price}</p>
            </div>
            {popupSrc && (
                  <ImagePopup src={popupSrc} onClose={closePopup} />
                )}
        </div>
    );
};

export default ProductCard;
