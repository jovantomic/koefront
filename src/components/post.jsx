import React from 'react';
import PostContent from './PostContent'; 
import Naslov from './naslovk';
import Footer from './footer';
const Post = () => {
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
