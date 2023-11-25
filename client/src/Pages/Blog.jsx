import React from 'react'
import Layout from '../Components/Layout/Layout'
import BlogCard from '../Components/Card/BlogCard'
import blog from '../BlogDB'
const Blog = () => {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row mt-5 px-4 lg:gap-40 lg:mt-10 lg:mx-20">
                <div className="blog-content w-full lg:w-2/3">
                    {
                        blog.map((blog, index) => {
                            return <>
                                <BlogCard blog={blog} />
                            </>
                        })
                    }
                </div>
                <div className="newsletter w-full lg:w-1/3 text-center">
                    <div className="flex flex-wrap justify-center w-full border-2 border-t-4 border-gray-600 rounded-lg py-10 px-12">
                        <h1 className=' text-3xl mb-4 tracking-wide'>SUBSCRIBE NEWSLETTER</h1>
                        <p className='text-lg mb-5 tracking-wide'>Get our latest news straight into your inbox.</p>
                        <input type="text" placeholder='Enter your email' className='input-field text-lg p-2  w-full h-full mb-3 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100' />
                        <button className='bg-black w-full text-white my-5 px-6 py-3 rounded-2xl'>SIGN UP</button>
                        <label className='flex items-center'>
                            <input className='' type="checkbox" name="" id="" /><span className='ps-1'>By clicking, You are agreeing to our terms.</span>
                        </label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog
