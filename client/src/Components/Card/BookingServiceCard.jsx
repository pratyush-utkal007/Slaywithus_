import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const BookingServiceCard = ({ serviceName, duration, price, serviceImage, onSelect, isSelected }) => {
    return (
        <>
            <ul className="list-none cursor-pointer">
                <li onClick={() => onSelect({ serviceName, duration, price, serviceImage })} className={`${isSelected ? "border-green-600" : ""} relative service border-2 my-4 py-6 rounded-lg flex flex-col md:flex-row items-center justify-center md:justify-start mb-4`}>
                    {
                        isSelected && (
                            <div className="absolute right-3 top-3 md:top-auto md:right-8 text-green-600 text-3xl">
                                <BsCheckCircle />
                            </div>
                        )
                    }
                    <div className="service-icon md:mx-4">
                        <img
                            src={serviceImage}
                            className="rounded-full"
                            alt={price}
                        />
                    </div>
                    <div className="col service-details ml-2">
                        <span className="check-icon text-lg">
                            <i className="bi bi-check-circle-fill"></i>
                        </span>
                        <h2 className="service-name text-xl text-center md:text-left font-semibold mb-3 md:mb-1">{serviceName}</h2>
                        <p className="mb-0">
                            Duration: <span className="duration font-bold text-lg tracking-wider me-6">{duration}</span> Price:{' '}
                            <span className="price bg-green-500 text-white font-semibold px-2 py-1 rounded-md text-base tracking-wider">{price}</span>
                        </p>
                    </div>
                </li>
            </ul>

        </>
    )
}

export default BookingServiceCard
