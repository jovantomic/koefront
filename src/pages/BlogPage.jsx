import React from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent'; 
import Naslov from '../components/naslovk';
import Footer from '../components/footer';
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
            <div className='w-full'>
                <Footer/>
            </div>
        </div>
    );
};

export default Post;
