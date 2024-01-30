import React from 'react'
import { nfts } from '../../utils/nfts'
import { Link } from 'react-router-dom'

function NFTs() {
  return (
    <div className='w-full bg-[#3b3b3b] border-b border-b-[#2b2b2b] shadow-xl'>
        <div className="w-[80%] mx-auto max-w-[1600px] py-14 flex flex-wrap justify-between">
            <div className="w-full mt-6 flex flex-wrap md:justify-between">
                {
                    nfts.map((nft, index) => (
                        <Link key={nft.id} to={`/nft/${nft.id}`} className={`w-[100%] mx-auto md:mx-0 md:w-[49%] lg:w-[32%] flex flex-col mb-6`}>
                            <img src={nft.img} alt="..." className='w-[100%] h-[480px] md:h-[360px] object-cover rounded-t-xl' />
                            <div className="w-[100%] bg-[#2b2b2b] py-4 rounded-b-xl">
                                <div className="w-[85%] mx-auto flex flex-col gap-y-2">
                                    <p className='text-[18px] font-[500]'>{nft.title}</p>
                                    <div className="flex items-center gap-x-2">
                                        <img src={nft.creatorAvatar} alt="" className='w-[28px] h-[28px] rounded-full object-cover' />
                                        <p className='text-sm'>{nft.creatorName}</p>
                                    </div>
                                    <div className='w-full flex justify-between mt-3'>
                                        <div className="flex flex-col gap-y-1">
                                            <p className='text-xs text-[#ccc]'>Price</p>
                                            <p className='text-sm'>{nft.price + " ETH"}</p>
                                        </div>
                                        <div className="flex flex-col text-right gap-y-2">
                                            <p className='text-xs text-[#ccc]'>Highest Bid</p>
                                            <p className='text-sm'>{nft.highestBid + " wETH"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default NFTs