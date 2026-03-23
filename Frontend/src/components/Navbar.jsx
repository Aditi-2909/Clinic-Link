import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()


    //2 state variable - showMenu and token 
    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken] = useState(true)
  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-b-cyan-400'>
        <img src={assets.logo} alt="logo" className='w-44 cursor-pointer '/>
        <ul className='hidden md:flex items-start gap-7 font-medium  bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] bg-clip-text text-transparent text-base '>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
            </NavLink>
            <NavLink to='/doctors' >
                <li  className='py-1'>All Doctors</li>
                <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
            </NavLink>
            <NavLink to='/about'>
                <li  className='py-1'>About</li>
                <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
            </NavLink>
            <NavLink to='/contact'>
                <li  className='py-1'>Contact</li>
                <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
            </NavLink>
            
        </ul>
        <div className='flex items-center gap-4'>
            {
                token?<div className='flex items-center gap-2 cursor-pointer group relative '>
                    <img src={assets.profile_pic} alt=""className='rounded-full w-8' />
                    <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium  hidden group-hover:block z-20'>
                        <div className='min-w-48  bg-gradient-to-r from-[#4fdbed] to-[#43f484] text-white rounded p-4 gap-4 flex flex-col shadow-lg'>
                            <p onClick={()=>navigate('/my-profile')}className='hover:text-black'>MyProfile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black'>MyAppointments</p>
                            <p  onClick={()=>setToken(false)}className='hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>:<button onClick={()=>navigate('/login')} className='px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl hidden-md:block'>Create Account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar