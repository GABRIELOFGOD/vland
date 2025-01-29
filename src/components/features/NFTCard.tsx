import { NFT } from '@/model/nftTypes'
import { formatMoney } from '@/services/moneyEditor'
import Image from 'next/image'
import React from 'react'
// import { FaMoneyBill1 } from 'react-icons/fa6'
// import BigButton from '../common/buttons/BigButton'

const NFTCard = ({nft, color}: {nft: NFT, color?: string}) => {
  // const image = "/images/vland.jpg"
  
  return (
    <div className='text-white w-[150px]'>
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
          {/* <div className="flex gap-2">
            <FaStar size={15} className='my-auto' />
            <p className='text-sm my-auto'>{property.rating}</p>
          </div> */}
          {/* <div className="flex gap-2">
            <FaMoneyBill1 size={15} className='my-auto' />
            <p className='text-sm my-auto font-semibold text-primary'>${formatMoney(nft.price)}</p>
          </div> */}
          {/* <BigButton
            text={`$${formatMoney(nft.price)}`}
          /> */}
          <button className={color == "purple" ? "color-box-purple" : "color-box"}>
            ${formatMoney(nft.price)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTCard