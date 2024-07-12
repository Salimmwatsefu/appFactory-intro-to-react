import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const links = [
    {to: "/", label: "Home"},
    {to: "/about", label:"About"},
    {to: "/projects", label:"Projects"},
    {to: "/contacts", label:"Contacts"},

  ]


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
              {links.map((link, index) => (
              <NavLink to={link.to} key={index}>
              <li className=' hover:text-purple-500'>{link.label}</li>
              </NavLink>
              ))}
            </ul>

           </div>

        </div>
    </div>
  )
}

export default Navbar