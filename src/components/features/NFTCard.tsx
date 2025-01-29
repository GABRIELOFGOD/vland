import { NFT } from '@/model/nftTypes'
import { formatMoney } from '@/services/moneyEditor'
import Image from 'next/image'
import React from 'react'

const NFTCard = ({nft, color, onClick}: {nft: NFT, color?: string, category: "popular" | "rare" | "recent" | "special" | "limited edition", onClick: () => void}) => {
  return (
    <div className='text-white w-[150px]' onClick={onClick}>
      <div className='w-[150px] h-[200px] bg-gray-200 overflow-hidden'>
        <div className='hover:scale-110 duration-200 w-full h-full relative'>
          <Image
            src={nft.image}
            alt={nft.name}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='w-full'>
        <p className='text-lg font-semibold text-primary truncate'>{nft.name}</p>
        <div className='flex justify-between'>
          <button className={color == "purple" ? "color-box-purple" : "color-box"}>
            ${formatMoney(nft.price)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTCard