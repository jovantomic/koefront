import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/newsletter/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            
            if (response.ok) {
                setShowPopup(true);
                setEmail('');
            } else {
                console.error('Failed to subscribe');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <footer className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 md:w-2/3 text-center md:text-left">
                        <h5 className="text-lg font-bold mb-2">Newsletter</h5>
                        <p className="mb-2 text-sm">Budite prvi koji dobijaju nove ponude i informacije o našim proizvodima.</p>

                        <form className="flex flex-col md:flex-row items-center" onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                className="px-4 py-2 w-full md:flex-grow border border-gray-600 focus:outline-none focus:border-gray-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button 
                                type="submit" 
                                className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-slate-700 hover:bg-slate-500 transition duration-200 text-white text-sm w-32"
                            >
                                Pretplati se
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/3 text-center">
                        <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="text-black hover:text-gray-400 transition duration-200">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-400 transition duration-200">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-black hover:text-gray-400 transition duration-200">
                                <FaPinterestP size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold mb-4">Uspešno pretplaćeni!</h2>
                        <p className="mb-6">Hvala što ste se pretplatili na naš newsletter.</p>
                        <button 
                            className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-slate-700 hover:bg-slate-500 transition duration-200 text-white text-sm w-32"
                            onClick={() => setShowPopup(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
