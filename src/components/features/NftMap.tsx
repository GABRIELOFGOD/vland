import { NFT } from '@/model/nftTypes'
import React from 'react'
import NFTCard from './NFTCard'

const NftMap = ({nfts, color}: {nfts: NFT[], color?: string}) => {
  return (
    <div className='flex flex-wrap gap-10 justify-normal'>
      {nfts.map((nft, i) => (
        <NFTCard
          key={i}
          nft={nft}
          color={color}
        />)
      )}
    </div>
  )
}

export default NftMap