import React from 'react';

const LoadingPage = () => {
    const spinnerStyle = {
        width: '4rem',
        height: '4rem',
        border: '4px solid #ddd',
        borderTop: '4px solid #2d3748',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                    <div style={spinnerStyle}></div>
                </div>
                <p className="text-lg text-gray-700">Učitavanje, molimo čekajte...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
