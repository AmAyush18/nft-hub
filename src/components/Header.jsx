import React from 'react';
import logo from '../assets/Images/nft.png'
import { Link, NavLink } from 'react-router-dom';

const navOptions = [
  {
    id: `NAV001`,
    title: `Marketplace`,
    url: `#`
  },
  {
    id: `NAV002`,
    title: `About`,
    url: `#`
  },
  {
    id: `NAV003`,
    title: `Contact`,
    url: `#`
  }
]

const Header = () => {
  return (
    <div className='w-full border-b border-b-[#3b3b3b] shadow-md'>
      <div className="w-[90%] mx-auto py-4 flex justify-between">
        <div>
          <Link to={"/"} className="flex gap-x-2 items-center">
            <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
            <h2 className='text-2xl header'>NFT Hub</h2>
          </Link>
        </div>
        <div className="flex gap-x-4 items-center">
          {
            navOptions.map((nav) => (
              <NavLink to={nav.url} key={nav.id} className={({isActive}) => `hover:text-[#A259FF] text-[16px]`}>
                  {nav.title}
              </NavLink>
            ))
          }
        </div>
        <div className="flex items-center">
          <Link to={"#"} className='px-4 py-2 bg-[#A259FF] text-sm rounded-md'>
              Connect a wallet
          </Link>
        </div>  
      </div>
    </div>
  )
}

export default Header