import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import logo from '../Images/SlaywithUs-logo.png'
import axios from 'axios'
import { toast } from 'react-toastify'

const Contactus = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API,
    })

    let initinalData = {
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    }
    const [formData, setFormData] = useState(initinalData);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/contactus", {
                formData
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                }, 3000);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
        setFormData(initinalData)
    }

    return (
        <Layout>
            <h2 className='text-center mt-12 mb-5'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;About Us</span></h2>
            <h1 className='text-center text-5xl py-3 font-[Cinzel]'>Contact Us</h1>
            <p className='text-center text-lg'>We want to provide you with a great experience which is why we want to hear from you. Your feedback helps us bring you more of the events you love and the service you expect.</p>
            <div className="flex justify-center my-10">
                <div className="form-wrapper flex rounded-3xl justify-center w-[90%] lg:w-[60%] shadow-2xl">
                    <form onSubmit={handleSubmit} className='flex flex-col px-4 w-full'>
                        <div className="image flex justify-center my-4">
                            <img className='w-24' src={logo} alt="" />
                        </div>
                        {
                            show && <p className={`'text-xl text-center text-green-500 mb-5 '`}>Message sent successfully !</p>
                        }
                        <input name='fullname' value={formData.fullname} onChange={handleChange} className='input-field px-3 py-2 text-lg w-full mb-5 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100' type="text" placeholder='Enter your name' required />
                        <input name='email' value={formData.email} onChange={handleChange} className='input-field px-3 py-2 text-lg w-full mb-5 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100' type="email" placeholder='Enter your email' required />
                        <input name='subject' value={formData.subject} onChange={handleChange} className='input-field px-3 py-2 text-lg w-full mb-5 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100' type="text" placeholder='Enter your subject' required />
                        <textarea name='message' value={formData.message} onChange={handleChange} className='input-field px-3 py-2 text-lg w-full mb-5 rounded-md border border-gray-300 focus:ring focus:ring-green-400 bg-gray-100' id="" placeholder='Message ( OPTIONAL )'></textarea>
                        <div className="flex justify-center my-2 mb-5">
                            <button type='submit' className='bg-black text-white px-6 py-3 rounded-2xl'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contactus
