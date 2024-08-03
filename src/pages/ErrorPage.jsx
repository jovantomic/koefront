import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-slate-700">Greška</h1>
                <p className="text-lg text-gray-700">Nažalost, učitavanje stranice nije uspelo. Molimo pokušajte ponovo kasnije.</p>
            </div>
        </div>
    );
};

export default ErrorPage;
