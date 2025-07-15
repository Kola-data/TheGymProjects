import React from 'react'
import Logo from '../assets/logo.svg'

function Headers() {
  return (
    <section className='flex fixed left-0 right-0 top-0 z-50 justify-between items-center py-8 xl:px-38 lg:px-20 md:px-15 sm:px-10 px-2 bg-white'>
      <div className='flex items-center gap-2'>
        <img src={Logo} alt="Logo" className='h-12' />
      </div>

      <div >
        <ul className='flex items-center gap-10 list-none cursor-pointer text-gray-700'>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </div>

      <div className='flex gap-6'>
        <button className='font-bold text-[18px]'>Sign In</button>
        <button className='font-bold text-[#F53855] text-[18px] border-2 border-[#F53855] py-3 px-13 rounded-4xl'>Sign Up</button>
      </div>
    </section>
  )
}

export default Headers