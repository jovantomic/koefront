import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard() {
    return (
        <Link to="/post">
            <div className="flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[70vh] w-full">
                <div className="h-[70%]">
                    <img
                        className="w-full h-full object-cover"
                        src="zena2.jpg"
                        alt=""
                    />
                </div>
                <div className="h-[30%] p-4 text-center flex flex-col justify-center">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        Card title
                    </h5>
                    <p className="text-base text-neutral-600">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </div>
        </Link>
    );
}
