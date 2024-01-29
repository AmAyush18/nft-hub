import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

function Head() {
    const [search, setSearch] = useState("");

  return (
    <div className='w-full'>
        <div className="w-[80%] mx-auto max-w-[1600px] py-16 gap-y-4">
            <h1 className='text-[38px] lg:text-[48px] font-[500]'>Browse Marketplace</h1>
            <p className='text-[18px] md:text-[22px] font-[400]'>Browse through more than 5k NFTs on the NFT Hub.</p>
            <div className='w-full relative mt-4'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search your favourite NFTs' className='w-full py-3 px-3 border border-[#3b3b3b] bg-[#3b3b3b] bg-opacity-85 rounded-xl' />
                <IoSearch className='font-[600] text-[22px] text-[#ccc] absolute top-3 right-5' />
            </div>
        </div>
    </div>
  )
}

export default Head