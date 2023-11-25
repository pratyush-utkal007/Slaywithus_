import React, { useState } from 'react'
import Times from './Card/Times'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import BasicDetails from './BasicDetails'
import Calendar from './Calendar'
import { toast } from 'react-toastify'

const DateTime = ({ selectService, onprevious, setSelectedComponent }) => {
    const [selectDate, setSelectDate] = useState("")
    const [selectDateTime, setSelectDateTime] = useState("")
    const [selectedTime, setSelectedTime] = useState('');

    const [showDateTime, setShowDateTime] = useState(true)
    const [showBasicDetails, setShowBasicDetails] = useState(false);

    const time = selectedTime.time;

    const handleSelectDate = (date) => {
        setSelectDate(date)
    }
    const handleSelectDateTime = (timeDate) => {
        setSelectDateTime(timeDate)
        setSelectedTime(timeDate)
    }

    const handleNext = () => {
        if (!selectDate) {
            toast("Select date", {
                position: toast.POSITION.TOP_RIGHT,
            })
        } else if (!selectDateTime) {
            toast("Select time", {
                position: toast.POSITION.TOP_RIGHT,
            })
        } else {
            setShowDateTime(false);
            setShowBasicDetails(true);
            setSelectedComponent('Basic Details');
        }
    }

    const handlePrevious = () => {
        setShowDateTime(true);
        setShowBasicDetails(false);
        setSelectedComponent('Date & Time');
    };

    return (
        <>
            {
                showDateTime && (
                    <>
                        <div className="w-full mx-2 md:mx-0 md:w-[70%] border-2 shadow-2xl rounded-lg mb-10">
                            <Calendar onDateSelect={handleSelectDate} />
                            <div className="w-full time-slot my-4 border h-96 overflow-auto px-1 md:px-4">
                                <h5 className="text-xl tracking-wider font-bold my-3">Time Slot</h5>
                                <h6 className=" text-lg font-semibold my-2 text-gray-600">Morning</h6>
                                <div className="flex flex-wrap">
                                    <Times time="9:00 am - 9:30 am" selectedTime={time === "9:00 am - 9:30 am"} onSelect={handleSelectDateTime} />
                                    <Times time="9:30 am - 10:00 am" selectedTime={time === "9:30 am - 10:00 am"} onSelect={handleSelectDateTime} />
                                    <Times time="10:00 am - 10:30 am" selectedTime={time === "10:00 am - 10:30 am"} onSelect={handleSelectDateTime} />
                                    <Times time="10:30 am - 11:00 am" selectedTime={time === "10:30 am - 11:00 am"} onSelect={handleSelectDateTime} />
                                    <Times time="11:00 am - 11:30 am" selectedTime={time === "11:00 am - 11:30 am"} onSelect={handleSelectDateTime} />
                                    <Times time="11:30 am - 12:00 pm" selectedTime={time === "11:30 am - 12:00 pm"} onSelect={handleSelectDateTime} />
                                </div>
                                <h6 className="font-semibold my-2 text-gray-600">Afternoon</h6>
                                <div className="flex flex-wrap">
                                    <Times time="12:00 pm - 12:30 pm" selectedTime={time === "12:00 pm - 12:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="12:30 pm - 1:00 pm" selectedTime={time === "12:30 pm - 1:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="1:00 pm - 1:30 pm" selectedTime={time === "1:00 pm - 1:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="1:30 pm - 2:00 pm" selectedTime={time === "1:30 pm - 2:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="2:00 pm - 2:30 pm" selectedTime={time === "2:00 pm - 2:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="2:30 pm - 3:00 pm" selectedTime={time === "2:30 pm - 3:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="3:00 pm - 3:30 pm" selectedTime={time === "3:00 pm - 3:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="3:30 pm - 4:00 pm" selectedTime={time === "3:30 pm - 4:00 pm"} onSelect={handleSelectDateTime} />
                                </div>
                                <h6 className="font-semibold my-2 text-gray-600">Evening</h6>
                                <div className="flex flex-wrap">
                                    <Times time="4:00 pm - 4:30 pm" selectedTime={time === "4:00 pm - 4:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="4:30 pm - 5:00 pm" selectedTime={time === "4:30 pm - 5:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="5:00 pm - 5:30 pm" selectedTime={time === "5:00 pm - 5:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="5:30 pm - 6:00 pm" selectedTime={time === "5:30 pm - 6:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="6:00 pm - 6:30 pm" selectedTime={time === "6:00 pm - 6:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="6:30 pm - 7:00 pm" selectedTime={time === "6:30 pm - 7:00 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="7:00 pm - 7:30 pm" selectedTime={time === "7:00 pm - 7:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="7:30 pm - 8:00 pm" selectedTime={time === "7:30 pm - 8:00 pm"} onSelect={handleSelectDateTime} />
                                </div>
                                <h6 className="font-semibold my-2 text-gray-600">Night</h6>
                                <div className="flex flex-wrap">
                                    <Times time="8:00 pm - 8:30 pm" selectedTime={time === "8:00 pm - 8:30 pm"} onSelect={handleSelectDateTime} />
                                    <Times time="8:30 pm - 9:00 pm" selectedTime={time === "8:30 pm - 9:00 pm"} onSelect={handleSelectDateTime} />
                                </div>
                            </div>
                            <div className="flex justify-between px-4 mb-3">
                                <button onClick={() => onprevious()} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'><AiOutlineArrowLeft className='text-lg' />previous</button>
                                <button onClick={handleNext} type='button' className='flex items-center gap-3 bg-[#12D488] text-white px-5 py-3 rounded-lg'>Next<AiOutlineArrowRight className='text-lg' /></button>
                            </div>
                        </div>
                    </>
                )
            }

            {
                showBasicDetails && (
                    <>
                        <BasicDetails selectService={selectService} selectDate={selectDate} selectDateTime={selectDateTime} onprevious={handlePrevious} setSelectedComponent={setSelectedComponent} />
                    </>
                )
            }
        </>
    )
}

export default DateTime
