import React from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent'; 
import Naslov from '../components/NaslovPage';
import Footer from '../components/FooterPage';
import useFetch from '../utils/useFetch';

const Post = () => {
    const { id } = useParams(); // Uzimanje id iz URL-a
    const url = `http://localhost:8084/blogs/${id}`; // Dinamički izgradite URL koristeći id
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Naslov />
            
            <PostContent data={data} /> {/* Prosledite preuzete podatke */}

            
            <div className='w-full md:fixed bottom-0 left-0 bg-gray-100 z-50'>
                <Footer/>
            </div>
        </div>
    );
};

export default Post;
