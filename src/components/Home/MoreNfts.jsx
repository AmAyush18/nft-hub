import React from 'react'
import { moreNfts } from '../../utils/moreNfts'

function MoreNfts() {
  return (
    <div className='w-full'>
        <div className="w-[80%] py-12 mx-auto max-w-[1600px]">
            <h2 className='text-3xl font-[500]'>Discover More NFTs</h2>
            <p className='text-lg text-opacity-75'>Explore latest trending NFTs at our marketplace</p>
            <div className="w-full mt-6 flex md:flex-row flex-col gap-y-6 md:gap-y-0 md:justify-between">
                {
                    moreNfts.map((nft, index) => (
                        <div className={`w-[100%] mx-auto md:mx-0 md:w-[49%] lg:w-[32%] ${index === 2 ? 'flex md:hidden lg:flex' : 'flex' } flex-col `}>
                            <img src={nft.img} alt="..." className='w-[100%] h-[480px] md:h-[360px] object-cover rounded-t-xl' />
                            <div className="w-[100%] bg-[#3b3b3b] py-4 rounded-b-xl">
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
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MoreNfts