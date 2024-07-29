import React from 'react';

const ImagePopup = ({ src, onClose }) => (
    <div
        style={{
            background: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'zoom-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onClick={onClose}
    >
        <img
            src={src}
            alt="Zoomed"
            style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
            }}
        />
    </div>
);

export default ImagePopup;
