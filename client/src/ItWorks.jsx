import React from 'react'
import Layout from './Components/Layout/Layout'
import { Link } from 'react-router-dom'

const ItWorks = () => {
    return (
        <Layout>
            <div className="aboutus px-2 lg:px-20">
                <h2 className='text-center mt-9 mb-4 font-[jost]'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;How it works</span></h2>
                <h1 className='text-center text-4xl py-3 font-[Cinzel]'>How it works</h1>
                <p class="my-9 text-xl">Our process begins with a questionnaire that allows us to gather essential information about you. The questionnaire covers various aspects such as your body shape, coloring, taste in fashion, lifestyle, and budget. This helps us understand your preferences and requirements more effectively.</p>
                <p class="my-9 text-xl">Once you have filled out the questionnaire, we schedule a zoom consultation session with one of our expert stylists. During this consultation, we delve deeper into your style goals and aspirations. We discuss your specific areas of focus, such as work attire, holiday outfits, post-pregnancy fashion, date night ensembles, or socializing attire. By understanding your unique needs, we can tailor our recommendations accordingly.</p>
            </div>
        </Layout>
    )
}

export default ItWorks
