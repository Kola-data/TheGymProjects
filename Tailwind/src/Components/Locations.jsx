import React from 'react'
import locationMap from "../assets/locationMap.svg"
import barner from "../assets/barner.svg"

function Locations() {
  return (
    <section className='flex flex-col items-center justify-center h-auto bg-gray-50'>
        <div className="text-center mt-14 flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-10 w-[400px]">
                Huge Global Network of Fast VPN
            </h1>
            <p className="text-sm text-gray-500 mt-6 mb-18 sm:w-[500px] w-[300px]">
                See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>
        </div>

        <div className='flex flex-col justify-center items-center gap-8 py-30'>
            <img src={locationMap} alt="" srcset=""/>
            <img src={barner} alt="" srcset=""/>
        </div>
        
    </section>
  )
}

export default Locations