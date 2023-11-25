import React from 'react'

const ServicesCard1 = ({ title, imgs, desc }) => {
    return (
        <>
            <div className="trxthomepage mb-4 ">
                <h3 className="text-center text-3xl underline mb-4">{title}</h3>
                <div className="w-full  duration-500 transition-transform hover:translate-y-3">
                    <div className='overflow-hidden h-[70vh] md:h-[90vh]'>
                        <img
                            src={imgs}
                            alt={title}
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <p className="text-center text-lg tracking-wide mt-4">
                    {desc}
                </p>
            </div>
        </>
    )
}

export default ServicesCard1
