import React from 'react'
import popupimg from '../Images/popup.png'
import { AiOutlineClose } from 'react-icons/ai'
import './Component_CSS/CSS.css'
import { Link } from 'react-router-dom'

const Popup = ({ popup, setPopup }) => {
    return (
        <>
            <div className="hidden fixed h-screen w-screen z-50 lg:block bg-[#000000c7]">
                <div className="flex  popup-fade justify-center relative translate-y-28 ">
                    <div onClick={() => setPopup(false)} className="absolute text-3xl border-black border-2 rounded-full my-5"><AiOutlineClose /></div>
                    <div className="grid grid-cols-2 bg-white gap-16 px-8 w-[50%] rounded-xl">
                        <div className="">
                            <img src={popupimg} alt="" />
                        </div>
                        <div className="flex flex-col text-center my-auto">
                            <p className='pb-6 text-3xl font-[Cinzel]'>Subscribe Newsletter</p>
                            <p className='pb-6 text-base font-[Cinzel] text-gray-500'>Get our latest news straight into your inbox.</p>
                            <input className='w-60 mx-auto border-b-2 text-lg focus:outline-none ps-4' type="text" placeholder='Enter your email' />
                            <button className='my-6 text-center py-3 mx-20 rounded-2xl font-[jost] hover:bg-orange-500 duration-500 text-lg bg-black text-white'>SIGN UP</button>
                            <div className="">
                                <input className='' type="checkbox" name="" id="tnc" />
                                <label className='pb-6 text-lg cursor-pointer' htmlFor="tnc" >
                                    <span className='ps-1'>By clicking, You are agreeing to our <Link to={'/privacy-policy'}>terms</Link>.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
