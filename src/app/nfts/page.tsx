import NftMap from '@/components/features/NftMap'
import { nfts } from '@/data/nfts'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col text-white gap-5 px-3 md:px-20 py-10'>
      <p className='text-4xl font-bold'>NFT Market Place</p>
      <div className='flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>Recent Arts</p>
        <NftMap
          nfts={nfts.filter((nft) => nft.category.includes("recent"))}
        />
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>Popular Arts</p>
        <NftMap
          nfts={nfts.filter((nft) => nft.category.includes("popular"))}
          color='purple'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>Special Arts</p>
        <NftMap
          nfts={nfts.filter((nft) => nft.category.includes("special"))}
        />
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>Rare Arts</p>
        <NftMap
          nfts={nfts.filter((nft) => nft.category.includes("rare"))}
          color='purple'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>Limited Edition</p>
        <NftMap
          nfts={nfts.filter((nft) => nft.category.includes("limited edition"))}
        />
      </div>
    </div>
  )
}

export default page