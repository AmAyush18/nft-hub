import React from 'react'
import Hero from './Hero';
import Trendings from './Trendings';
import Creators from './Creators';

function Home() {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Trendings />
      <Creators />
    </div>
  )
}

export default Home