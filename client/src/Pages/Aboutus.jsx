import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const Aboutus = () => {
    return (
        <Layout>
            <h2 className='text-center mt-12 mb-5'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;About Us</span></h2>
            <h1 className='text-center text-5xl py-3 font-[Cinzel]'>About Us</h1>
            <div className="px-4 lg:px-32">
                <h2 className="text-3xl lg:text-5xl my-4">KNOW THE SLAYERS!!</h2>
                <p className="aboutus text-2xl tracking-wide my-12">
                    •&nbsp;Your very own Jigyansa and Mithila are “Virtual Fashionistas” by their
                    own choice and passion. The ability to mix-match varied hues with
                    innumerable outfits on ample occasions led the two sisters to collaborate
                    and start their totally unique concept of “Virtual styling” for the very
                    first time in India.
                </p>
                <p className="aboutus text-2xl tracking-wide my-12">
                    •&nbsp;Furthermore, Jigyansa is a Banker by profession and Mithila is a Human
                    resource Consultant. Both the sisters have a flair for writing and
                    Jigyansa has even authored an online book “STAGGERED” in the year 2020.
                    Spending their formative years in Bhubaneswar and eventually living in
                    Maharashtra, the United States, and the United Kingdom helped them to
                    gain a global exposure that led to the inception of their virtual styling
                    idea.
                </p>
                <p className="aboutus text-2xl tracking-wide my-12">
                    •&nbsp;Their vision is to create a “Fashionable India” for women from 18-60
                    plus years age group who come across this tumultuous question in their
                    everyday life “What to wear”.
                </p>
            </div>
        </Layout>
    )
}

export default Aboutus
