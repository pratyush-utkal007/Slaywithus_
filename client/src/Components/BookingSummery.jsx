import React, { useState } from 'react'
import { AiFillGift, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import PaymentPage from './PaymentPage'

const BookingSummery = ({ onprevious, selectService, selectDate, selectDateTime, userBasicDetail, userPersionalData, setSelectedComponent }) => {
    const [showBookingSummery, setBookingSummery] = useState(true)
    const [showQR, setShowQR] = useState(false)

    const HandleNext = () => {
        setBookingSummery(false);
        setShowQR(true);
        setSelectedComponent('Payment');
    }

    const handlePrevious = () => {
        setBookingSummery(true);
        setShowQR(false);
        setSelectedComponent('Summary');
    };

    return (
        <>
            {
                showBookingSummery && (
                    <>
                        <div className="mx-3 lg:w-[70%] my-3 py-5 border-2 shadow-2xl rounded-lg mb-10">
                            <div className="summary  p-4 text-center">
                                <div className="img-box flex justify-center text-2xl">
                                    <AiFillGift />
                                </div>
                                <h6 className="my-2 tracking-wide text-lg text-gray-500">Your appointment booking summary</h6>
                                <div className="customer mb-3">
                                    <span className="text-lg font-semibold tracking-wide">Customer</span>
                                    <p className="text-green-500 font-bold tracking-wider text-xl">{userBasicDetail.firstName}&nbsp;{userBasicDetail.lastName}</p>
                                </div>
                                <div className="mb-3">
                                    <span className="text-lg font-semibold tracking-wide">Service</span>
                                    <p className="text-green-500 font-bold tracking-wider text-xl">{selectService.serviceName}</p>
                                </div>
                                <span className="text-lg font-semibold tracking-wide">Date & Time</span>
                                <p className="text-green-500 font-bold tracking-wider text-xl mb-5">{selectDate}&nbsp;,<br className='md:hidden block' />{selectDateTime.time}</p>
                            </div>
                            <div className="flex justify-between px-4 ">
                                <button onClick={() => onprevious()} className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'><AiOutlineArrowLeft className='text-lg' />previous</button>
                                <button onClick={HandleNext} className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Next<AiOutlineArrowRight className='text-lg' /></button>
                            </div>
                        </div>
                    </>
                )
            }

            {
                showQR && (
                    <>
                        <PaymentPage onprevious={handlePrevious} selectService={selectService} selectDate={selectDate} selectDateTime={selectDateTime} userBasicDetail={userBasicDetail} userPersionalData={userPersionalData} />
                    </>
                )
            }
        </>
    )
}

export default BookingSummery
