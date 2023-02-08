import React from 'react'

export default function PatientInfo() {
  return (
     <ul className='flex items-center justify-start flex-wrap gap-2 bg-black py-2 px-3 mb-4'>
        <li className='text-gray-300 text-md'>patient Name: <span className='text-main-yellow-600 font-bold text-sm'>Ahmed Mahmoud</span></li>
        <li className='text-gray-300 text-md'>Age: <span className='text-main-yellow-600 font-bold text-sm'>55</span></li>
        <li className='text-gray-300 text-md'>Gender: <span className='text-main-yellow-600 font-bold text-sm'>Male</span></li>
        <li className='text-gray-300 text-md'>Tel: <span className='text-main-yellow-600 font-bold text-sm'>012345678901</span></li>
        <li className='text-gray-300 text-md'>Address: <span className='text-main-yellow-600 font-bold text-sm'>Cairo, Egypt</span></li>
        <li className='text-gray-300 text-md'>Nationality: <span className='text-main-yellow-600 font-bold text-sm'>Egyptian</span></li>
        <li className='text-gray-300 text-md'>Code: <span className='text-main-yellow-600 font-bold text-sm'>11121459785</span></li>

        <li className='text-gray-300 text-md'>last visit: <span className='text-main-yellow-600 font-bold text-sm'>12-12-2020</span></li>
    </ul>
  )
}
