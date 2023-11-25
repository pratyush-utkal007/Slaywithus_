import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import slide1 from '../Images/slide-1.jpg'
import slide2 from '../Images/slide-2.jpg'

const HomeCarousel = () => {
    return (
        <>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div>
                    <img src={slide1} alt='img' />
                </div>
                <div>
                    <img src={slide2} alt='img' />
                </div>
            </Carousel>
        </>
    )
}

export default HomeCarousel
