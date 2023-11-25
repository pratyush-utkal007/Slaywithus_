import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout'

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("")
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API,
    })
    const navigate = useNavigate()

    //otp send
    const sendOtp = async () => {
        try {
            const res = await axiosInstance.post("/otp-send", {
                email,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error('Something went wrong');
        }
    }

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/reset-password", {
                email,
                password,
                otp
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login')
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    }
    return (
        <Layout>
            <h2 className='text-center mt-8'><Link to={'/'}>Slaywithus</Link><span>&gt;&nbsp;Reset Password</span></h2>
            <h1 className='text-center text-4xl py-3'>Reset Password</h1>
            <section className="max-w-full flex items-center justify-center bg-[#dbe6ee]">
                <div className="bg-white md:min-w-[700px] rounded my-20 login">
                    <div>
                        <form>
                            <div className="mb-4 flex p-4">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border p-2 focus:outline-blue-700 flex-grow"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />{" "}
                                <button className="text-lg font-semibold p-2 bg-blue-700 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 duration-500 hover:border border text-white" onClick={sendOtp}>
                                    Send OTP
                                </button>
                            </div>
                            <div className="px-4">
                                <input
                                    type="text"
                                    name="otp"
                                    id="otp"
                                    placeholder="Enter OTP"
                                    className="border p-2 focus:outline-blue-700 mb-4 w-full"
                                    value={otp}
                                    required
                                    onChange={(e) => { setOtp(e.target.value) }}
                                />
                                <input
                                    type="text"
                                    name="newpass"
                                    id="newpass"
                                    placeholder="Enter a new password"
                                    className="border p-2 focus:outline-blue-700 w-full mb-4"
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className="flex justify-center p-4">
                                <button className="text-lg font-semibold p-2 bg-blue-700 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 duration-500 hover:border border text-white" onClick={handleSubmit}>
                                    Continue
                                </button>
                            </div>
                        </form>
                        <p className="text-center py-4 text-slate-500 md:text-lg font-bol">OR</p>
                        <div className="flex justify-center p-4">

                            <Link to="/login" className="text-center py-4 text-slate-500 md:text-lg font-bold">Login via password ?</Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

        </Layout>
    )
}

export default ResetPassword
