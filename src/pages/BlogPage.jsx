import React from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent'; 
import Naslov from '../components/NaslovPage';
import Footer from '../components/FooterPage';
import useFetch from '../utils/useFetch';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

const Post = () => {
    const { id } = useParams(); // Uzimanje id iz URL-a
    const url = `http://localhost:8084/blogs/${id}`; // Dinamički izgradite URL koristeći id
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <LoadingPage/>;
    }

    if (error) {
        return <ErrorPage/>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Naslov />

            <PostContent data={data} /> {/* Prosledite preuzete podatke */}

            
            <div className='flex flex-col w-full h-auto p-8 bg-white shadow-lg'>
                <Footer/>
            </div>
        </div>
    );
};

export default Post;
