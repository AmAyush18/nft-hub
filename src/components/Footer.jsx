import React from 'react'
import logo from '../assets/Images/nft.png';
import { RiDiscordLine, RiYoutubeLine, RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const navOptionsFooter = [
  {
    id: `NAVF001`,
    title: `Marketplace`,
    url: `#`
  },
  {
    id: `NAVF002`,
    title: `About`,
    url: `#`
  },
  {
    id: `NAVF003`,
    title: `Contact`,
    url: `#`
  },
  {
    id: `NAVF004`,
    title: `Connect a wallet`,
    url: `#`
  }
]

function Footer() {
  return (
    <div className='w-full bg-[#3B3B3B]'>
      <div className="w-[90%] mx-auto py-4 flex justify-between gap-x-4">
        <div className="w-[33%] flex flex-col justify-evenly py-2 gap-y-5">
          <div>
            <Link to={"/"} className="flex gap-x-2 items-center">
              <img src={logo} alt="..." className='w-[24px] h-[24px] object-cover' />
              <h2 className='text-lg header'>NFT Hub</h2>
            </Link>
          </div>
          <p className='text-sm text-[#ccc] w-[85%]'>NFT Hub is a landing page created to showcase React + Tailwind Skills.</p>
          <div className="flex flex-col gap-y-3">
            <p className='text-sm text-[#ccc]'>Join our community</p>
            <div className='flex gap-x-3 items-center'>
              <RiDiscordLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
              <RiYoutubeLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
              <RiLinkedinLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
              <RiTwitterXLine className='w-[18px] h-[18px] text-[#ccc] cursor-pointer' />
            </div>
          </div>
        </div>
        <div className="w-[33%] flex flex-col justify-start py-2 gap-y-4">
          <h2 className='text-[16px] header'>Explore</h2>
          <div className="flex flex-col gap-y-2">
            {
              navOptionsFooter.map((nav) => (
                <Link to={nav.url} key={nav.id}>
                  <p className='text-sm text-[#ccc]'>{nav.title}</p> 
                </Link>
              ))
            }
          </div>
        </div>
        <div className="w-[33%] flex flex-col justify-start py-2 gap-y-4">
          <h2 className='text-[16px] header'>Join Our Weekly Digest</h2>
          <div className="flex flex-col gap-y-[0.5px]">
            <p className='text-sm text-[#ccc]'>Get exclusive offers, deals &</p>
            <p className='text-sm text-[#ccc]'>updates delivered to your inbox.</p>
          </div>
          <div className="bg-[#2b2b2b] bg-opacity-65 w-[65%] rounded-md flex rounded-r-2xl">
              <input type="email" placeholder='Enter your email' className='bg-transparent w-[70%] py-2 px-3 text-sm placeholder:text-[#ccc] text-[#ccc]' style={{ borderTop: "none", borderBottom: "none", borderRight: "none", borderLeft: "none"}} />
              <button className='border-none w-[30%] bg-[#A259FF] text-sm h-full rounded-2xl'>Subscribe</button>
          </div>
        </div>
       

      </div>
      <div className='w-[80%] ml-[5%] border-b-[0.25px] border-b-[#ccc]' />
      <div className="w-[90%] mx-auto py-4">
      <p className='text-sm text-[#ccc]'>&copy; NFT Hub. Made with proud in Bharat.</p>
      </div>
    </div>
  )
}

export default Footer