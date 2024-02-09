import React from 'react'
import Navbar from '../components/Navbar'

export default function AdminPage() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between h-full'>
        <div className='border-y-2 border-black w-1/3 h-screen flex justify-center'>
            <div className='border-2 inline-block justify-center'>Name</div>
             
        </div>
        <div className='border-2 border-black w-1/3 h-screen flex justify-center'>Email</div>
        <div className='border-y-2 border-black w-1/3 h-screen flex justify-center'>Profile</div>
      </div>
    </div>
  )
}
