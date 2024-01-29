import React from 'react'
import { creators } from '../../utils/creators'

function Creators() {
  return (
    <div className='w-full'>
        <div className="w-[80%] mt-12 max-w-[1600px] mx-auto">
            <h2 className='text-3xl font-[500]'>Top Creators</h2>
            <p className='text-lg text-opacity-75'>Checkout top rated creators on NFT Hub</p>
            <div className="w-full flex flex-wrap justify-between mt-6">
                {
                    creators.map((creator, index) => (
                        <div key={creator.id} className={`w-full md:w-[48%] lg:w-[24%] ${index > 5 ? 'hidden md:flex' : 'flex'} flex-row md:flex-col gap-y-3 gap-x-6 justify-center items-center h-[125px] md:h-[240px] bg-[#3b3b3b] mb-4 rounded-2xl`}>
                            <div className="">
                                <img src={creator.avatar} alt="..." className='w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full object-cover' />
                            </div>
                            <div className="flex flex-col gap-y-3 items-center justify-center">
                                <p className='text-[16px] font-[500]'>{creator.title}</p>
                                <p className='text-xs font-[400] text-[#ccc]'>Total Sales: <span className='text-white'>{creator.sales + " ETH"} </span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Creators