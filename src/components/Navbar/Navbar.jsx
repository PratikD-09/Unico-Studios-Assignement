import React from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import icon from "../../images/icon.png"

export default function Navbar() {
  return (
    <div className='flex justify-center align-middle font-mont h-[155px]'>
      <div className='navContainer mt-[32px] rounded-[52px] '>
        <div className='logo'><img className='logo h-[17px] w-[77px] ml-6' src={logo} alt="img" /></div>
        <div className='h-[28px] w-[94px] rounded-[44px] bg-white text-center ml-[64px]'>Home</div>
        <ul class="flex  text-white ml-3 gap-12 text-[16px]">
            <li className='ml-4'>About Us</li>
            <li className='ml-4 flex '>Services<img className='w-[12px] h-[7px] ml-2 mt-2' src={icon} alt=''></img></li>
            <li className='ml-4'>Our Work</li>
            <li className='ml-4'>Contact Us</li>
        </ul>
        
      </div>
    </div>
  )
}



