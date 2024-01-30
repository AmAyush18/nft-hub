import React from 'react'

function Hero({nft}) {
    const { img, title, date, creatorAvatar, creatorName, description} = nft;
  return (
    <div className='w-full'>
        <div className="w-[80%] mt-6 mx-auto max-w-[1600px] flex md:flex-row flex-col-reverse gap-y-4 justify-between bg-[#3b3b3b] py-12 rounded-xl px-6 md:px-12 lg:px-16">
            <div className="w-[100%] md:w-[48%]">
                <h2 className='text-[24px] md:text-[36px] lg:text-[48px] header'>{title}</h2>
                <p className='mt-3 text-xs md:text-[16px] text-[#858584]'>Minted on {date}</p>
                <p className='mt-6 text-xs md:text-[16px] text-[#858584]'>Created By</p>
                <div className="mt-2 flex items-center gap-x-2">
                    <img src={creatorAvatar} alt="" className='w-[30px] h-[30px] rounded-full object-cover' />
                    <p className='text-sm text-[#ccc]'>{creatorName}</p>
                </div>
                <p className='mt-6 text-xs md:text-[16px] text-[#858584]'>Description</p>
                <p className='mt-3 text-xs md:text-[16px] lg:text-lg leading-6 text-left text-[#ccc]'>{description}</p>

            </div>
            <div className="w-[100%] mx-auto md:mx-0 md:w-[50%]">
                <img src={img} alt="..." className='w-[100%] h-[480px] md:h-[440px] lg:h-[480px] object-cover rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default Hero