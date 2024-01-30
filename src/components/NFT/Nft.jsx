import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../utils/Loader/Loader';
import { nfts } from '../../utils/nfts';
import Hero from './Hero';

function Nft() {
  const { nftId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentNft, setCurrentNft] = useState({});
  const [moreNft, setMoreNft] = useState([]);

  useEffect(() => {
    const findNFT = (nftId) => {
      const filterNft = nfts.filter((nft) => nft.id === nftId)
      setCurrentNft(filterNft[0]);
      if(!currentNft){
        const moreFromCreator = nfts.filter((nft) => nft.id !== nftId && currentNft.creatorName === nft.creatorName)
        setMoreNft(moreFromCreator);
      }
      setIsLoading(false); 
    }

    findNFT(nftId);
  }, [])
  return (
    <div className='w-full'>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="w-full py-12">
            <Hero nft={currentNft} />
          </div>
        )
      }
    </div>
  )
}

export default Nft