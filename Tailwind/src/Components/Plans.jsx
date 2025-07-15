import React from 'react'
import plansSvg from '../assets/plansSvg.svg'
import tickNoBg from "../assets/tickNoBg.svg"

function Plans() {

    return (
        <section className='flex flex-col items-center justify-center h-auto bg-gray-50'>
            <div className='text-center mt-14'>
                <h1 className='text-4xl font-bold mt-10'>Choose Your Plan</h1>
                <p className='text-sm text-gray-500 mt-6 mb-18 sm:w-[500px] w-[300px]'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 pb-20'>
                {/* free plan card */}
                <div className='w-[330px] h-[760px] bg-white border-2 rounded-lg border-gray-200'>
                    <div className='flex flex-col px-10 pt-20 items-center h-full'>
                        <img src={plansSvg} alt="Plans" className='w-[144px] h-[165px]' />
                        <h2 className='py-10 font-bold text-l text-gray-800'>Free Plan</h2>

                        <div className="flex flex-col justify-between h-screen">

                            <div className="flex flex-col gap-2">
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Unlimited Bandwidth
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Encrypted Connection
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    No Traffic Logs
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Works on All Devices
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center pb-12 gap-5'>
                                <p className='text-2xl font-bold text-gray-800'>Free</p>
                                <button className='border-2 border-[#F53838] px-15 py-2 rounded-4xl text-[#F53838] cursor-pointer hover:text-white hover:bg-[#F53838] transform transition-all duration-300 text-[15px] font-bold'>Select</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* standard plan card */}
                <div className='w-[330px] h-[760px] bg-white border-2 rounded-lg border-gray-200'>
                    <div className='flex flex-col px-10 pt-20 items-center h-full'>
                        <img src={plansSvg} alt="Plans" className='w-[144px] h-[165px]' />
                        <h2 className='py-10 font-bold text-l text-gray-800'>Standard Plan</h2>

                        <div className="flex flex-col justify-between h-screen">

                            <div className="flex flex-col gap-2">
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Unlimited Bandwidth
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Encrypted Connection
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Yes Traffic Logs
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Works on All Devices
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Connect Anyware
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center pb-12 gap-5'>
                                <div className='flex'>
                                    <p className='text-2xl font-bold text-gray-800'>$9</p>
                                    <p className='text-gray-500 text-xl pl-1'> / mo</p>

                                </div>
                                <button className='border-2 border-[#F53838] px-15 py-2 rounded-4xl text-[#F53838] cursor-pointer hover:text-white hover:bg-[#F53838] transform transition-all duration-300 text-[15px] font-bold'>Select</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Premium plan card */}
                <div className='w-[330px] h-[760px] bg-white border-2 rounded-lg border-[#F53838] shadow-lg'>
                    <div className='flex flex-col px-10 pt-20 items-center h-full'>
                        <img src={plansSvg} alt="Plans" className='w-[144px] h-[165px]' />
                        <h2 className='py-10 font-bold text-l text-gray-800'>Premium Plan</h2>

                        <div className="flex flex-col justify-between h-screen">

                            <div className="flex flex-col gap-2">
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Unlimited Bandwidth
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Encrypted Connection
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Yes Traffic Logs
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Works on All Devices
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Connect Anyware
                                </p>
                                <p className="flex text-[14px] leading-[30px] text-gray-600">
                                    <img src={tickNoBg} alt="" />
                                    Get New Features
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center pb-12 gap-5'>
                                <div className='flex'>
                                    <p className='text-2xl font-bold text-gray-800'>$12</p>
                                    <p className='text-gray-500 text-xl pl-1'> / mo</p>

                                </div>
                                <button className='border-2 bg-[#F53838] hover:bg-transparent border-[#F53838] px-15 py-2 rounded-4xl hover:text-[#F53838] cursor-pointer text-white transform transition-all duration-300 text-[15px] font-bold shadow-[0px_5px_40px_-10px_#F53838]'>Select</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans