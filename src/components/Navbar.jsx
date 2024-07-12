import React from 'react'

function Navbar() {
  return (
    <div>
        <div className=' bg-white h-[90px] flex'>
           <div className=' flex items-center ml-12 gap-3'>
            <img
            src='Images/pp8.png'
            alt=''
            className=' h-12 w-12 rounded'
            />
            <p className=' text-base font-bold uppercase text-gray-700'>Salim Mwatsefu</p>

           </div>

           {/*Nav Links */}
           <div className=' ml-[500px] '>
            <ul className=' flex gap-16 pt-[34px] text-sm font-bold uppercase text-gray-800'>
              <li className=' hover:text-purple-500'>Home</li>
              <li className=' hover:text-purple-500'>About</li>
              <li className=' hover:text-purple-500'>Projects</li>
              <li className=' hover:text-purple-500'>Contacts</li>
            </ul>

           </div>

        </div>
    </div>
  )
}

export default Navbar