import React from 'react'
import QR from '../Images/QR Code.gif'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const PaymentPage = ({ onprevious, selectService, selectDate, selectDateTime, userBasicDetail, userPersionalData }) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API,
    })
    const navigate = useNavigate();

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/booking", {
                selectService,
                selectDate,
                selectDateTime,
                userBasicDetail,
                userPersionalData
            });

            if (res.data && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <>
            <div className="mx-3 lg:w-[70%] my-3 py-5 border-2 shadow-2xl rounded-lg mb-10">
                <div className="w-full flex justify-center h-[90vh]">
                    <img src={QR} alt="" />
                </div>
                <div className="flex justify-between my-5 px-4 ">
                    <button onClick={() => onprevious()} className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'><AiOutlineArrowLeft className='text-lg' />previous</button>
                    <button onClick={handleBooking} className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Book Appointment<AiOutlineArrowRight className='text-lg' /></button>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
