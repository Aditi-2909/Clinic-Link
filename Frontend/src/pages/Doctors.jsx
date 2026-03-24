import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { specilality} = useParams()
  const [filterDoc , setFilterDoc] = useState([])

  const {doctors} = useContext(AppContext)

  const applyFilter= () => {
    if(specilality){
      setFilterDoc(doctors.filter(doc => doc.speciality == specilality))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
   applyFilter()
  },[doctors,specilality])

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologis</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologis</p>
        </div>
        <div>
          {
            filterDoc.map((item, index) => (
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image} alt="" className='bg-gradient-to-b from-blue-100 to-green-50 py-10' />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500 font-bold'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors