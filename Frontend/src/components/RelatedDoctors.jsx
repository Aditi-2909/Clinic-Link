import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {

    const  {doctors} = useContext(AppContext)

    const [relDoc,setRelDoc] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    },[doctors,docId,speciality])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted docotrs</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image} alt="" className='bg-gradient-to-b from-blue-100 to-green-50 py-10' />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500 font-bold'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] */}
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] hover:from-blue-600 hover:to-green-600 text-white cursor-pointer px-8 py-3 rounded-full font-semibold hidden md:block hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'>
                more
            </button>
        </div>
  )
}

export default RelatedDoctors