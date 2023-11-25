import React from 'react'
import Layout from '../Components/Layout/Layout'
import Services from '../Components/Services'
import Story from '../Components/Story'
import HomeCarousel from '../Components/HomeCarousel'
import computer from '../Images/computer.jpg'
import workSection from '../Images/work-section.jpg'
import video1 from '../Images/slaywithus.mp4'
import '../Components/Component_CSS/CSS.css'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <Layout>
            <div className='mx-4 md:mx-20'>
                <HomeCarousel />

                <div className="font-fourth font-normal text-center my-20"> 
                    <div className="col intro-text">
                        <h2 className="font-fourth text-3xl pb-3">Personal Stylist and Fashion Counsellor</h2>
                        <p className="text-gray-600 leading-6 tracking-wider text-lg font-semibold">
                            As a professional stylist, we can visualize how clothes will fit on
                            you and suggest the best pieces for your body-shape, your
                            personality that cover all occasions
                        </p>
                    </div>
                    <div className="passage my-24 p-0">
                        <h2 className="font-fourth text-3xl tracking-wide pb-3">We are here for you</h2>
                        <p className="text-gray-500 text-xl leading-6 tracking-wide font-sans">
                            Maa: “I have this function and I am in doubt as to what to wear for
                            the same” <br /> Us: Why are you confused? You have so many sarees to
                            choose from!
                            <br /> Maa: But I have worn most of them and do not want to
                            purchase a new piece just for this function. <br /> Isn't this the tale of
                            all Indian households where we have seen our Moms, Aunts,
                            Neighborhood Aunties, Friends, Relatives all struggle with this
                            “What to wear?” syndrome. We call this a syndrome as it's a
                            characteristic that brings in opinions, emotions and one's behavior.
                            To get rid of this syndrome that plagues us every now and then, we
                            two sisters have come up with "Slay with us". A platform by us that
                            will help you save your time and energy that you waste considerably
                            fight this syndrome in your day to day life
                        </p>
                    </div>
                </div>

                <div className="work-wrapper container mx-auto">
                    <div className="first-section flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                        <div className="lg:w-1/2 lg:text-left text-center">
                            <h3 className="text-3xl my-3">How It Works</h3>
                            <p className="text-gray-500 text-xl leading-6 tracking-wide trxthomepage">
                                To start with, you have to fill a questionnaire in order for us to get a
                                deeper understanding of your body shape, taste, lifestyle, and budget. Followed by a Zoom consultation, where
                                we discuss your style goals, and if there are any particular areas-work, holiday, new mom, dating,
                                socializing, etc-you would like to focus on. We then suggest you a few personal style guides of outfits that
                                may match your choices.
                            </p>
                            <Link to={'/how-it-work'}> <button className="bg-[#FFC2C2] hover:bg-black hover:text-[#FFC2C2] duration-500 my-3 px-7 py-2 font-semibold rounded text-center lg:text-left">Know More</button></Link>
                        </div>
                        <div className="w-1/2 lg:w-2/5 text-center">
                            <img src={workSection} alt="img" width="400" className="mx-auto lg:mx-0 img-fluid" />
                        </div>
                    </div>
                    <div className="second-section flex flex-col lg:flex-row justify-center lg:justify-between items-center my-3">
                        <div className="w-1/2 lg:w-2/5 text-center">
                            <div className="img-box">
                                <img src={computer} alt={computer} className=" mx-auto lg:mx-0 img-fluid" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:text-left text-center my-4">
                            <h3 className="text-3xl pb-3">What Is Included</h3>
                            <p className="text-gray-500 text-xl leading-6 tracking-wide trxthomepage">
                                Personal styling questionnaire.
                                An initial Zoom call to discuss your style requirements. Can include 2 existing items from your wardrobe,
                                that you want to know how to style.
                                Can also include shoes, jewelry, and accessories.
                            </p>
                            <Link to={'/what-is-included'}> <button className="bg-[#FFC2C2] hover:bg-black hover:text-[#FFC2C2] duration-500 my-3 px-7 py-2 font-semibold rounded text-center lg:text-left">Know More</button></Link>
                        </div>
                    </div>
                    <div className="third-section flex flex-col lg:flex-row gap-0 justify-center lg:justify-between items-center text-center">
                        <div className="lg:w-1/2 lg:text-left text-center">
                            <h3 className="text-3xl my-3">Know The Slayers</h3>
                            <p className="text-gray-500 text-xl leading-6 tracking-wide trxthomepage">
                                Your very own Jigyansa and Mithila are "Virtual Fashionistas" by their own choice and
                                passion. The ability
                                to mix-match varied hues with innumerable outfits on ample occasions led the two sisters to collaborate and
                                start their totally unique concept of "Virtual styling" for the very first time in India. Furthermore,
                                Jigyansa is a Banker by profession and Mithila is a Human resource Consultant. Both the sisters have a flair
                                for writing and Jigyansa has even authored an ebook "STAGGERED" in the year 2020. Spending their formative
                                years in Bhubaneswar and eventually living in Maharashtra, the United States, and United Kingdom helped them
                                to gain global exposure that led to the inception of their virtual styling idea. Their vision is to create
                                a "Fashionable India" for women from 18-60 plus years age group who come across this tumultuous question in
                                their everyday life "What to wear".
                            </p>
                            <Link to={'/what-is-included'}> <button className="bg-[#FFC2C2] hover:bg-black hover:text-[#FFC2C2] duration-500 my-3 px-7 py-2 font-semibold rounded text-center lg:text-left">Know More</button></Link>
                        </div>
                        <div className="lg:w-1/3 w-full text-center lg:text-left ps-0 ms-0 pe-2">
                            <video id='myVideo' className='h-96' src={video1} controls width="100%" height="auto">Your browser does not support the video tag.</video>
                        </div>
                    </div>
                </div>

                <Story />
                <Services />
            </div>
        </Layout>
    )
}



export default HomePage
