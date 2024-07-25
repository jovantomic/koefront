import React from 'react';
import ProductIcon from './ProductIcon'; // Importovanje ProductIcon komponente

const PostContent = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto p-8 bg-white shadow-lg">
            <div className="w-full md:w-1/3 h-auto">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src="zena2.jpg"
                    alt="Post image"
                />
            </div>
            <div className="w-full md:w-2/3 flex flex-col p-4 md:p-8">
                <h4 className="font-bold text-black text-4xl md:text-6xl mb-4">Haljina</h4>
                <p className="text-base md:text-lg text-neutral-600 mb-6">
                    This is an example description for the post. Here you can add any relevant content or description you want to display.
                    This is an example description for the post. Here you can add any relevant content or description you want to display.
                    This is an example description for the post. Here you can add any relevant content or description you want to display.
                    This is an example description for the post. Here you can add any relevant content or description you want to display.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <ProductIcon imageSrc="zena2.jpg" text="Product 1" />
                    <ProductIcon imageSrc="zena2.jpg" text="Product 2" />
                    <ProductIcon imageSrc="zena2.jpg" text="Product 3" />
                    <ProductIcon imageSrc="zena2.jpg" text="Product 4" />
                    {/* Dodaj još proizvoda po potrebi */}
                </div>
                <p className="text-base md:text-lg text-neutral-600">
                    Additional text or description can go here, below the product icons.
                </p>
            </div>
        </div>
    );
};

export default PostContent;
