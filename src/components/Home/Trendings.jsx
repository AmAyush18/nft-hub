import React from 'react'
import animal1 from '../../assets/Images/ai-image-0.png';
import animal2 from '../../assets/Images/ai-dog.png';
import animal3 from '../../assets/Images/ai-cat.jpg';

import game1 from '../../assets/Images/ai-game-1.jpg'
import game2 from '../../assets/Images/ai-game-2.jpg'
import game3 from '../../assets/Images/ai-game-3.png'

import warrior1 from '../../assets/Images/new-ai-img-3.jpg'
import warrior2 from '../../assets/Images/ai-warrior-2.jpg'
import warrior3 from '../../assets/Images/ai-warrior.jpg'

import user from '../../assets/Images/ai-user.jpg'
import user2 from '../../assets/Images/ai-user-2.jpg'
import user3 from '../../assets/Images/ai-warrior-3.jpg'

function Trendings() {
  return (
    <div className='w-full'>
        <div className="w-[80%] mx-auto max-w-[1600px] mt-14 py-12 flex flex-col gap-y-2">
            <h2 className='text-3xl font-[500]'>Trending Collection</h2>
            <p className='text-lg text-opacity-75'>Checkout our weekly updated trending collection</p>
            <div className="w-full mt-6 flex md:flex-row flex-col gap-y-6 md:gap-y-0 md:justify-between">
                <div className="w-[100%] mx-auto md:mx-0 md:w-[49%] lg:w-[32%] flex flex-col gap-y-2">
                    <img src={animal1} alt="..." className='w-[100%] h-[360px] object-cover rounded-xl' />
                    <div className="w-full flex justify-between">
                        <div className="w-[32%]">
                            <img src={animal2} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%]">
                            <img src={animal3} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%] bg-teal-600 flex items-center justify-center rounded-xl">
                            <p className='text-xl'>1000+</p>
                        </div>
                    </div>
                    <div className="w-full py-1 flex flex-col gap-y-1 rounded-b-xl">
                        <h4 className='text-lg font-[500]'>Creepy Animals</h4>
                        <div className="flex items-center gap-x-2">
                            <img src={user} alt="" className='w-[32px] h-[32px] rounded-full object-cover' />
                            <p className='text-sm'>BinaryCreates</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-[100%] mx-auto md:mx-0 md:w-[49%] lg:w-[32%] flex flex-col gap-y-2">
                    <img src={game1} alt="..." className='w-[100%] h-[360px] object-cover rounded-xl' />
                    <div className="w-full flex justify-between">
                        <div className="w-[32%]">
                            <img src={game2} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%]">
                            <img src={game3} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%] bg-teal-600 flex items-center justify-center rounded-xl">
                            <p className='text-xl'>1000+</p>
                        </div>
                    </div>
                    <div className="w-full py-1 flex flex-col gap-y-1 rounded-b-xl">
                        <h4 className='text-lg font-[500]'>Gamers Arena</h4>
                        <div className="flex items-center gap-x-2">
                            <img src={user2} alt="" className='w-[32px] h-[32px] rounded-full object-cover' />
                            <p className='text-sm'>DaisyCodes</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-[100%] mx-auto md:mx-0 lg:w-[32%] md:hidden lg:flex flex-col gap-y-2">
                    <img src={warrior1} alt="..." className='w-[100%] h-[360px] object-cover rounded-xl' />
                    <div className="w-full flex justify-between">
                        <div className="w-[32%]">
                            <img src={warrior2} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%]">
                            <img src={warrior3} alt="..." className='w-[100%] h-[120px] object-cover rounded-xl' />
                        </div>
                        <div className="w-[32%] bg-teal-600 flex items-center justify-center rounded-xl">
                            <p className='text-xl'>1000+</p>
                        </div>
                    </div>
                    <div className="w-full py-1 flex flex-col gap-y-1 rounded-b-xl">
                        <h4 className='text-lg font-[500]'>The Warriors</h4>
                        <div className="flex items-center gap-x-2">
                            <img src={user3} alt="" className='w-[32px] h-[32px] rounded-full object-cover' />
                            <p className='text-sm'>MrBinaryBeast</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Trendings