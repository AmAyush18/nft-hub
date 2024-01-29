import React from 'react'
import scenary from '../../assets/Images/highlight-2.jpg'

function Highlight() {
  return (
    <div className='w-full'>
        <div className="w-full py-12">
            <img src={scenary} alt="..." className='w-full h-[540px] object-cover'/>
        </div>
    </div>
  )
}

export default Highlight