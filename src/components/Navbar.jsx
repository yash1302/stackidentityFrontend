import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='w-full h-16 bg-[#84B5FF] flex items-center justify-end gap-x-14'>
            <button className='text-xl font-light bg-[#FFD7D7] px-3 py-2 mr-16' >Requests</button>
            <button className='text-xl font-light bg-[#FFD7D7] px-3 py-2 mr-16'>Policies</button>
            <button className='text-xl font-light bg-[#FFD7D7] px-5 py-2 mr-16'>Groups</button>
      </nav>
    </div>
  )
}
