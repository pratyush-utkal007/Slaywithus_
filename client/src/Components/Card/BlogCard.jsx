import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <>

            <div className="flex gap-5 lg:gap-12 items-center mb-14">
                <div className="blog-image w-1/3">
                    <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content w-2/3  overflow-hidden">
                    <Link key={blog.id} to={`/blog/${blog.slug}`}>
                        <h1 className='font-[Cinzel] pb-2 lg:text-3xl hover:text-[#c] cursor-pointer'>{blog.title}</h1>
                    </Link>
                    <div className="flex">
                        <p>{blog.admin}&nbsp;|&nbsp;&nbsp;</p>
                        <p>{blog.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
