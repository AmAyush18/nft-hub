import React from 'react'
import Hero from './Hero';
import Trendings from './Trendings';
import Creators from './Creators';
import Categories from './Categories';

function Home() {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Trendings />
      <Creators />
      <Categories />
    </div>
  )
}

export default Home