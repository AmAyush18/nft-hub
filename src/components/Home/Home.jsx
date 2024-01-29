import React from 'react'
import Hero from './Hero';
import Trendings from './Trendings';

function Home() {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Trendings />
    </div>
  )
}

export default Home