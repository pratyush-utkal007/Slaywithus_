import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const Times = ({ time, onSelect, selectedTime }) => {
    return (
        <>
            <div onClick={() => onSelect({ time })} className={`${selectedTime ? "bg-green-600 text-white border-2" : ""} relative border rounded my-1 px-2 mx-1 py-3 w-[47%] cursor-pointer transition-all duration-400 hover:border-green-400`}>
                {
                    selectedTime && (
                        <div className="absolute right-2 top-auto text-green-600 text-2xl">
                            <BsCheckCircle className='hidden md:block text-white'/>
                        </div>
                    )
                }
                <span className="text-base font-normal">{time}</span>
            </div>
        </>
    )
}

export default Times
