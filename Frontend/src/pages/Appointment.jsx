import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { assets } from '../assets/assets'
const Appointment = () => {

  const {docId}  =useParams()
  const {doctors, currencySymbol} = useContext(AppContext)

  const [docInfo , setDocInfo] = useState(null)

  const fetchDocInfo = async ()=> {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()

  },[doctors,docId])

  return docInfo && (
    <div>
      {/* Doctor detals */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max w-72 rounded-lg bg-gradient-to-b from-blue-100 to-green-50' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border-gray-400 rounded-lg p-8 py-7 bg-white mx:2 sm:mx-0 mt-[-80px] sm:mt-0' >
          {/* doc info, name,degree,experience.... */}
          <p className='flex items-center gap-2 text-2xl  font font-medium text-gray-900 '>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>
          {/* doctors about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1' >{docInfo.about}</p>
          </div>
          <p>
            Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Appointment