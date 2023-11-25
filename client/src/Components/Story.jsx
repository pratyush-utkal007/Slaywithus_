import React from 'react'
import blogs from '../BlogDB'
import StoryCard from './Card/StoryCard'

const Story = () => {
    return (
        <>
            <div className="story-wrapper my-5 md:my-8 justify-center">
                <h2 className="text-3xl font-semibold text-center mb-6">SLAYERS STORIES</h2>
                <div className="grid md:grid-cols-3 md:gap-20">
                    {
                        blogs.map((blog, index) => {
                            return <>
                                <StoryCard key={blog.id} blog={blog} />
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Story
