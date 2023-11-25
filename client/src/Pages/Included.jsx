import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const Included = () => {
    return (
        <Layout>
            <div className="aboutus px-2 lg:px-20">
                <h2 className='text-center mt-9 mb-4 font-[jost]'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;Privacy Policy</span></h2>
                <h1 className='text-center text-4xl py-3 font-[Cinzel]'>Privacy Policy</h1>
                <p className='text-lg'>Our styling service includes the following components:</p>
                <ol className='list-decimal text-2xl lg:px-9 ps-5 my-9'>
                    <li className='pb-6'>Personal Styling Questionnaire: You will be provided with a comprehensive questionnaire that covers various aspects of your personal style. This includes questions about your body shape, coloring, fashion preferences, lifestyle, and budget. By filling out this questionnaire, you provide us with the necessary information to understand your style requirements.</li>
                    <li className='pb-6'>Zoom Consultation: We schedule an initial zoom call with one of our expert stylists. During this consultation, we discuss your style goals in detail. You have the opportunity to communicate your specific areas of focus, such as work attire, casual wear, special occasions, or any other preferences you may have. Additionally, you can share up to two existing items from your wardrobe that you would like assistance with styling. Our stylist will provide guidance and suggestions on how to incorporate these items into your overall look.</li>
                    <li className='pb-6'>Shoes, Jewelry, and Accessories: Our styling service also includes recommendations for shoes, jewelry, and accessories. Based on your style preferences and requirements discussed during the zoom consultation, our stylist will suggest appropriate shoes, jewelry pieces, and accessories that complement your outfits and enhance your overall look. These recommendations will be tailored to your personal style and preferences.</li>
                </ol>
                <p className='pb-10 text-lg'>Overall, our aim is to provide you with a comprehensive styling experience that covers all aspects of your wardrobe, including clothing, shoes, jewelry, and accessories. We want to help you create a cohesive and personalized style that reflects your individuality and meets your specific needs.</p>
            </div>
        </Layout>
    )
}

export default Included
