import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import anniversary from '../Images/anniversary.jpeg'
import bithday from '../Images/bithday.jpeg'
import prewedding from '../Images/pre-wedding.jpeg'
import wedding from '../Images/wedding.jpeg'
import cocktail from '../Images/cocktail.jpeg'
import interviews from '../Images/interviews.jpeg'
import comeve from '../Images/comeve.jpeg'
import officeparty from '../Images/officeparty.jpeg'
import BookingServiceCard from './Card/BookingServiceCard'

const BookingServices = ({ onSelect, onNext, selectService }) => {
    const servicename = selectService.serviceName;

    return (
        <>
            <div className="w-full mx-2 md:mx-0 md:w-[70%] h-[90vh] border-2 shadow-2xl rounded-lg mb-10">
                <div className="booking-service-wrapper w-full px-2 lg:px-5 flex flex-col">
                    <div className="py-4 my-5 overflow-auto h-[75vh]">
                        <h1 className='font-semibold text-xl tracking-wider'>Select Services</h1>
                        <BookingServiceCard isSelected={servicename === 'Anniversary'} serviceName='Anniversary' duration='30 m' price='₹500' serviceImage={anniversary} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Birthday'} serviceName='Birthday' duration='30 m' price='₹500' serviceImage={bithday} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Pre-wedding'} serviceName='Pre-wedding' duration='30 m' price='₹500' serviceImage={prewedding} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Wedding'} serviceName='Wedding' duration='30 m' price='₹500' serviceImage={wedding} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Date Night/Cocktail'} serviceName='Date Night/Cocktail' duration='30 m' price='₹500' serviceImage={cocktail} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Interviews'} serviceName='Interviews' duration='30 m' price='₹500' serviceImage={interviews} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Community Events'} serviceName='Community Events' duration='30 m' price='₹500' serviceImage={comeve} onSelect={onSelect} />
                        <BookingServiceCard isSelected={servicename === 'Office function'} serviceName='Office function' duration='30 m' price='₹500' serviceImage={officeparty} onSelect={onSelect} />
                    </div>
                    <div className="flex justify-center px-14 ">
                        <button onClick={() => onNext(onSelect)} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Next<AiOutlineArrowRight className='text-lg' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingServices