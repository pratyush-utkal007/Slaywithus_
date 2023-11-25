import React from 'react';
import { Link } from 'react-router-dom';
        
const StoryCard = ({ blog }) => {
    return (
        <>
            <div className="relative mb-9 md:mb-0">
                <Link key={blog.id} to={`/blog/${blog.slug}`}>
                    <div className="w-full h-80 mb-5 overflow-hidden">
                        <img
                            src={blog.image} alt={blog.title} className="object-center duration-500 transition-transform hover:scale-125" />
                    </div>
                </Link>
                <div className="story-details">
                    <Link key={blog.id} to={`/blog/${blog.slug}`}>
                        <div className='cursor-pointer text-xl font-[Cinzel] hover:text-[#edac63]'>{blog.title}</div>
                    </Link>
                    <button className="bookmark-btn"><i className="bi bi-bookmark"></i></button>
                    <p className="upload-details"><span className="font-bold text-sm">{blog.writter}</span> | <span className="text-sm underline">{blog.date}</span></p>
                </div>
            </div>
        </>
    );
}

export default StoryCard;   