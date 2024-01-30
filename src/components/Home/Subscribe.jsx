import React from 'react'
import subscribe from '../../assets/Images/highlight-3.jpg'
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom'

function Subscribe() {
  return (
    <div className='w-full'>
        <div className="w-[80%] mx-auto max-w-[1600px] bg-[#3b3b3b] rounded-xl py-12 mb-14 flex md:flex-row flex-col gap-y-4 md:gap-y-0 justify-start md:justify-between px-6 md:px-12 lg:px-16">
            <div className="w-[100%] mx-auto md:mx-0 md:w-[48%]">
                <img src={subscribe} alt="..." className='w-[100%] h-[360px] object-cover rounded-xl' />
            </div>
            <div className="w-[100%] flex flex-col mx-auto md:mx-0 md:w-[50%] px-6 justify-center md:h-[360px]">
                <h2 className='text-[24px] md:text-[36px] lg:text-[48px] header'>Join Our Weekly Digest</h2>
                <p className='mt-6 text-xs md:text-sm lg:text-lg text-[#ccc]'>Get exclusive offers, deals & updates delivered to your inbox.</p>
                <div className="bg-[#2b2b2b] bg-opacity-65 mt-6 w-[100%] rounded-md flex rounded-r-2xl">
                    <input type="email" placeholder='Enter your email' className='bg-transparent w-[70%] py-3 lg:py-4 px-3 text-sm placeholder:text-[#ccc] text-[#ccc] active:border-none' style={{ borderTop: "none", borderBottom: "none", borderRight: "none", borderLeft: "none"}} />
                    <Link className='w-[30%] hidden lg:block bg-teal-600 text-sm h-[100%] py-4 rounded-2xl text-center'>Subscribe</Link>
                    <Link className='w-[30%] lg:hidden bg-teal-600 flex items-center justify-center text-sm h-[100%] py-3 rounded-2xl text-center'><FiSend className='w-[18px] h-[18px]' /> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe