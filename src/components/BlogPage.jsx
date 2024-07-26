import React from 'react';
import PostContent from './PostContent'; 
import Naslov from './naslovk';
import Footer from './footer';
import useFetch from '../utils/useFetch';

const Post = () => {

    /*const url = 'http://localhost:9090/blogs/1'; // Zamenite sa vašim URL-om
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    */

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Naslov />
            <PostContent />
            <div className='w-full'>
            <Footer/>
                
            </div>
        </div>
    );
};

export default Post;
