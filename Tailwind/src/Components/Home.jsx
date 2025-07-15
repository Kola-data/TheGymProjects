import React from 'react'
import homeSvg from "../assets/homeSvg.svg"
import userSvg from "../assets/user.svg"
import locationSvg from "../assets/location.svg"
import serversSvg from "../assets/servers.svg"
import about from "../assets/about.svg"
import tick from "../assets/tick.svg"

function Home() {
    let featuresListOnAbout = [
        {
            icon: tick,
            title: "Powerfull online protection."
        },
        {
            icon: tick,
            title: "Internet without borders."
        },
        {
            icon: tick,
            title: "Supercharged VPN"
        },
        {
            icon: tick,
            title: "No specific time limits."
        },
    ];
    return (
        <div className='min-h-screen mt-20'>
            {/* here is barner */}
            <section className="flex justify-center px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl w-full py-10">

                    {/* Text Section */}
                    <div className="flex flex-col gap-6 w-full md:w-1/2 items-center text-center md:text-left">
                        <h2 className="text-[40px] md:text-[50px] leading-tight">
                            Want anything to be easy with <strong>LaslesVPN.</strong>
                        </h2>
                        <p className="text-gray-700">
                            Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.
                        </p>
                        <button className="mt-4 bg-[#F53855] text-white font-bold py-4 px-15 rounded-[10px] text-xl self-center md:self-start shadow-[0_10px_25px_-5px_#F53855]">
                            Get Started
                        </button>

                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img src={homeSvg} alt="Home Illustration" className="w-full h-auto" />
                    </div>

                </div>

            </section>
            {/* here are services */}
            <section className='flex justify-center items-center'>
                <div className='py-10 w-[80%] grid grid-cols-3 justify-between items-center shadow-[0_5px_15px_-8px_rgba(136,136,136,0.5)] rounded-2xl'>
                    <div className="border-r-2 border-gray-200 flex items-center justify-center h-35">
                        <div className="flex items-center gap-7">
                            <img className="w-16 h-16" src={userSvg} alt="User" />
                            <div>
                                <h1 className="text-3xl font-bold">90+</h1>
                                <p className="text-gray-600 text-xl">Users</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-r-2 border-gray-200 flex items-center justify-center h-35">
                        <div className="flex items-center gap-7">
                            <img className="w-16 h-16" src={locationSvg} alt="User" />
                            <div>
                                <h1 className="text-3xl font-bold">30+</h1>
                                <p className="text-gray-600 text-xl">Locations</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-35">
                        <div className="flex items-center gap-7">
                            <img className="w-16 h-16" src={serversSvg} alt="User" />
                            <div>
                                <h1 className="text-3xl font-bold">50+</h1>
                                <p className="text-gray-600 text-xl">Servers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about us */}
            <section className='px-48 py-36 flex flex-wrap justify-between'>
                <div>
                    <img src={about} alt="" className='' srcset="" />
                </div>
                <div className='flex flex-col w-[500px]'>
                    <h3 className='text-5xl py-8'>
                        We Provide Many Features You Can Use
                    </h3>
                    <p className='pb-5 text-gray-700'>
                        You can explore the features that we provide with fun and have
                        their own functions each feature.
                    </p>

                    {featuresListOnAbout.map(item => (
                        <div className='flex gap-3 py-3'>
                            <img src={item.icon} alt="" srcset="" />
                            <p className='text-gray-700'>{item.title}</p>
                        </div>
                    ))}

                </div>
            </section>
        </div>

    )
}

export default Home