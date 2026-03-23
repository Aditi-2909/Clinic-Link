import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left  */}
            <div>
                <div className='flex gap-2 items-center mb-5'>
                    <img src={assets.logo} alt="" className=' w-36'/>
                    <p className='text-3xl font-bold bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] bg-clip-text text-transparent'>ClinicLink</p>
                </div>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            {/* center  */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right  */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+0-000-000-000</li>
                    <li>replyaditi01@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* copyright text  */}
            <hr />
            <p className='py-3 text-sm text-center font-mono'>© 2026 ClinicLink. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

