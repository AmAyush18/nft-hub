import React from 'react'
import { workings } from '../../utils/workings'

function Working() {
  return (
    <div className='w-full'>
        <div className="w-[80%] mx-auto max-w-[1600px] py-12">
            <h2 className='text-3xl font-[500]'>Are you an artist?</h2>
            <p className='text-lg text-opacity-75'>Let's help you get started</p>
            <div className="w-full mt-6 flex md:flex-row md:flex-wrap flex-col gap-y-6 md:gap-y-0 md:justify-between">
                {
                    workings.map((working) => (
                        <div key={working.id} className={`w-full md:w-[48%] lg:w-[32%] flex flex-col gap-y-2 justify-center items-center h-[420px] md:h-[400px] bg-[#3b3b3b] mb-4 rounded-2xl`}>       
                            <img src={working.icon} alt="..." className='w-[250px] h-[250px] md:w-[240px] md:h-[240px] object-cover' />
                            <p className='text-[18px] font-[500] text-center'>{working.title}</p>
                            <p className='text-[14px] font-[400] text-[#ccc] text-justify w-[75%] mx-auto'>{working.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Working