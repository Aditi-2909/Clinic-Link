// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'

// const Navbar = () => {
//     const navigate = useNavigate()


//     //2 state variable - showMenu and token 
//     const [showMenu,setShowMenu]=useState(false)
//     const [token,setToken] = useState(true)
//   return (
//     <div className='flex items-center justify-between py-4 mb-5 border-b border-b-cyan-400'>
//         <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-44 cursor-pointer '/>
//         <ul className='hidden md:flex items-start gap-7 font-medium  bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] bg-clip-text text-transparent text-base '>
//             <NavLink to='/'>
//                 <li className='py-1'>Home</li>
//                 <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
//             </NavLink>
//             <NavLink to='/doctors' >
//                 <li  className='py-1'>All Doctors</li>
//                 <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
//             </NavLink>
//             <NavLink to='/about'>
//                 <li  className='py-1'>About</li>
//                 <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
//             </NavLink>
//             <NavLink to='/contact'>
//                 <li  className='py-1'>Contact</li>
//                 <hr  className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600 ' />
//             </NavLink>
            
//         </ul>
//         <div className='flex items-center gap-4'>
//             {
//                 token?<div className='flex items-center gap-2 cursor-pointer group relative '>
//                     <img src={assets.profile_pic} alt=""className='rounded-full w-8' />
//                     <img src={assets.dropdown_icon} alt="" className='w-2.5' />
//                     <div className='absolute top-0 right-0 pt-14 text-base font-medium  hidden group-hover:block z-20'>
//                         <div className='min-w-48  bg-gray-100 rounded p-4 gap-4 flex flex-col shadow-lg'>
//                             <p onClick={()=>navigate('/my-profile')}className='hover:text-black'>MyProfile</p>
//                             <p onClick={()=>navigate('/my-appointments')} className='hover:text-black'>MyAppointments</p>
//                             <p  onClick={()=>setToken(false)}className='hover:text-black'>Logout</p>
//                         </div>
//                     </div>
//                 </div>:<button onClick={()=>navigate('/login')} className='px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl hidden-md:block'>Create Account</button>
//             }
//             <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
//             {/* ...... Mobile Menu.... */}

//             <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 botton-0 z-20 overflow-hidden bg-while transition-all`}>
//                 <div className='flex items-center justify-between px-5 py-6'>
//                     <img className='w-36' src={assets.logo} alt="" />
//                     <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <ul>
//                    <NavLink>Home</NavLink>
//                    <NavLink>ALL DOCTORS</NavLink>
//                    <NavLink>ABOUT</NavLink>
//                    <NavLink>ONTACT</NavLink>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar









import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true) // Set false if you want initially logged-out
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const profileRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowProfileDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-cyan-400'>
            <img
                onClick={() => navigate('/')}
                src={assets.logo}
                alt="logo"
                className='w-44 cursor-pointer'
            />

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-start gap-5 font-medium bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] bg-clip-text text-transparent text-base'>
                <NavLink to='/'><li className='py-1'>Home</li></NavLink>
                <NavLink to='/doctors'><li className='py-1'>All Doctors</li></NavLink>
                <NavLink to='/about'><li className='py-1'>About</li></NavLink>
                <NavLink to='/contact'><li className='py-1'>Contact</li></NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {/* Profile / Create Account */}
                {token ? (
                    <div ref={profileRef} className='relative'>
                        <div
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => setShowProfileDropdown(prev => !prev)}
                        >
                            <img src={assets.profile_pic} alt="Profile" className='w-8 rounded-full' />
                            <img src={assets.dropdown_icon} alt="Dropdown" className='w-2.5' />
                        </div>

                        {showProfileDropdown && (
                            <div className='absolute right-0 mt-2 min-w-[150px] bg-stone-100 rounded flex flex-col gap-2 p-3 shadow-lg z-50'>
                                <p
                                    onClick={() => { navigate('/my-profile'); setShowProfileDropdown(false) }}
                                    className='cursor-pointer hover:bg-gray-200 px-2 py-1 rounded'
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => { navigate('/my-appointments'); setShowProfileDropdown(false) }}
                                    className='cursor-pointer hover:bg-gray-200 px-2 py-1 rounded'
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => setToken(false)}
                                    className='cursor-pointer hover:bg-gray-200 px-2 py-1 rounded'
                                >
                                    Logout
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white cursor-pointer px-8 py-3 rounded-full font-semibold hidden md:block hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden cursor-pointer'
                    src={assets.menu_icon}
                    alt="Menu"
                />

                {/* Mobile Menu */}
                <div className={`${showMenu ? 'fixed w-full h-full top-0 left-0 z-40 bg-white' : 'h-0 w-0 overflow-hidden'} md:hidden transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6 border-b'>
                        <img src={assets.logo} className='w-36' alt="Logo" />
                        <img
                            className='w-7 cursor-pointer'
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt="Close"
                        />
                    </div>
                    <ul className='flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>

                        {token && (
                            <div className='mt-4 border-t pt-4 w-full flex flex-col gap-2'>
                                <p
                                    onClick={() => { navigate('/my-profile'); setShowMenu(false) }}
                                    className='px-4 py-2 rounded cursor-pointer hover:bg-gray-200'
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => { navigate('/my-appointments'); setShowMenu(false) }}
                                    className='px-4 py-2 rounded cursor-pointer hover:bg-gray-200'
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => { setToken(false); setShowMenu(false) }}
                                    className='px-4 py-2 rounded cursor-pointer hover:bg-gray-200'
                                >
                                    Logout
                                </p>
                            </div>
                        )}

                        {!token && (
                            <button
                                onClick={() => navigate('/login')}
                                className='bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white px-6 py-2 rounded-full mt-4 w-full'
                            >
                                Create Account
                            </button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
