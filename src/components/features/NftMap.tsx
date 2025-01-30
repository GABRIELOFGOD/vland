"use client"

import { NFT } from '@/model/nftTypes'
import React, { useState } from 'react'
import NFTCard from './NFTCard'
import NFTModel from '../layout/nft/NFTModel'

const NftMap = ({nfts, color, category}: {nfts: NFT[], color?: string, category: "popular" | "rare" | "recent" | "special" | "limited edition"}) => {
  const [selectedNft, setSelectedNft] = useState<NFT | null>(null)

  const handleCardClick = (nft: NFT) => {
    setSelectedNft(nft)
  }

  const handleCloseModal = () => {
    setSelectedNft(null)
  }

  return (
    <div className='flex flex-wrap md:gap-10 gap-5 justify-evenly md:justify-normal'>
      {nfts.map((nft, i) => (
        <NFTCard
          key={i}
          nft={nft}
          color={color}
          category={category}
          onClick={() => handleCardClick(nft)}
        />)
      )}
      {selectedNft && <NFTModel nft={selectedNft} color={category == "rare" ? "bg-green-500" : category == "popular" ? "bg-blue-500" : category == "special" ? "bg-red-500" : category == "recent" ? "bg-yellow-500" : "bg-pink-500"} onClose={handleCloseModal} />}
    </div>
  )
}

export default NftMap