import React from 'react'
import Hero from './Hero';
import Trendings from './Trendings';
import Creators from './Creators';
import Categories from './Categories';
import MoreNfts from './MoreNfts';
import Highlight from './Highlight';
import Working from './Working';

function Home() {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Trendings />
      <Creators />
      <Categories />
      <MoreNfts />
      <Highlight />
      <Working />
    </div>
  )
}

export default Home