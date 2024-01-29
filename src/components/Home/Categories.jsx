import React from 'react'
import { categories } from '../../utils/categories'

function Categories() {
  return (
    <div className='w-full'>
        <div className="w-[80%] max-w-[1600px] mx-auto mt-14 py-12 flex flex-col gap-y-2">
            <h2 className='text-3xl font-[500]'>Browse Categories</h2>
            <p className='text-lg text-opacity-75'>Explore different categories and browse exciting NFTs</p>
            <div className="w-full flex flex-wrap justify-between mt-6">
                {
                    categories.map((category) => (
                        <div key={category.id} className="w-full md:w-[48%] lg:w-[24%] flex flex-col justify-center items-center mb-4">
                            <img src={category.img} alt="..." className='w-full h-[240px] object-cover rounded-t-xl' />
                            <div className='w-full bg-[#3b3b3b] px-5 py-4 rounded-b-xl'>
                                <p className='text-[16px] font-[600]'>{category.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Categories